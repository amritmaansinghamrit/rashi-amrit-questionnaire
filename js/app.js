// App State
let currentSection = 1;
const totalSections = sections.length;
let formData = {};
let mediaRecorder = null;
let audioChunks = [];
const canvasContexts = {};

// Initialize Firebase
let database, storage;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeFirebase();
    loadPhotoSlideshow();
    loadFromLocalStorage();
    renderSections();
    updateProgress();
    updateNavigation();
});

// Initialize Firebase
function initializeFirebase() {
    if (typeof firebase !== 'undefined' && firebaseConfig) {
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        storage = firebase.storage();
        console.log('Firebase initialized');
    } else {
        console.warn('Firebase not configured');
    }
}

// Photo Slideshow
function loadPhotoSlideshow() {
    const photos = [
        '765AE223-5DAE-43F5-89C8-8F532970C274_1_105_c.jpeg',
        '776353E4-F7B3-4F2E-B7BF-5A2F2094730A_1_105_c.jpeg',
        'A6966838-1D03-4785-8043-B662AFD23CF9_1_105_c.jpeg',
        '97515A1C-6157-4978-A69E-306DBF9B3EA9_1_105_c.jpeg',
        'F46017EF-F2C1-4B51-9F08-7AFA7F8AC50B_1_105_c.jpeg',
        'ECC694B4-709A-47DD-9135-F68E0E7009CA_1_105_c.jpeg',
        '2E254619-C91F-44C4-92F5-34D3E4DAA046_1_105_c.jpeg',
        '6E0753D6-4D1C-4F67-8743-381F050F07E5_1_105_c.jpeg',
        'F6A6AD81-DE49-4680-98B3-3603C5D3002C_1_105_c.jpeg',
        'DDD85959-CCA2-410F-B378-6C2E40876A54_1_105_c.jpeg'
    ];

    let currentPhoto = 0;
    const slideshow = document.getElementById('photoSlideshow');

    function changePhoto() {
        slideshow.style.backgroundImage = `url('images/${photos[currentPhoto]}')`;
        currentPhoto = (currentPhoto + 1) % photos.length;
    }

    changePhoto();
    setInterval(changePhoto, 5000);

    // Also cycle header photo
    const headerPhotos = photos;
    let headerIndex = 0;
    setInterval(() => {
        headerIndex = (headerIndex + 1) % headerPhotos.length;
        document.getElementById('headerPhoto').src = `images/${headerPhotos[headerIndex]}`;
    }, 3000);
}

