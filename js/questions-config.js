// QUESTION CONFIGURATION
// Set enabled: false to remove any question you don't want
// Reorder by changing the order in this array

const questionConfig = [
    // NAMES & FEELINGS
    { id: 1, enabled: true, type: "voice", text: "Say the cute name you're giving me (not Amrit, not just my name!)" },
    { id: 2, enabled: true, type: "text", text: "When you're pretend-annoyed with me, what will you call me?", placeholder: "That name you'll use when I'm being silly..." },
    { id: 3, enabled: true, type: "text", text: "Describe me in one word to your Kodai friends", placeholder: "Just one perfect word..." },
    { id: 4, enabled: true, type: "emoji", text: "The emoji that's \"Amrit's emoji\"" },

    // PHOTOS - HER PERSPECTIVE
    { id: 5, enabled: true, type: "photo", text: "Screenshot a text from me you actually saved" },
    { id: 6, enabled: true, type: "photo", text: "Something that reminds you of our 5-hour drive" },
    { id: 7, enabled: true, type: "photo", text: "The momos place (or any food place that's \"ours\" now)" },
    { id: 8, enabled: true, type: "photo", text: "Screenshot song lyrics that describe us" },
    { id: 9, enabled: true, type: "photo", text: "A meme that's our exact dynamic" },
    { id: 10, enabled: true, type: "photo", text: "Your view right now doing this" },
    { id: 11, enabled: true, type: "photo", text: "Something today that made you think of me" },
    { id: 12, enabled: true, type: "photo", text: "Show me what happiness looks like to you" },
    { id: 13, enabled: true, type: "photo", text: "A childhood photo I haven't seen" },
    { id: 14, enabled: true, type: "photo", text: "Something you own that I still don't know about" },

    // DRAWING HER FEELINGS
    { id: 15, enabled: false, type: "canvas", text: "Sketch our RK (our future home) and label what goes where" },
    { id: 16, enabled: false, type: "canvas", text: "Draw your perfect day with me from morning to night" },
    { id: 17, enabled: true, type: "canvas", text: "Draw June 15 from YOUR memory - the whole day" },
    { id: 18, enabled: true, type: "canvas", text: "Create a symbol that is \"RashRit\" or whatever we are" },
    { id: 19, enabled: true, type: "canvas", text: "Draw the elevator moment (I want to see your version)" },
    { id: 20, enabled: false, type: "canvas", text: "Doodle how you feel right now" },
    { id: 21, enabled: false, type: "canvas", text: "Draw the moment you knew you wanted me as your +1" },
    { id: 22, enabled: false, type: "canvas", text: "Sketch what \"home\" looks like (since I'm your home too)" },

    // COLORS OF EMOTIONS
    { id: 23, enabled: true, type: "color", text: "What color is us right now?" },
    { id: 24, enabled: true, type: "color", text: "What color is how you feel about me?" },
    { id: 25, enabled: true, type: "color", text: "What color was June 15th in your memory?" },
    { id: 26, enabled: false, type: "color-palette", text: "Pick 3 colors that are \"us\"", count: 3 },
    { id: 27, enabled: false, type: "color", text: "What color is the feeling when I hold you?" },
    { id: 28, enabled: false, type: "color", text: "Color for our first trip together" },

    // HER VOICE, HER FEELINGS
    { id: 29, enabled: true, type: "voice", text: "Hum/sing our song (the one that's OURS)" },
    { id: 30, enabled: true, type: "voice", text: "Say \"I love you\" the way only you say it" },
    { id: 31, enabled: false, type: "voice", text: "Say my new cute name" },
    { id: 32, enabled: true, type: "voice", text: "Say something in Hindi about us" },
    { id: 33, enabled: true, type: "voice", text: "Whisper one wish for our future" },
    { id: 34, enabled: true, type: "voice", text: "Just laugh - I want to save this" },
    { id: 35, enabled: true, type: "voice", text: "Say \"forehead kissi\" (remember why this matters?)" },
    { id: 36, enabled: true, type: "url", text: "Link to OUR song", placeholder: "Paste the link..." },

    // HOW SHE SEES ME
    { id: 37, enabled: true, type: "dropdown", text: "My actual love language based on how I am with you",
        options: ["Physical touch", "Words of affirmation", "Quality time", "Gifts", "Acts of service"] },
    { id: 38, enabled: true, type: "dropdown", text: "I'm cutest when",
        options: ["Driving", "Focused on you", "Laughing", "Sleeping", "Getting excited", "Being confused"] },
    { id: 39, enabled: true, type: "dropdown", text: "What you need more from me",
        options: ["Physical touch", "My words", "More time together", "Surprises", "Understanding what you don't say"] },
    { id: 40, enabled: false, type: "dropdown", text: "When we fight, what helps you",
        options: ["Space first, then talk", "Talk right away", "Hug first, talk later", "Let me cool down", "Just hold me"] },
    { id: 41, enabled: true, type: "dropdown", text: "My superpower with you",
        options: ["Listening deeply", "Making you laugh", "Staying calm", "Remembering your details", "Making you feel safe", "Long drives"] },
    { id: 42, enabled: false, type: "dropdown", text: "Compliment from me that matters most",
        options: ["You're beautiful", "You're so smart", "You're strong", "I see you", "I'm proud of you"] },

    { id: 43, enabled: true, type: "checkbox", text: "Things I do that make you feel loved (pick 5)", max: 5,
        options: ["Really listen when you talk", "Text you first", "Remember the tiny things", "Make you laugh", "Plan surprises", "Hold you tight", "Look at you that specific way", "Ask how you really are", "Drive for hours with you", "Make you feel safe", "Say 'Jaan'", "Get your moods without asking"] },

    { id: 44, enabled: true, type: "checkbox", text: "Three words that describe me to you (pick 3)", max: 3,
        options: ["Caring", "Intense", "Calm", "Funny", "Thoughtful", "Protective", "Genuine", "Patient", "Passionate", "Sweet", "Stubborn", "Romantic", "Real", "Safe"] },

    { id: 45, enabled: false, type: "checkbox", text: "We need more (pick 3)", max: 3,
        options: ["Long drives talking", "Deep 2am conversations", "Trying new things", "Being completely silly", "Planning trips", "Quiet time just existing", "Video calls", "Physical time together", "Adventures"] },

    { id: 46, enabled: false, type: "checkbox", text: "What I'm genuinely good at (pick 3)", max: 3,
        options: ["Making you feel heard", "Being there", "Reading your moods", "Keeping promises", "Making you comfortable", "Surprising you", "Making the distance bearable"] },

    { id: 47, enabled: true, type: "radio", text: "I show love more through",
        options: ["What I say", "What I do"] },
    { id: 48, enabled: false, type: "radio", text: "You prefer from me",
        options: ["Planned romantic things", "Spontaneous sweet moments"] },
    { id: 49, enabled: false, type: "radio", text: "I'm better at",
        options: ["Big gestures", "Daily small things"] },
    { id: 50, enabled: true, type: "radio", text: "My energy with you",
        options: ["Calm & steady", "Intense & passionate"] },
    { id: 51, enabled: false, type: "radio", text: "When you're upset, I'm better at",
        options: ["Just listening", "Trying to fix it", "Making you laugh", "Giving you space"] },

    // RATING US - HER HONEST TRUTH
    { id: 52, enabled: true, type: "slider", text: "How romantic vs playful are we?", note: "(1 = All romantic, 10 = All playful)" },
    { id: 53, enabled: true, type: "slider", text: "My texting game - rate it honestly" },
    { id: 54, enabled: true, type: "slider", text: "How well do I know you? (For real)" },
    { id: 55, enabled: true, type: "slider", text: "How good am I at reading your moods without you saying?" },
    { id: 56, enabled: true, type: "slider", text: "Physical affection level you want from me", note: "(1 = less, 10 = more)" },
    { id: 57, enabled: false, type: "slider", text: "Do I talk or listen more?", note: "(1 = I talk too much, 10 = I listen well)" },
    { id: 58, enabled: true, type: "slider", text: "How good am I at making you feel special?" },
    { id: 59, enabled: false, type: "slider", text: "Should we be more spontaneous or planned?", note: "(1 = more planned, 10 = more spontaneous)" },
    { id: 60, enabled: false, type: "slider", text: "Do you need more space or togetherness?", note: "(1 = more space, 10 = more time together)" },
    { id: 61, enabled: true, type: "slider", text: "How safe do you feel with me?" },
    { id: 62, enabled: true, type: "slider", text: "How excited are you about our future?" },
    { id: 63, enabled: true, type: "slider", text: "Rate my driving honestly (June 15 reference!)" },

    // TIME & FUTURE
    { id: 64, enabled: true, type: "date", text: "Pick OUR day - a date we celebrate each month", note: "(not June 15, something new for us)" },
    { id: 65, enabled: true, type: "time", text: "What time of day do you miss me most?" },
    { id: 66, enabled: false, type: "time", text: "Best time for our daily call/text ritual" },
    { id: 67, enabled: true, type: "date", text: "A future date you're looking forward to with me" },
    { id: 68, enabled: false, type: "datetime", text: "When should we open our time capsule?" },

    // PLACES IN HER HEART
    { id: 69, enabled: true, type: "text", text: "Where should we take our first trip together?", placeholder: "The place you're dreaming of..." },
    { id: 70, enabled: true, type: "text", text: "Where would you want our RK (our home) to be someday?", placeholder: "Where should our home be..." },
    { id: 71, enabled: false, type: "text", text: "Dream destination for us", placeholder: "The place you've always wanted to see with me..." },
    { id: 72, enabled: false, type: "text", text: "A place from your childhood you want to show me", placeholder: "Take me to your past..." },
    { id: 73, enabled: false, type: "text", text: "Pin exactly where you are right now", placeholder: "Where you're sitting as you fill this..." },

    // HER DEEPEST THOUGHTS - SPECIFIC TO YOUR STORY
    { id: 74, enabled: true, type: "textarea", text: "What did you feel when you saw coffee & flowers at the airport?", placeholder: "Tell me what went through your heart..." },
    { id: 75, enabled: true, type: "textarea", text: "At what point during the 5-hour drive did you know you didn't want it to end?", placeholder: "Was there a specific moment?" },
    { id: 76, enabled: true, type: "textarea", text: "Why did you say \"forehead kissi milgayi\" like a kid? What were you feeling?", placeholder: "I remember how you said it..." },
    { id: 77, enabled: true, type: "textarea", text: "What made you kiss me in that elevator? What changed?", placeholder: "Tell me about that moment..." },
    { id: 78, enabled: true, type: "textarea", text: "What were you thinking lying next to me in the Airbnb before the elevator moment?", placeholder: "What was going through your mind?" },
    { id: 79, enabled: true, type: "textarea", text: "\"I would have regretted if I wouldn't have done that\" - what were you scared of?", placeholder: "What regret were you avoiding?" },
    { id: 80, enabled: true, type: "textarea", text: "Why did you invite me as +1 to Kodai? What made you want me there?", placeholder: "Why me for that trip?" },
    { id: 81, enabled: true, type: "textarea", text: "What does \"Jaan\" mean to you when I call you that?", placeholder: "How does it make you feel?" },
    { id: 82, enabled: true, type: "textarea", text: "When I call you \"My RK\" (my home), how does that make you feel?", placeholder: "What does being someone's home mean to you?" },
    { id: 83, enabled: true, type: "textarea", text: "What's your favorite moment from those Airbnb nights together?", placeholder: "The moment that stays with you..." },
    { id: 84, enabled: false, type: "textarea", text: "Remember June 16 when it rained and we couldn't meet - how did that feel?", placeholder: "Tell me about that disappointment..." },
    { id: 85, enabled: true, type: "textarea", text: "Complete this: \"With Amrit, I feel...\"", placeholder: "Let it all out..." },
    { id: 86, enabled: true, type: "textarea", text: "What's uniquely \"us\" that other couples don't have?", placeholder: "What makes us special?" },
    { id: 87, enabled: false, type: "textarea", text: "Something ordinary I make extraordinary for you", placeholder: "The little things..." },
    { id: 88, enabled: false, type: "textarea", text: "A habit of mine you secretly love (or hate)?", placeholder: "Be honest..." },
    { id: 89, enabled: true, type: "textarea", text: "If I'm having the worst day, what would you actually do?", placeholder: "Paint that picture for me..." },
    { id: 90, enabled: false, type: "textarea", text: "What do I do that shows love without saying \"I love you\"?", placeholder: "The actions that speak..." },
    { id: 91, enabled: true, type: "textarea", text: "Complete: \"I love it when Amrit...\"", placeholder: "Finish the sentence..." },
    { id: 92, enabled: false, type: "textarea", text: "Something you learned from being with me", placeholder: "How have I changed you?" },
    { id: 93, enabled: true, type: "textarea", text: "How can I tell when you're happy vs upset vs nervous?", placeholder: "Teach me your tells..." },
    { id: 94, enabled: false, type: "textarea", text: "Something about me that still surprises you", placeholder: "What catches you off guard?" },
    { id: 95, enabled: true, type: "textarea", text: "What do you wish I understood better about you?", placeholder: "Help me understand..." },
    { id: 96, enabled: true, type: "textarea", text: "When exactly did you know \"this is real\"?", placeholder: "The moment it all became real..." },
    { id: 97, enabled: false, type: "textarea", text: "Your favorite way I say \"Rashi\"", placeholder: "How do I say it that you love?" },
    { id: 98, enabled: true, type: "textarea", text: "What do I say that always makes you smile?", placeholder: "Those words that light you up..." },
    { id: 99, enabled: true, type: "textarea", text: "One fear you have about us (we can talk through it)", placeholder: "It's safe to share..." },
    { id: 100, enabled: true, type: "textarea", text: "How do you actually feel about the distance between us?", placeholder: "The honest truth about the miles..." },
    { id: 101, enabled: true, type: "textarea", text: "What's changed in you since June 15?", placeholder: "How are you different now?" },
    { id: 102, enabled: false, type: "textarea", text: "What do I do that nobody else notices about me?", placeholder: "What only you see..." },
    { id: 103, enabled: true, type: "textarea", text: "ONE thing I should never stop doing", placeholder: "Please never stop..." },
    { id: 104, enabled: true, type: "textarea", text: "A promise you're making to us today", placeholder: "Your promise to our future..." },
    { id: 105, enabled: false, type: "textarea", text: "What's our \"emergency comfort protocol\" when one of us is down?", placeholder: "Our system for bad days..." },
    { id: 106, enabled: true, type: "textarea", text: "Something we haven't done yet that you want to do with me", placeholder: "Add it to our bucket list..." },
    { id: 107, enabled: false, type: "textarea", text: "When do you feel closest to me even when we're far?", placeholder: "When the distance disappears..." },
    { id: 108, enabled: true, type: "textarea", text: "What's your absolute favorite memory of us so far?", placeholder: "The one that tops them all..." },
    { id: 109, enabled: true, type: "textarea", text: "What are you most scared of losing about us?", placeholder: "What can't you imagine losing?" },
    { id: 110, enabled: true, type: "textarea", text: "How do I make you feel seen?", placeholder: "When I truly see you..." },
    { id: 111, enabled: true, type: "textarea", text: "What do you love most about \"us\"?", placeholder: "The essence of us..." },
    { id: 112, enabled: true, type: "textarea", text: "What was going through your head when I was \"scared to touch you\" in the car?", placeholder: "What were you thinking?" },
    { id: 113, enabled: true, type: "textarea", text: "How did you feel when I finally hugged you tight that first time?", placeholder: "That first real hug..." },

    // HER HANDWRITING, HER MARK
    { id: 114, enabled: true, type: "photo", text: "Write \"I love you\" in your handwriting", note: "Write on paper, take a photo, and upload" },
    { id: 115, enabled: false, type: "photo", text: "Write one word that IS us", note: "That perfect word in your handwriting" },
    { id: 116, enabled: true, type: "photo", text: "Write your promise to me in Hindi", note: "Your vow in your language" },
    { id: 117, enabled: true, type: "photo", text: "Write \"Mera Amrit\"", note: "How those words look in your hand" },
    { id: 118, enabled: true, type: "signature", text: "Sign this whole thing - make it official", note: "Draw your signature below with your finger or stylus" }
];

// EMOJI OPTIONS
const emojiOptions = ['💕', '😍', '🥰', '❤️', '💖', '💗', '🤗', '😊', '✨', '🌟', '💝', '🦋', '🌸', '🌹', '💐', '🌺'];

// Get only enabled questions
function getEnabledQuestions() {
    return questionConfig.filter(q => q.enabled);
}
