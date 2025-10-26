# For Rashi 💕

A beautiful, intimate questionnaire for Rashi - 118 questions capturing our story from June 15 to forever.

## Features

- 📸 **Your photos throughout** - Your actual memories as backgrounds
- 🎨 **Elegant design** - Sophisticated, photo-forward interface
- 🎤 **Voice recordings** - Capture her voice (10-second clips)
- ✏️ **Drawing canvas** - Let her sketch feelings and memories
- 🎨 **Color pickers** - Express emotions in colors
- 💾 **Auto-save** - Never lose progress (saves to localStorage)
- ☁️ **Firebase backend** - Permanent cloud storage of responses
- 📱 **Mobile responsive** - Works beautifully on any device

## Setup & Deployment

### Step 1: Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Enable **Realtime Database**:
   - Go to Build > Realtime Database
   - Create database (start in test mode for now)
4. Enable **Storage** (for large files like photos/audio):
   - Go to Build > Storage
   - Get started
5. Get your config:
   - Go to Project Settings > Your apps
   - Add web app if you haven't
   - Copy the `firebaseConfig` object

6. Update `js/config.js` with your Firebase config:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### Step 2: Deploy to GitHub Pages

1. **Initialize Git repository** (if not already):
```bash
cd ~/rashi-amrit-questionnaire
git init
git add .
git commit -m "Initial commit - For Rashi questionnaire"
```

2. **Create GitHub repository**:
```bash
# Create repo on GitHub
gh repo create rashi-questionnaire --public --source=. --remote=origin --push

# OR manually:
# - Go to github.com
# - Create new repository: rashi-questionnaire
# - Don't initialize with README
```

3. **Push to GitHub**:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rashi-questionnaire.git
git push -u origin main
```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages"
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Save

5. **Your site will be live at**:
   `https://YOUR_USERNAME.github.io/rashi-questionnaire/`

### Step 3: Share with Rashi

Send her the GitHub Pages URL. She can:
- Fill it out at her own pace (auto-saves)
- Submit when complete
- Responses save to Firebase
- You can view them anytime in Firebase console

## Viewing Responses

### Option 1: Firebase Console
- Go to your Firebase project
- Realtime Database > Data
- Browse responses

### Option 2: Output Page
- After Rashi submits, she'll be redirected to output.html
- Or manually go to: `your-site-url/output.html?id=response_TIMESTAMP`

### Option 3: Download JSON
- If Firebase isn't configured, responses download as JSON
- She sends you the file

## Local Development

```bash
# Simply open index.html in a browser
# Or use a local server:
python3 -m http.server 8000
# Then visit: http://localhost:8000
```

## Project Structure

```
rashi-amrit-questionnaire/
├── index.html          # Main questionnaire page
├── output.html         # Response display page
├── css/
│   └── style.css       # All styles
├── js/
│   ├── config.js       # Firebase configuration
│   ├── questions.js    # All 118 questions
│   └── app.js          # Main application logic
├── images/             # Your photos (72 images)
│   └── *.jpeg
└── README.md           # This file
```

## Questions Breakdown

- **Section 1**: Names & Feelings (4 questions)
- **Section 2**: Photos - Her Perspective (10 questions)
- **Section 3**: Drawing Her Heart (8 questions)
- **Section 4**: Colors of Our Love (6 questions)
- **Section 5**: Her Voice, Her Feelings (8 questions)
- **Section 6**: How She Sees You (15 questions)
- **Section 7**: Rating Us - Honest Truth (12 questions)
- **Section 8**: Time & Our Future (5 questions)
- **Section 9**: Places in Her Heart (5 questions)
- **Section 10**: Her Deepest Thoughts (40 questions)
- **Section 11**: Her Handwriting (5 questions)
- **Section 12**: Completion

**Total: 118 questions** 💕

## Privacy & Security

- Responses stored securely in Firebase
- Only you have access to Firebase console
- No third-party tracking
- Can make repository private if desired

## Customization

### Add more photos:
- Drop images in `images/` folder
- Update photo arrays in `js/questions.js` and `js/app.js`

### Modify questions:
- Edit `js/questions.js`
- Each question has id, type, text, and options

### Change colors:
- Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #2c3e50;
    --accent: #e74c3c;
    /* ... */
}
```

## Troubleshooting

**Photos not loading?**
- Check image paths in `images/` folder
- Verify filenames match in `questions.js`

**Responses not saving to Firebase?**
- Check Firebase config in `js/config.js`
- Verify Realtime Database is enabled
- Check browser console for errors

**GitHub Pages not updating?**
- Wait 2-3 minutes after push
- Clear browser cache
- Check repository Settings > Pages

## Support

Questions? Issues? Contact Amrit or check Firebase/GitHub documentation.

---

Made with ❤️ for Rashi - Our story, preserved forever
From June 15 to Infinity 💕