// Render all sections
function renderSections() {
    const container = document.getElementById('sectionsContainer');

    sections.forEach((section, index) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section';
        sectionDiv.setAttribute('data-section', section.id);
        if (index === 0) sectionDiv.classList.add('active');

        let html = `
            <div class="section-header">
                ${section.photos ? `
                    <div class="section-photo-grid">
                        ${section.photos.map(photo => `
                            <div class="section-photo">
                                <img src="images/${photo}" alt="Rashi & Amrit">
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                <h2 class="section-title">${section.name}</h2>
                <p class="section-subtitle">${section.subtitle}</p>
                ${section.loveNote ? `<div class="love-note">${section.loveNote}</div>` : ''}
            </div>
        `;

        if (section.completion) {
            html += `
                <div class="love-note" style="padding: 3rem; text-align: center;">
                    <h2 style="font-size: 2rem; margin-bottom: 1rem;">You Did It! 💕</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 1rem;">
                        118 questions, every single one from your heart to mine
                    </p>
                    <p style="color: var(--secondary); margin-bottom: 2rem;">
                        Click below to save everything forever - I'll treasure every word, every drawing, every voice note.
                    </p>
                </div>
            `;
        } else if (section.questions) {
            section.questions.forEach((q, qIndex) => {
                html += renderQuestion(q, qIndex + 1);
            });
        }

        sectionDiv.innerHTML = html;
        container.appendChild(sectionDiv);

        // Initialize interactive elements after rendering
        if (section.questions) {
            setTimeout(() => initializeQuestionElements(section), 100);
        }
    });
}

// Render individual question
function renderQuestion(q, num) {
    let inputHTML = '';

    switch (q.type) {
        case 'text':
        case 'url':
            inputHTML = `<input type="${q.type}" id="${q.id}" placeholder="${q.placeholder || ''}" class="form-input">`;
            break;

        case 'textarea':
            inputHTML = `<textarea id="${q.id}" placeholder="${q.placeholder || ''}" class="form-input"></textarea>`;
            break;

        case 'date':
        case 'time':
        case 'datetime':
            const type = q.type === 'datetime' ? 'datetime-local' : q.type;
            inputHTML = `<input type="${type}" id="${q.id}" class="form-input">`;
            break;

        case 'dropdown':
            inputHTML = `
                <select id="${q.id}" class="form-input">
                    <option value="">Choose...</option>
                    ${q.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>
            `;
            break;

        case 'radio':
            inputHTML = `
                <div class="radio-group" id="${q.id}-group">
                    ${q.options.map(opt => `
                        <label class="radio-option">
                            <input type="radio" name="${q.id}" value="${opt}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            `;
            break;

        case 'checkbox':
            inputHTML = `
                <div class="checkbox-group" id="${q.id}-group">
                    ${q.options.map(opt => `
                        <label class="checkbox-option">
                            <input type="checkbox" name="${q.id}" value="${opt}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            `;
            break;

        case 'slider':
            inputHTML = `
                <input type="range" id="${q.id}" min="1" max="10" value="5" class="form-input">
                <div class="slider-value" id="${q.id}-value">5</div>
            `;
            break;

        case 'color':
            inputHTML = `<input type="color" id="${q.id}" value="#e74c3c" class="form-input">`;
            break;

        case 'color-palette':
            inputHTML = `
                <div class="color-palette-container">
                    ${Array.from({length: q.count}, (_, i) =>
                        `<input type="color" id="${q.id}-${i+1}" value="#e74c3c" class="form-input">`
                    ).join('')}
                </div>
            `;
            break;

        case 'photo':
            inputHTML = `
                <input type="file" id="${q.id}" accept="image/*" class="form-input">
                <div class="file-preview" id="${q.id}-preview"></div>
            `;
            break;

        case 'voice':
            inputHTML = `
                <div class="voice-recorder">
                    <button class="record-button" id="${q.id}-btn" data-question="${q.id}">
                        <span class="record-icon">🎤</span>
                        <span class="record-text">Start Recording</span>
                    </button>
                    <audio controls class="audio-preview" id="${q.id}-audio" style="display: none; width: 100%;"></audio>
                </div>
            `;
            break;

        case 'canvas':
            inputHTML = `
                <div class="canvas-container">
                    <canvas id="${q.id}-canvas" width="700" height="400"></canvas>
                </div>
                <div class="canvas-controls">
                    <button class="btn-canvas" data-canvas="${q.id}">Clear</button>
                </div>
            `;
            break;

        case 'signature':
            inputHTML = `
                <div class="canvas-container">
                    <canvas id="${q.id}-canvas" width="700" height="200"></canvas>
                </div>
                <div class="canvas-controls">
                    <button class="btn-canvas" data-canvas="${q.id}">Clear</button>
                </div>
            `;
            break;

        case 'emoji':
            inputHTML = `
                <div class="emoji-picker-container" id="${q.id}-picker">
                    ${q.emojis.map(emoji =>
                        `<div class="emoji-option" data-emoji="${emoji}">${emoji}</div>`
                    ).join('')}
                </div>
                <div class="selected-emoji" id="${q.id}-selected"></div>
            `;
            break;
    }

    return `
        <div class="question">
            <label class="question-label">
                <span class="question-number">${getGlobalQuestionNumber(q.id)}.</span>
                ${q.text}
                ${q.note ? `<div class="question-note">${q.note}</div>` : ''}
            </label>
            ${inputHTML}
        </div>
    `;
}

// Get global question number
function getGlobalQuestionNumber(qId) {
    return parseInt(qId.replace('q', ''));
}

// Initialize question elements (event listeners, etc.)
function initializeQuestionElements(section) {
    section.questions.forEach(q => {
        const element = document.getElementById(q.id);

        // Text inputs
        if (['text', 'url', 'date', 'time', 'datetime', 'textarea'].includes(q.type)) {
            element?.addEventListener('change', () => {
                formData[q.id] = element.value;
                saveData();
            });
            if (formData[q.id]) {
                element.value = formData[q.id];
            }
        }

        // Dropdown
        if (q.type === 'dropdown') {
            element?.addEventListener('change', () => {
                formData[q.id] = element.value;
                saveData();
            });
            if (formData[q.id]) {
                element.value = formData[q.id];
            }
        }

        // Radio
        if (q.type === 'radio') {
            const radios = document.querySelectorAll(`input[name="${q.id}"]`);
            radios.forEach(radio => {
                radio.addEventListener('change', () => {
                    if (radio.checked) {
                        formData[q.id] = radio.value;
                        // Update UI
                        const parent = radio.closest('.radio-group');
                        parent.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
                        radio.closest('.radio-option').classList.add('selected');
                        saveData();
                    }
                });
                if (formData[q.id] === radio.value) {
                    radio.checked = true;
                    radio.closest('.radio-option').classList.add('selected');
                }
            });
        }

        // Checkbox
        if (q.type === 'checkbox') {
            const checkboxes = document.querySelectorAll(`input[name="${q.id}"]`);
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    const checked = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
                    formData[q.id] = checked;
                    // Update UI
                    if (checkbox.checked) {
                        checkbox.closest('.checkbox-option').classList.add('selected');
                    } else {
                        checkbox.closest('.checkbox-option').classList.remove('selected');
                    }
                    saveData();
                });
                if (formData[q.id] && formData[q.id].includes(checkbox.value)) {
                    checkbox.checked = true;
                    checkbox.closest('.checkbox-option').classList.add('selected');
                }
            });
        }

        // Slider
        if (q.type === 'slider') {
            element?.addEventListener('input', () => {
                formData[q.id] = element.value;
                document.getElementById(`${q.id}-value`).textContent = element.value;
                saveData();
            });
            if (formData[q.id]) {
                element.value = formData[q.id];
                document.getElementById(`${q.id}-value`).textContent = formData[q.id];
            }
        }

        // Color
        if (q.type === 'color') {
            element?.addEventListener('change', () => {
                formData[q.id] = element.value;
                saveData();
            });
            if (formData[q.id]) {
                element.value = formData[q.id];
            }
        }

        // Color Palette
        if (q.type === 'color-palette') {
            for (let i = 1; i <= q.count; i++) {
                const colorInput = document.getElementById(`${q.id}-${i}`);
                colorInput?.addEventListener('change', () => {
                    if (!formData[q.id]) formData[q.id] = {};
                    formData[q.id][`color${i}`] = colorInput.value;
                    saveData();
                });
                if (formData[q.id] && formData[q.id][`color${i}`]) {
                    colorInput.value = formData[q.id][`color${i}`];
                }
            }
        }

        // Photo upload
        if (q.type === 'photo') {
            element?.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        formData[q.id] = event.target.result;
                        document.getElementById(`${q.id}-preview`).innerHTML =
                            `<img src="${event.target.result}" alt="Preview">`;
                        saveData();
                    };
                    reader.readAsDataURL(file);
                }
            });
            if (formData[q.id]) {
                document.getElementById(`${q.id}-preview`).innerHTML =
                    `<img src="${formData[q.id]}" alt="Preview">`;
            }
        }

        // Voice recording
        if (q.type === 'voice') {
            const btn = document.getElementById(`${q.id}-btn`);
            btn?.addEventListener('click', () => toggleRecording(q.id));
        }

        // Canvas
        if (q.type === 'canvas' || q.type === 'signature') {
            initializeCanvas(q.id);
        }

        // Emoji
        if (q.type === 'emoji') {
            const emojis = document.querySelectorAll(`#${q.id}-picker .emoji-option`);
            emojis.forEach(emoji => {
                emoji.addEventListener('click', () => {
                    const value = emoji.getAttribute('data-emoji');
                    formData[q.id] = value;
                    emojis.forEach(e => e.classList.remove('selected'));
                    emoji.classList.add('selected');
                    document.getElementById(`${q.id}-selected`).textContent = value;
                    saveData();
                });
            });
            if (formData[q.id]) {
                const selected = Array.from(emojis).find(e => e.getAttribute('data-emoji') === formData[q.id]);
                selected?.classList.add('selected');
                document.getElementById(`${q.id}-selected`).textContent = formData[q.id];
            }
        }
    });

    // Canvas clear buttons
    document.querySelectorAll('.btn-canvas').forEach(btn => {
        btn.addEventListener('click', () => {
            const canvasId = btn.getAttribute('data-canvas');
            clearCanvas(canvasId);
        });
    });
}

