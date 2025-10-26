# Quick Setup Guide 🚀

Your questionnaire is ready! Follow these steps to get it live.

## ✅ What's Done

- ✅ All 118 questions implemented
- ✅ Your 72 photos integrated
- ✅ Elegant, sophisticated design (no more pinky pink!)
- ✅ Firebase backend ready
- ✅ Git repository initialized
- ✅ Pushed to GitHub: https://github.com/amritmaansinghamrit/rashi-amrit-questionnaire

## 🔥 Step 1: Set Up Firebase (5 minutes)

1. Go to **[Firebase Console](https://console.firebase.google.com/)**
2. Click **"Add project"** or use existing
3. Name it: `rashi-questionnaire` (or anything you like)
4. **Enable Google Analytics**: Optional (can skip)
5. Click **Create project**

### Enable Realtime Database:
1. In left sidebar: **Build** > **Realtime Database**
2. Click **Create Database**
3. Location: Choose closest to you (e.g., `us-central1`)
4. **Start in test mode** (we'll secure it later)
5. Click **Enable**

### Enable Storage (for images/audio):
1. In left sidebar: **Build** > **Storage**
2. Click **Get Started**
3. **Start in test mode**
4. Click **Done**

### Get Your Config:
1. Click **Project Settings** (gear icon)
2. Scroll to **Your apps** section
3. Click **</>** (Web app icon)
4. Register app: name it `rashi-questionnaire`
5. **Copy the firebaseConfig object**

It looks like this:
```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Update Your Code:
1. Open `js/config.js` in your project
2. Replace the placeholder with YOUR config
3. Save the file

## 🌐 Step 2: Deploy to GitHub Pages (2 minutes)

1. Go to your GitHub repo: https://github.com/amritmaansinghamrit/rashi-amrit-questionnaire
2. Click **Settings** tab
3. Scroll to **Pages** (left sidebar)
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes

Your site will be live at:
**https://amritmaansinghamrit.github.io/rashi-amrit-questionnaire/**

## 📤 Step 3: Push Firebase Config

```bash
cd ~/rashi-amrit-questionnaire
git add js/config.js
git commit -m "Add Firebase configuration"
git push origin main
```

Wait 2-3 minutes for GitHub Pages to rebuild.

## 🎁 Step 4: Share with Rashi

Send her the link:
```
https://amritmaansinghamrit.github.io/rashi-amrit-questionnaire/
```

She can:
- Fill it out at her own pace (auto-saves)
- Come back anytime (progress saved)
- Submit when complete
- All responses save to Firebase

## 📊 Viewing Her Responses

### Method 1: Firebase Console (Recommended)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Realtime Database**
4. Click **Data** tab
5. Browse `responses/` node
6. Click on any response to see all answers

### Method 2: Output Page
After Rashi submits, she'll be redirected to a beautiful output page showing all her answers.

Or manually visit:
```
https://amritmaansinghamrit.github.io/rashi-amrit-questionnaire/output.html
```

### Method 3: Download JSON
If Firebase isn't working, the app will download responses as JSON file that she can send you.

## 🔒 Secure Your Firebase (After Testing)

Once it works, secure your database:

1. Go to **Realtime Database** > **Rules** tab
2. Replace with:
```json
{
  "rules": {
    "responses": {
      ".write": true,
      ".read": "auth != null"
    }
  }
}
```

This allows anyone to write (submit) but only authenticated users (you) to read.

## 🎨 Features Highlight

### What's Different from Before:
- ✅ **Elegant dark theme** - No more pink overload
- ✅ **Your actual photos** - Cycling through 72 photos
- ✅ **Photo backgrounds** - Subtle slideshow behind content
- ✅ **Photo grids** - Your photos prominently displayed in each section
- ✅ **Professional design** - Clean, sophisticated, photo-forward
- ✅ **Firebase backend** - Permanent cloud storage
- ✅ **GitHub hosted** - Professional deployment

### All 118 Questions Include:
- 🎤 Voice recordings (her voice, laugh, "forehead kissi")
- 📸 Photo uploads (texts you saved, momos place, childhood photos)
- ✏️ Drawing canvas (June 15, elevator moment, future home)
- 🎨 Color pickers (colors of emotions)
- 📊 Sliders (honest ratings)
- ✅ Multiple choice (how she sees you)
- 💭 Deep questions (40 questions about your specific story)
- ✍️ Handwriting (signature, "I love you", "Mera Amrit")

### Rashi-Specific Questions About:
- Coffee & flowers at airport
- 5-hour drive
- "Forehead kissi milgayi"
- Elevator moment
- Airbnb nights
- Kodai +1 invite
- "Jaan" and "My RK"
- June 15 & June 16
- Distance feelings
- And so much more!

## 🐛 Troubleshooting

**Photos not showing?**
- They're all in `images/` folder
- Check browser console for errors
- May take a moment to load on slow connections

**Firebase not saving?**
- Check `js/config.js` has correct config
- Check Firebase console > Database > Rules
- Open browser console and check for errors

**GitHub Pages not updating?**
- Wait 3-5 minutes after pushing
- Hard refresh browser (Cmd+Shift+R on Mac)
- Check GitHub Actions tab for build status

**Responses not appearing?**
- Check Firebase console manually
- Download responses as JSON fallback works

## 📝 Notes

- All responses auto-save to localStorage too (backup)
- Works offline if Firebase down
- Mobile responsive
- Voice recordings are 10 seconds max
- All photos/audio stored as base64 (embedded in responses)

## 💕 Next Steps

1. Set up Firebase (5 min)
2. Update config (1 min)
3. Push to GitHub (1 min)
4. Wait for deployment (3 min)
5. Test it yourself first
6. Share with Rashi

---

**Your live site:** https://amritmaansinghamrit.github.io/rashi-amrit-questionnaire/

**GitHub repo:** https://github.com/amritmaansinghamrit/rashi-amrit-questionnaire

Made with ❤️ for Rashi
