// App State
let currentQuestionIndex = 0;
let activeQuestions = [];
let formData = {};
let mediaRecorder = null;
let audioChunks = [];
const canvasContexts = {};

// All available photos for background slideshow
const allPhotos = [
    '765AE223-5DAE-43F5-89C8-8F532970C274_1_105_c.jpeg',
    'A6966838-1D03-4785-8043-B662AFD23CF9_1_105_c.jpeg',
    'ECC694B4-709A-47DD-9135-F68E0E7009CA_1_105_c.jpeg',
    '2E254619-C91F-44C4-92F5-34D3E4DAA046_1_105_c.jpeg',
    '776353E4-F7B3-4F2E-B7BF-5A2F2094730A_1_105_c.jpeg',
    '97515A1C-6157-4978-A69E-306DBF9B3EA9_1_105_c.jpeg',
    'F46017EF-F2C1-4B51-9F08-7AFA7F8AC50B_1_105_c.jpeg',
    '6E0753D6-4D1C-4F67-8743-381F050F07E5_1_105_c.jpeg',
    'DDD85959-CCA2-410F-B378-6C2E40876A54_1_105_c.jpeg',
    'F6A6AD81-DE49-4680-98B3-3603C5D3002C_1_105_c.jpeg',
    '74ADB5B7-6C69-408F-B225-A624CD1016B9_1_105_c.jpeg',
    'CEC136A5-A832-45A1-8C2E-94145D56CE55_1_105_c.jpeg',
    '81CB59F3-323D-466C-8E67-C0A89163A67C_1_105_c.jpeg',
    '9B4C0998-DA0C-4CF5-8E44-52B6A2104CC4_1_105_c.jpeg',
    'AB9C683E-0146-426F-830B-0D5A2D5D707A_1_105_c.jpeg',
    '5307CBC5-4319-4917-8811-D34C7900ACEA_1_105_c.jpeg',
    '62DD21B5-0837-48A0-A217-5E0D6DDF5697_1_105_c.jpeg',
    '4AB52853-078C-4CEA-9F6A-275DFE693F5E_1_105_c.jpeg',
    '18DCF764-D810-484B-A0C3-D10EC66E72F4_1_105_c.jpeg',
    '2418C5CE-BCD1-409A-9698-11F5AD556E1F_1_105_c.jpeg',
    '107C7216-0A20-4803-8A5F-F066BC150B07_1_105_c.jpeg',
    '4F124CA2-8C1E-4B37-B3AD-78A6969D408B_1_105_c.jpeg',
    '9B1C08CE-BAA7-43D2-B6C9-6CEAE47B8835_1_105_c.jpeg'
];

// Initialize Firebase
let database, storage;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Check if responses are locked
    const isLocked = localStorage.getItem('rashiAmritLocked');
    if (isLocked === 'true') {
        // Redirect to output page
        window.location.href = 'output.html';
        return;
    }

    initializeFirebase();
    activeQuestions = getEnabledQuestions();
    loadFromLocalStorage();
    loadPhotoSlideshow();
    renderCurrentQuestion();
    updateProgress();
    updateNavigation();
});

// Initialize Firebase
function initializeFirebase() {
    if (typeof firebase !== 'undefined' && firebaseConfig && firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        storage = firebase.storage();
        console.log('Firebase initialized');
    } else {
        console.warn('Firebase not configured - using localStorage only');
    }
}

// Photo Slideshow
function loadPhotoSlideshow() {
    let currentPhoto = 0;
    const slideshow = document.getElementById('photoSlideshow');

    function changePhoto() {
        slideshow.style.backgroundImage = `url('images/${allPhotos[currentPhoto]}')`;
        currentPhoto = (currentPhoto + 1) % allPhotos.length;
    }

    changePhoto();
    setInterval(changePhoto, 6000);
}