// Canvas initialization
function initializeCanvas(qId) {
    const canvas = document.getElementById(`${qId}-canvas`);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvasContexts[qId] = ctx;

    if (window.innerWidth < 768) {
        canvas.width = window.innerWidth - 100;
    }

    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function getCoords(e) {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;
        return { x, y };
    }

    function startDrawing(e) {
        isDrawing = true;
        const coords = getCoords(e);
        [lastX, lastY] = [coords.x, coords.y];
    }

    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault();
        const coords = getCoords(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        [lastX, lastY] = [coords.x, coords.y];
    }

    function stopDrawing() {
        if (isDrawing) {
            isDrawing = false;
            formData[qId] = canvas.toDataURL();
            saveData();
        }
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    // Load saved drawing
    if (formData[qId]) {
        const img = new Image();
        img.onload = () => ctx.drawImage(img, 0, 0);
        img.src = formData[qId];
    }
}

function clearCanvas(qId) {
    const canvas = document.getElementById(`${qId}-canvas`);
    const ctx = canvasContexts[qId];
    if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        delete formData[qId];
        saveData();
    }
}

// Voice recording
async function toggleRecording(qId) {
    const btn = document.getElementById(`${qId}-btn`);
    const icon = btn.querySelector('.record-icon');
    const text = btn.querySelector('.record-text');
    const audio = document.getElementById(`${qId}-audio`);

    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        btn.classList.remove('recording');
        icon.textContent = '🎤';
        text.textContent = 'Start Recording';
    } else {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioChunks = [];
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
            mediaRecorder.onstop = () => {
                const blob = new Blob(audioChunks, { type: 'audio/webm' });
                const url = URL.createObjectURL(blob);
                audio.src = url;
                audio.style.display = 'block';

                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    formData[qId] = reader.result;
                    saveData();
                };

                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            btn.classList.add('recording');
            icon.textContent = '⏹️';
            text.textContent = 'Stop Recording';

            setTimeout(() => {
                if (mediaRecorder && mediaRecorder.state === 'recording') {
                    mediaRecorder.stop();
                    btn.classList.remove('recording');
                    icon.textContent = '🎤';
                    text.textContent = 'Start Recording';
                }
            }, 10000);
        } catch (err) {
            alert('Please allow microphone access 🎤');
        }
    }
}

