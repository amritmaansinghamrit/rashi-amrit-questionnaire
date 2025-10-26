# How to Configure Questions

## Easy Question Management

All questions are now in one file: **`js/questions-config.js`**

## How to Remove/Add Questions

Open `js/questions-config.js` and find the question you want to change.

### To REMOVE a question:
Change `enabled: true` to `enabled: false`

**Example:**
```javascript
// This question will NOT appear
{ id: 15, enabled: false, type: "canvas", text: "Sketch our RK (our future home)" },
```

### To ADD it back:
Change `enabled: false` to `enabled: true`

**Example:**
```javascript
// This question WILL appear
{ id: 15, enabled: true, type: "canvas", text: "Sketch our RK (our future home)" },
```

## Current Configuration

Right now, I've already disabled questions I thought might be "too much":

### DISABLED Questions (set to `enabled: false`):
- Question 15: Sketch our RK (future home)
- Question 16: Draw perfect day
- Question 20: Doodle current mood
- Question 21: Draw +1 moment
- Question 22: Sketch "home"
- Question 26: 3-color palette
- Question 27: Color when I hold you
- Question 28: Color for first trip
- Question 31: Say my new cute name
- Question 40: When we fight
- Question 42: Compliment that matters
- Question 45: We need more
- Question 46: What I'm good at
- Question 48: Planned vs spontaneous
- Question 49: Big gestures vs small things
- Question 51: When you're upset
- Question 57: Talk vs listen
- Question 59: Spontaneous vs planned
- Question 60: Space vs togetherness
- Question 66: Daily ritual time
- Question 68: Time capsule date
- Question 71: Dream destination
- Question 72: Childhood place
- Question 73: Where you are now
- Question 84: June 16 rain
- Question 87: Ordinary to extraordinary
- Question 88: Habit you love/hate
- Question 90: Show love without words
- Question 92: What you learned
- Question 94: What surprises you
- Question 97: Favorite way I say Rashi
- Question 102: What nobody notices
- Question 105: Emergency comfort protocol
- Question 107: When closest
- Question 115: One word handwriting

### ENABLED Questions (currently active):
**About 75 questions** focusing on:
- Your story (June 15, elevator, Kodai, etc.)
- Deep feelings
- Important ratings
- Voice recordings
- Key photos
- Most meaningful prompts

## Quick Stats

- **Original:** 118 questions
- **Currently Active:** ~75 questions (enabled: true)
- **Currently Disabled:** ~43 questions (enabled: false)

## How to Test Your Changes

1. **Edit** `js/questions-config.js`
2. **Save** the file
3. **Refresh** the browser
4. Questions will update automatically!

## Examples

### Want MORE drawing questions?
```javascript
{ id: 15, enabled: true, type: "canvas", text: "Sketch our RK (our future home)" },
{ id: 16, enabled: true, type: "canvas", text: "Draw your perfect day" },
{ id: 20, enabled: true, type: "canvas", text: "Doodle how you feel right now" },
```

### Want LESS color questions?
```javascript
{ id: 23, enabled: false, type: "color", text: "What color is us right now?" },
{ id: 24, enabled: false, type: "color", text: "What color is how you feel about me?" },
```

### Want ONLY June 15 specific questions?
Search for:
- "June 15"
- "elevator"
- "Airbnb"
- "Kodai"
- "forehead kissi"
- "coffee & flowers"

Set only those to `enabled: true` and rest to `false`

## Tips

1. **Don't delete lines** - just change `enabled: false`
2. **Keep id numbers** - they're how answers are stored
3. **Test after changes** - refresh browser to see updates
4. **Save often** - always save after editing

## Reorder Questions

Want question 100 to appear before question 50?

Just **move the entire question block** in the array:

```javascript
// Move this whole block up in the file
{ id: 100, enabled: true, type: "textarea", text: "How do you actually feel about the distance?" },
```

Questions appear in the order they're listed in the file!

## Question Types

- `text` - Short text input
- `textarea` - Long text (paragraphs)
- `voice` - Voice recording (10 sec)
- `photo` - Photo upload
- `canvas` - Drawing pad
- `signature` - Signature pad
- `color` - Color picker
- `color-palette` - Multiple colors
- `emoji` - Emoji selector
- `slider` - 1-10 rating
- `dropdown` - Select one option
- `radio` - Choose one
- `checkbox` - Choose multiple
- `date` - Date picker
- `time` - Time picker
- `datetime` - Date + time
- `url` - Link input

## Current Question Count by Type

- **Textarea (deep questions):** ~40 total, ~25 enabled
- **Photo uploads:** 14 total, 14 enabled
- **Voice recordings:** 8 total, 7 enabled
- **Canvas (drawing):** 8 total, 3 enabled
- **Sliders (ratings):** 12 total, 9 enabled
- **Colors:** 6 total, 3 enabled
- **Dropdowns:** 6 total, 4 enabled
- **Checkboxes:** 4 total, 2 enabled
- **Radio buttons:** 5 total, 2 enabled
- **Time/Date:** 5 total, 4 enabled
- **Other:** Rest enabled

## Need Help?

1. **Broke something?** Just restore from git:
   ```bash
   cd ~/rashi-amrit-questionnaire
   git checkout js/questions-config.js
   ```

2. **Want to start over?** All questions enabled:
   - Use find & replace: `enabled: false` → `enabled: true`

3. **Not sure?** Leave as is - current config is already curated!

---

The current setup focuses on **quality over quantity** - the most meaningful questions about your real story.