// Render current question
function renderCurrentQuestion() {
    const container = document.getElementById('sectionsContainer');
    const question = activeQuestions[currentQuestionIndex];

    if (!question) {
        // Show completion
        container.innerHTML = `
            <div class="question" style="text-align: center; padding: 60px;">
                <h2 style="font-size: 2.5rem; margin-bottom: 20px; color: var(--accent);">You Did It! 💕</h2>
                <p style="font-size: 1.3rem; margin-bottom: 20px; color: var(--secondary);">
                    ${activeQuestions.length} questions, every single one from your heart to mine
                </p>
                <p style="color: var(--secondary); margin-bottom: 40px;">
                    Click below to save everything forever - I'll treasure every word, every drawing, every voice note.
                </p>
            </div>
        `;
        return;
    }

    const qId = `q${question.id}`;
    const displayNumber = currentQuestionIndex + 1; // Sequential number for display

    // Get assigned photos for this question (from config)
    const photos = questionPhotos[question.id] || [];

    // Handle Q19 dynamic text - use Q18 answer
    let questionText = question.text;
    let questionNote = question.note;
    if (question.id === 19 && formData['q18']) {
        questionNote = `Draw a symbol for "${formData['q18']}"`;
    }

    const html = `
        <div class="question" style="animation: fadeIn 0.5s ease;">
            <label class="question-label">
                <span class="question-number">${displayNumber}.</span>
                ${questionText}
                ${questionNote ? `<div class="question-note">${questionNote}</div>` : ''}
            </label>
            ${renderQuestionInput(question, qId)}
        </div>
        ${photos.length > 0 ? `
            <div class="question-photos">
                ${photos.map(photo => `<img src="images/${photo}" alt="Memory" loading="lazy">`).join('')}
            </div>
        ` : ''}
    `;

    container.innerHTML = html;
    setTimeout(() => initializeQuestionElement(question, qId), 100);
}