// Navigation
function nextSection() {
    if (currentSection < totalSections) {
        document.querySelector(`[data-section="${currentSection}"]`).classList.remove('active');
        currentSection++;
        document.querySelector(`[data-section="${currentSection}"]`).classList.add('active');
        updateProgress();
        updateNavigation();
        window.scrollTo(0, 0);
    }
}

function previousSection() {
    if (currentSection > 1) {
        document.querySelector(`[data-section="${currentSection}"]`).classList.remove('active');
        currentSection--;
        document.querySelector(`[data-section="${currentSection}"]`).classList.add('active');
        updateProgress();
        updateNavigation();
        window.scrollTo(0, 0);
    }
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    prevBtn.style.display = currentSection === 1 ? 'none' : 'flex';

    if (currentSection === totalSections) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }
}

function updateProgress() {
    const progress = (currentSection / totalSections) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('sectionProgress').textContent = `Section ${currentSection} of ${totalSections}`;
    document.getElementById('sectionName').textContent = sections[currentSection - 1].name;
}

// Save data
function saveData() {
    localStorage.setItem('rashiAmritResponses', JSON.stringify(formData));
    showSaveIndicator();
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('rashiAmritResponses');
    if (saved) {
        formData = JSON.parse(saved);
    }
}

function showSaveIndicator() {
    const indicator = document.getElementById('saveIndicator');
    indicator.classList.add('show');
    setTimeout(() => {
        indicator.classList.remove('show');
    }, 2000);
}

// Submit form
async function submitForm() {
    if (!confirm('Are you ready to save all your answers forever? This will create a permanent record of your beautiful responses.')) {
        return;
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Saving...</span>';

    try {
        // Save to Firebase
        const timestamp = Date.now();
        const responseId = `response_${timestamp}`;

        if (database) {
            await database.ref(`responses/${responseId}`).set({
                timestamp: timestamp,
                date: new Date().toISOString(),
                data: formData
            });

            // Generate output page
            window.location.href = `output.html?id=${responseId}`;
        } else {
            // Fallback: download as file
            downloadResponses();
        }
    } catch (error) {
        console.error('Error saving:', error);
        alert('There was an error saving. Your responses are still saved locally. Please contact Amrit.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Complete & Save Forever';
    }
}

function downloadResponses() {
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rashi_responses_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Your responses have been downloaded! Please send this file to Amrit.');
}