// Render question input based on type
function renderQuestionInput(q, qId) {
    switch (q.type) {
        case 'text':
        case 'url':
            return `<input type="${q.type}" id="${qId}" placeholder="${q.placeholder || ''}" class="form-input">`;

        case 'textarea':
            return `<textarea id="${qId}" placeholder="${q.placeholder || ''}" class="form-input"></textarea>`;

        case 'date':
        case 'time':
        case 'datetime':
            const type = q.type === 'datetime' ? 'datetime-local' : q.type;
            return `<input type="${type}" id="${qId}" class="form-input">`;

        case 'dropdown':
            return `
                <select id="${qId}" class="form-input">
                    <option value="">Choose...</option>
                    ${q.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>
            `;

        case 'radio':
            return `
                <div class="radio-group" id="${qId}-group">
                    ${q.options.map(opt => `
                        <label class="radio-option">
                            <input type="radio" name="${qId}" value="${opt}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            `;

        case 'checkbox':
            return `
                <div class="checkbox-group" id="${qId}-group">
                    ${q.options.map(opt => `
                        <label class="checkbox-option">
                            <input type="checkbox" name="${qId}" value="${opt}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
                <div style="margin-top: 10px; color: var(--secondary); font-size: 0.9em;">
                    Select up to ${q.max || 'any number of'} options
                </div>
            `;

        case 'slider':
            return `
                <input type="range" id="${qId}" min="1" max="10" value="5" class="form-input">
                <div class="slider-value" id="${qId}-value">5</div>
            `;

        case 'color':
            return `<input type="color" id="${qId}" value="#e74c3c" class="form-input">`;

        case 'color-palette':
            return `
                <div class="color-palette-container">
                    ${Array.from({length: q.count}, (_, i) =>
                        `<input type="color" id="${qId}-${i+1}" value="#e74c3c" class="form-input">`
                    ).join('')}
                </div>
            `;

        case 'photo':
            return `
                <input type="file" id="${qId}" accept="image/*" class="form-input">
                <div class="file-preview" id="${qId}-preview"></div>
            `;

        case 'voice':
            return `
                <div class="voice-recorder">
                    <button class="record-button" id="${qId}-btn" data-question="${qId}">
                        <span class="record-icon">🎤</span>
                        <span class="record-text">Start Recording</span>
                    </button>
                    <audio controls class="audio-preview" id="${qId}-audio" style="display: none; width: 100%;"></audio>
                </div>
            `;

        case 'canvas':
            return `
                <div class="canvas-container">
                    <canvas id="${qId}-canvas" width="700" height="400"></canvas>
                </div>
                <div class="canvas-controls">
                    <button class="btn-canvas" data-canvas="${qId}">Clear</button>
                    <div class="canvas-color-picker">
                        <label>Color:</label>
                        <input type="color" id="${qId}-color" value="#e74c3c">
                    </div>
                    <div class="canvas-brush-size">
                        <label>Brush:</label>
                        <input type="range" id="${qId}-brush" min="1" max="20" value="2">
                    </div>
                </div>
            `;

        case 'signature':
            return `
                <div class="canvas-container">
                    <canvas id="${qId}-canvas" width="700" height="200"></canvas>
                </div>
                <div class="canvas-controls">
                    <button class="btn-canvas" data-canvas="${qId}">Clear</button>
                    <div class="canvas-color-picker">
                        <label>Color:</label>
                        <input type="color" id="${qId}-color" value="#e74c3c">
                    </div>
                    <div class="canvas-brush-size">
                        <label>Brush:</label>
                        <input type="range" id="${qId}-brush" min="1" max="20" value="2">
                    </div>
                </div>
            `;

        case 'emoji':
            return `
                <div class="emoji-picker-container" id="${qId}-picker">
                    ${emojiOptions.map(emoji =>
                        `<div class="emoji-option" data-emoji="${emoji}">${emoji}</div>`
                    ).join('')}
                </div>
                <div class="selected-emoji" id="${qId}-selected"></div>
            `;
    }
}

// Initialize question element
function initializeQuestionElement(q, qId) {
    const element = document.getElementById(qId);

    // Text inputs
    if (['text', 'url', 'date', 'time', 'datetime', 'textarea', 'dropdown'].includes(q.type)) {
        element?.addEventListener('change', () => {
            formData[qId] = element.value;
            saveData();
        });
        if (formData[qId]) {
            element.value = formData[qId];
        }
    }

    // Radio
    if (q.type === 'radio') {
        const radios = document.querySelectorAll(`input[name="${qId}"]`);
        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    formData[qId] = radio.value;
                    const parent = radio.closest('.radio-group');
                    parent.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('selected'));
                    radio.closest('.radio-option').classList.add('selected');
                    saveData();
                }
            });
            if (formData[qId] === radio.value) {
                radio.checked = true;
                radio.closest('.radio-option').classList.add('selected');
            }
        });
    }

    // Checkbox
    if (q.type === 'checkbox') {
        const checkboxes = document.querySelectorAll(`input[name="${qId}"]`);
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const checked = Array.from(checkboxes).filter(cb => cb.checked);
                if (checked.length > (q.max || 999)) {
                    checkbox.checked = false;
                    alert(`Please select only ${q.max} options`);
                    return;
                }
                formData[qId] = checked.map(cb => cb.value);
                if (checkbox.checked) {
                    checkbox.closest('.checkbox-option').classList.add('selected');
                } else {
                    checkbox.closest('.checkbox-option').classList.remove('selected');
                }
                saveData();
            });
            if (formData[qId] && formData[qId].includes(checkbox.value)) {
                checkbox.checked = true;
                checkbox.closest('.checkbox-option').classList.add('selected');
            }
        });
    }

    // Slider
    if (q.type === 'slider') {
        element?.addEventListener('input', () => {
            formData[qId] = element.value;
            document.getElementById(`${qId}-value`).textContent = element.value;
            saveData();
        });
        if (formData[qId]) {
            element.value = formData[qId];
            document.getElementById(`${qId}-value`).textContent = formData[qId];
        }
    }

    // Color
    if (q.type === 'color') {
        element?.addEventListener('change', () => {
            formData[qId] = element.value;
            saveData();
        });
        if (formData[qId]) {
            element.value = formData[qId];
        }
    }

    // Color Palette
    if (q.type === 'color-palette') {
        for (let i = 1; i <= q.count; i++) {
            const colorInput = document.getElementById(`${qId}-${i}`);
            colorInput?.addEventListener('change', () => {
                if (!formData[qId]) formData[qId] = {};
                formData[qId][`color${i}`] = colorInput.value;
                saveData();
            });
            if (formData[qId] && formData[qId][`color${i}`]) {
                colorInput.value = formData[qId][`color${i}`];
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
                    formData[qId] = event.target.result;
                    document.getElementById(`${qId}-preview`).innerHTML =
                        `<img src="${event.target.result}" alt="Preview">`;
                    saveData();
                };
                reader.readAsDataURL(file);
            }
        });
        if (formData[qId]) {
            document.getElementById(`${qId}-preview`).innerHTML =
                `<img src="${formData[qId]}" alt="Preview">`;
        }
    }

    // Voice recording
    if (q.type === 'voice') {
        const btn = document.getElementById(`${qId}-btn`);
        btn?.addEventListener('click', () => toggleRecording(qId));
        if (formData[qId]) {
            const audio = document.getElementById(`${qId}-audio`);
            audio.src = formData[qId];
            audio.style.display = 'block';
        }
    }

    // Canvas
    if (q.type === 'canvas' || q.type === 'signature') {
        initializeCanvas(qId);
    }

    // Emoji
    if (q.type === 'emoji') {
        const emojis = document.querySelectorAll(`#${qId}-picker .emoji-option`);
        emojis.forEach(emoji => {
            emoji.addEventListener('click', () => {
                const value = emoji.getAttribute('data-emoji');
                formData[qId] = value;
                emojis.forEach(e => e.classList.remove('selected'));
                emoji.classList.add('selected');
                document.getElementById(`${qId}-selected`).textContent = value;
                saveData();
            });
        });
        if (formData[qId]) {
            const selected = Array.from(emojis).find(e => e.getAttribute('data-emoji') === formData[qId]);
            selected?.classList.add('selected');
            document.getElementById(`${qId}-selected`).textContent = formData[qId];
        }
    }

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

    // Connect color picker
    const colorPicker = document.getElementById(`${qId}-color`);
    if (colorPicker) {
        colorPicker.addEventListener('change', (e) => {
            ctx.strokeStyle = e.target.value;
        });
    }

    // Connect brush size
    const brushSize = document.getElementById(`${qId}-brush`);
    if (brushSize) {
        brushSize.addEventListener('input', (e) => {
            ctx.lineWidth = e.target.value;
        });
    }

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
    if (currentQuestionIndex < activeQuestions.length) {
        currentQuestionIndex++;
        renderCurrentQuestion();
        updateProgress();
        updateNavigation();
        window.scrollTo(0, 0);
    }
}

function previousSection() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
        updateProgress();
        updateNavigation();
        window.scrollTo(0, 0);
    }
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'flex';

    if (currentQuestionIndex === activeQuestions.length) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }
}

function updateProgress() {
    const totalQuestions = activeQuestions.length;
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    const displayNumber = currentQuestionIndex + 1;

    document.getElementById('progressBar').style.width = `${progress}%`;

    const currentQ = activeQuestions[currentQuestionIndex];
    if (currentQ) {
        document.getElementById('sectionProgress').textContent = `Question ${displayNumber} of ${totalQuestions}`;
    } else {
        document.getElementById('sectionProgress').textContent = 'Complete! 💕';
    }
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
    if (!confirm('Are you ready to save all your answers forever? Once saved, they cannot be edited.')) {
        return;
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Saving...</span>';

    try {
        const timestamp = Date.now();
        const completionDate = new Date().toISOString();
        const responseId = `response_${timestamp}`;

        // Lock the responses locally
        localStorage.setItem('rashiAmritLocked', 'true');
        localStorage.setItem('rashiAmritCompletionDate', completionDate);

        if (database) {
            await database.ref(`responses/${responseId}`).set({
                timestamp: timestamp,
                date: completionDate,
                questionCount: activeQuestions.length,
                data: formData
            });
            window.location.href = `output.html?id=${responseId}`;
        } else {
            // Even without Firebase, lock locally and show output
            window.location.href = 'output.html';
        }
    } catch (error) {
        console.error('Error saving:', error);
        alert('There was an error saving. Your responses are still saved locally and locked.');
        window.location.href = 'output.html';
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
