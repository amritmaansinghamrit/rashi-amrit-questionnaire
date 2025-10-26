// QUESTION CONFIGURATION
// Set enabled: false to remove any question you don't want

const questionConfig = [
    // Q2 - moved up from original position
    { id: 2, enabled: true, type: "text", text: "When you're pretend-annoyed with me, what will you call me?", placeholder: "That name you'll use when I'm being silly..." },

    // Q3
    { id: 3, enabled: true, type: "text", text: "Describe me in one word to your Kodai friends", placeholder: "Just one perfect word..." },

    // Q4 - REMOVED as per request
    { id: 4, enabled: false, type: "emoji", text: "The emoji that's \"Amrit's emoji\"" },

    // Q5 - REMOVED as per request
    { id: 5, enabled: false, type: "photo", text: "Screenshot a text from me you actually saved" },

    // Q6 - CHANGED TO VOICE as per request
    { id: 6, enabled: true, type: "voice", text: "Tell me about something that reminds you of our 5-hour drive" },

    // Q7 - UPDATED TEXT as per request
    { id: 7, enabled: true, type: "text", text: "Food place that's \"ours\" now - you cannot associate it to anyone else and we will always want to go there", placeholder: "Our special food place..." },

    // Q8 - CHANGED TO TEXT as per request
    { id: 8, enabled: true, type: "text", text: "Song lyrics that describe us", placeholder: "Paste or type the lyrics..." },

    // Q9 - REMOVED as per request
    { id: 9, enabled: false, type: "photo", text: "A meme that's our exact dynamic" },

    // Q10 - REMOVED as per request
    { id: 10, enabled: false, type: "photo", text: "Your view right now doing this" },

    // Q11 - CHANGED TO TEXT as per request
    { id: 11, enabled: true, type: "text", text: "Something today that made you think of me", placeholder: "Tell me what happened..." },

    // Q12 - CHANGED TO VOICE as per request
    { id: 12, enabled: true, type: "voice", text: "Tell me what happiness looks like to you" },

    { id: 13, enabled: true, type: "photo", text: "A childhood photo I haven't seen" },
    { id: 14, enabled: true, type: "photo", text: "Something you own that I still don't know about" },

    // DRAWING - kept important ones
    { id: 15, enabled: false, type: "canvas", text: "Sketch our RK (our future home) and label what goes where" },
    { id: 16, enabled: false, type: "canvas", text: "Draw your perfect day with me from morning to night" },
    { id: 17, enabled: true, type: "canvas", text: "Draw June 15 from YOUR memory - the whole day" },

    // Q18 - SPECIAL: First ask her to name "us", then use that in next question
    { id: 18, enabled: true, type: "text", text: "What should we call 'us'? Give us a name (like RashRit or something else)", placeholder: "Our special name..." },
    { id: 19, enabled: true, type: "canvas", text: "Draw a symbol that represents us", note: "Use the name you just gave us!" },

    { id: 20, enabled: false, type: "canvas", text: "Doodle how you feel right now" },
    { id: 21, enabled: false, type: "canvas", text: "Draw the moment you knew you wanted me as your +1" },
    { id: 22, enabled: false, type: "canvas", text: "Sketch what \"home\" looks like (since I'm your home too)" },

    // COLORS - kept essential ones
    { id: 23, enabled: true, type: "color", text: "What color is us right now?" },
    { id: 24, enabled: true, type: "color", text: "What color is how you feel about me?" },
    { id: 25, enabled: true, type: "color", text: "What color was June 15th in your memory?" },
    { id: 26, enabled: false, type: "color-palette", text: "Pick 3 colors that are \"us\"", count: 3 },
    { id: 27, enabled: false, type: "color", text: "What color is the feeling when I hold you?" },
    { id: 28, enabled: false, type: "color", text: "Color for our first trip together" },

    // VOICE - REMOVED as per request: 29, 32, 34, 35, 36
    { id: 29, enabled: false, type: "voice", text: "Hum/sing our song (the one that's OURS)" },

    // Q30 - UPDATED TEXT as per request
    { id: 30, enabled: true, type: "voice", text: "Say \"I love you\" the way only you feel like saying it when you love me the most" },

    { id: 31, enabled: false, type: "voice", text: "Say my new cute name" },
    { id: 32, enabled: false, type: "voice", text: "Say something in Hindi about us" },

    // Q33 - UPDATED TEXT as per request
    { id: 33, enabled: true, type: "textarea", text: "Write and manifest one wish for our future", placeholder: "What do you wish for us..." },

    { id: 34, enabled: false, type: "voice", text: "Just laugh - I want to save this" },
    { id: 35, enabled: false, type: "voice", text: "Say \"forehead kissi\" (remember why this matters?)" },
    { id: 36, enabled: false, type: "url", text: "Link to OUR song", placeholder: "Paste the link..." },

    // Q37 - CHANGED TO MULTIPLE SELECT as per request
    { id: 37, enabled: true, type: "checkbox", text: "My actual love languages based on how I am with you (select all that apply)", max: 5,
        options: ["Physical touch", "Words of affirmation", "Quality time", "Gifts", "Acts of service", "Other (specify in next question)"] },

    // Q37b - Custom input for "Other"
    { id: "37b", enabled: true, type: "text", text: "If you selected 'Other' above, describe it here", placeholder: "Your custom answer..." },

    // Q38/39/40/41 - ADD CUSTOM INPUT OPTION as per request
    { id: 38, enabled: true, type: "dropdown", text: "I'm cutest when",
        options: ["Driving", "Focused on you", "Laughing", "Sleeping", "Getting excited", "Being confused", "Other (specify below)"] },
    { id: "38b", enabled: true, type: "text", text: "If 'Other', describe when I'm cutest", placeholder: "Your custom answer..." },

    { id: 39, enabled: true, type: "dropdown", text: "What you need more from me",
        options: ["Physical touch", "My words", "More time together", "Surprises", "Understanding what you don't say", "Other (specify below)"] },
    { id: "39b", enabled: true, type: "text", text: "If 'Other', describe what you need more", placeholder: "Your custom answer..." },

    { id: 40, enabled: true, type: "dropdown", text: "When we fight, what helps you",
        options: ["Space first, then talk", "Talk right away", "Hug first, talk later", "Let me cool down", "Just hold me", "Other (specify below)"] },
    { id: "40b", enabled: true, type: "text", text: "If 'Other', describe what helps when we fight", placeholder: "Your custom answer..." },

    { id: 41, enabled: true, type: "dropdown", text: "My superpower with you",
        options: ["Listening deeply", "Making you laugh", "Staying calm", "Remembering your details", "Making you feel safe", "Long drives", "Other (specify below)"] },
    { id: "41b", enabled: true, type: "text", text: "If 'Other', describe my superpower", placeholder: "Your custom answer..." },

    { id: 42, enabled: false, type: "dropdown", text: "Compliment from me that matters most",
        options: ["You're beautiful", "You're so smart", "You're strong", "I see you", "I'm proud of you"] },

    // Q43 - ADD CUSTOM INPUT as per request
    { id: 43, enabled: true, type: "checkbox", text: "Things I do that make you feel loved (pick 5)", max: 5,
        options: ["Really listen when you talk", "Text you first", "Remember the tiny things", "Make you laugh", "Plan surprises", "Hold you tight", "Look at you that specific way", "Ask how you really are", "Drive for hours with you", "Make you feel safe", "Say 'Jaan'", "Get your moods without asking", "Other (specify below)"] },
    { id: "43b", enabled: true, type: "text", text: "If 'Other', describe what I do that makes you feel loved", placeholder: "Your custom answer..." },

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

    // RATING US - REMOVED 53, 63 as per request
    { id: 52, enabled: true, type: "slider", text: "How romantic vs playful are we?", note: "(1 = All romantic, 10 = All playful)" },
    { id: 53, enabled: false, type: "slider", text: "My texting game - rate it honestly" },
    { id: 54, enabled: true, type: "slider", text: "How well do I know you? (For real)" },
    { id: 55, enabled: true, type: "slider", text: "How good am I at reading your moods without you saying?" },
    { id: 56, enabled: true, type: "slider", text: "Physical affection level you want from me", note: "(1 = less, 10 = more)" },
    { id: 57, enabled: false, type: "slider", text: "Do I talk or listen more?", note: "(1 = I talk too much, 10 = I listen well)" },
    { id: 58, enabled: true, type: "slider", text: "How good am I at making you feel special?" },
    { id: 59, enabled: false, type: "slider", text: "Should we be more spontaneous or planned?", note: "(1 = more planned, 10 = more spontaneous)" },
    { id: 60, enabled: false, type: "slider", text: "Do you need more space or togetherness?", note: "(1 = more space, 10 = more time together)" },
    { id: 61, enabled: true, type: "slider", text: "How safe do you feel with me?" },
    { id: 62, enabled: true, type: "slider", text: "How excited are you about our future?" },
    { id: 63, enabled: false, type: "slider", text: "Rate my driving honestly (June 15 reference!)" },

    // TIME & FUTURE
    { id: 64, enabled: true, type: "date", text: "Pick OUR day - a date we celebrate each month", note: "(not June 15, something new for us)" },
    { id: 65, enabled: true, type: "time", text: "What time of day do you miss me most?" },
    { id: 66, enabled: false, type: "time", text: "Best time for our daily call/text ritual" },
    { id: 67, enabled: true, type: "date", text: "A future date you're looking forward to with me" },
    { id: 68, enabled: false, type: "datetime", text: "When should we open our time capsule?" },

    // Q69 - UPDATED TEXT as per request
    { id: 69, enabled: true, type: "text", text: "Where should we take our first 2026 trip together?", placeholder: "Our 2026 adventure destination..." },

    { id: 70, enabled: true, type: "text", text: "Where would you want our RK (our home) to be someday?", placeholder: "Where should our home be..." },
    { id: 71, enabled: false, type: "text", text: "Dream destination for us", placeholder: "The place you've always wanted to see with me..." },
    { id: 72, enabled: false, type: "text", text: "A place from your childhood you want to show me", placeholder: "Take me to your past..." },
    { id: 73, enabled: false, type: "text", text: "Pin exactly where you are right now", placeholder: "Where you're sitting as you fill this..." },

    // HER DEEPEST THOUGHTS - REMOVED 79 as per request
    { id: 74, enabled: true, type: "textarea", text: "What did you feel when you saw coffee & flowers at the airport?", placeholder: "Tell me what went through your heart..." },
    { id: 75, enabled: true, type: "textarea", text: "At what point during the 5-hour drive did you know you didn't want it to end?", placeholder: "Was there a specific moment?" },
    { id: 76, enabled: true, type: "textarea", text: "Why did you say \"forehead kissi milgayi\" like a kid? What were you feeling?", placeholder: "I remember how you said it..." },
    { id: 77, enabled: true, type: "textarea", text: "What made you kiss me in that elevator? What changed?", placeholder: "Tell me about that moment..." },
    { id: 78, enabled: true, type: "textarea", text: "What were you thinking lying next to me in the Airbnb before the elevator moment?", placeholder: "What was going through your mind?" },
    { id: 79, enabled: false, type: "textarea", text: "\"I would have regretted if I wouldn't have done that\" - what were you scared of?", placeholder: "What regret were you avoiding?" },
    { id: 80, enabled: true, type: "textarea", text: "Why did you invite me as +1 to Kodai? What made you want me there?", placeholder: "Why me for that trip?" },
    { id: 81, enabled: true, type: "textarea", text: "What does \"Jaan\" mean to you when I call you that?", placeholder: "How does it make you feel?" },
    { id: 82, enabled: true, type: "textarea", text: "When I call you \"My RK\" (my home), how does that make you feel?", placeholder: "What does being someone's home mean to you?" },

    // Q83 - UPDATED TEXT as per request
    { id: 83, enabled: true, type: "textarea", text: "What's your favorite moment from any Airbnb nights together?", placeholder: "The moment that stays with you..." },

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

    // HER HANDWRITING
    { id: 114, enabled: true, type: "photo", text: "Write \"I love you\" in your handwriting", note: "Write on paper, take a photo, and upload" },
    { id: 115, enabled: false, type: "photo", text: "Write one word that IS us", note: "That perfect word in your handwriting" },
    { id: 116, enabled: true, type: "photo", text: "Write your promise to me in Hindi", note: "Your vow in your language" },
    { id: 117, enabled: true, type: "photo", text: "Write \"Mera Amrit\"", note: "How those words look in your hand" },
    { id: 118, enabled: true, type: "signature", text: "Sign this whole thing - make it official", note: "Draw your signature below with your finger or stylus" },

    // Q1 - MOVED TO LAST and CHANGED TO TEXT as per request
    { id: 1, enabled: true, type: "text", text: "Say the cute name you're giving me (not Amrit, not just my name!)", placeholder: "The special name only you call me..." }
];

// EMOJI OPTIONS
const emojiOptions = ['💕', '😍', '🥰', '❤️', '💖', '💗', '🤗', '😊', '✨', '🌟', '💝', '🦋', '🌸', '🌹', '💐', '🌺'];

// Get only enabled questions
function getEnabledQuestions() {
    return questionConfig.filter(q => q.enabled);
}

// Photo assignments for each question - diverse and meaningful
const questionPhotos = {
    2: ['765AE223-5DAE-43F5-89C8-8F532970C274_1_105_c.jpeg', 'A6966838-1D03-4785-8043-B662AFD23CF9_1_105_c.jpeg'],
    3: ['776353E4-F7B3-4F2E-B7BF-5A2F2094730A_1_105_c.jpeg', '97515A1C-6157-4978-A69E-306DBF9B3EA9_1_105_c.jpeg'],
    6: ['F46017EF-F2C1-4B51-9F08-7AFA7F8AC50B_1_105_c.jpeg', '6E0753D6-4D1C-4F67-8743-381F050F07E5_1_105_c.jpeg'],
    7: ['DDD85959-CCA2-410F-B378-6C2E40876A54_1_105_c.jpeg', 'F6A6AD81-DE49-4680-98B3-3603C5D3002C_1_105_c.jpeg'],
    8: ['74ADB5B7-6C69-408F-B225-A624CD1016B9_1_105_c.jpeg', 'CEC136A5-A832-45A1-8C2E-94145D56CE55_1_105_c.jpeg'],
    11: ['81CB59F3-323D-466C-8E67-C0A89163A67C_1_105_c.jpeg', '9B4C0998-DA0C-4CF5-8E44-52B6A2104CC4_1_105_c.jpeg'],
    12: ['AB9C683E-0146-426F-830B-0D5A2D5D707A_1_105_c.jpeg', '5307CBC5-4319-4917-8811-D34C7900ACEA_1_105_c.jpeg'],
    13: ['62DD21B5-0837-48A0-A217-5E0D6DDF5697_1_105_c.jpeg'],
    14: ['4AB52853-078C-4CEA-9F6A-275DFE693F5E_1_105_c.jpeg', '18DCF764-D810-484B-A0C3-D10EC66E72F4_1_105_c.jpeg'],
    17: ['2418C5CE-BCD1-409A-9698-11F5AD556E1F_1_105_c.jpeg', '107C7216-0A20-4803-8A5F-F066BC150B07_1_105_c.jpeg'],
    18: ['4F124CA2-8C1E-4B37-B3AD-78A6969D408B_1_105_c.jpeg', '9B1C08CE-BAA7-43D2-B6C9-6CEAE47B8835_1_105_c.jpeg'],
    19: ['ECC694B4-709A-47DD-9135-F68E0E7009CA_1_105_c.jpeg', '2E254619-C91F-44C4-92F5-34D3E4DAA046_1_105_c.jpeg'],
    23: ['765AE223-5DAE-43F5-89C8-8F532970C274_1_105_c.jpeg'],
    24: ['A6966838-1D03-4785-8043-B662AFD23CF9_1_105_c.jpeg', '776353E4-F7B3-4F2E-B7BF-5A2F2094730A_1_105_c.jpeg'],
    25: ['97515A1C-6157-4978-A69E-306DBF9B3EA9_1_105_c.jpeg'],
    30: ['F46017EF-F2C1-4B51-9F08-7AFA7F8AC50B_1_105_c.jpeg', '6E0753D6-4D1C-4F67-8743-381F050F07E5_1_105_c.jpeg'],
    33: ['DDD85959-CCA2-410F-B378-6C2E40876A54_1_105_c.jpeg'],
    37: ['F6A6AD81-DE49-4680-98B3-3603C5D3002C_1_105_c.jpeg', '74ADB5B7-6C69-408F-B225-A624CD1016B9_1_105_c.jpeg'],
    38: ['CEC136A5-A832-45A1-8C2E-94145D56CE55_1_105_c.jpeg'],
    39: ['81CB59F3-323D-466C-8E67-C0A89163A67C_1_105_c.jpeg', '9B4C0998-DA0C-4CF5-8E44-52B6A2104CC4_1_105_c.jpeg'],
    40: ['AB9C683E-0146-426F-830B-0D5A2D5D707A_1_105_c.jpeg'],
    41: ['5307CBC5-4319-4917-8811-D34C7900ACEA_1_105_c.jpeg', '62DD21B5-0837-48A0-A217-5E0D6DDF5697_1_105_c.jpeg'],
    43: ['4AB52853-078C-4CEA-9F6A-275DFE693F5E_1_105_c.jpeg', '18DCF764-D810-484B-A0C3-D10EC66E72F4_1_105_c.jpeg'],
    44: ['2418C5CE-BCD1-409A-9698-11F5AD556E1F_1_105_c.jpeg', '107C7216-0A20-4803-8A5F-F066BC150B07_1_105_c.jpeg'],
    47: ['4F124CA2-8C1E-4B37-B3AD-78A6969D408B_1_105_c.jpeg'],
    50: ['9B1C08CE-BAA7-43D2-B6C9-6CEAE47B8835_1_105_c.jpeg', 'ECC694B4-709A-47DD-9135-F68E0E7009CA_1_105_c.jpeg'],
    52: ['2E254619-C91F-44C4-92F5-34D3E4DAA046_1_105_c.jpeg'],
    54: ['765AE223-5DAE-43F5-89C8-8F532970C274_1_105_c.jpeg', 'A6966838-1D03-4785-8043-B662AFD23CF9_1_105_c.jpeg'],
    55: ['776353E4-F7B3-4F2E-B7BF-5A2F2094730A_1_105_c.jpeg'],
    56: ['97515A1C-6157-4978-A69E-306DBF9B3EA9_1_105_c.jpeg', 'F46017EF-F2C1-4B51-9F08-7AFA7F8AC50B_1_105_c.jpeg'],
    58: ['6E0753D6-4D1C-4F67-8743-381F050F07E5_1_105_c.jpeg'],
    61: ['DDD85959-CCA2-410F-B378-6C2E40876A54_1_105_c.jpeg', 'F6A6AD81-DE49-4680-98B3-3603C5D3002C_1_105_c.jpeg'],
    62: ['74ADB5B7-6C69-408F-B225-A624CD1016B9_1_105_c.jpeg', 'CEC136A5-A832-45A1-8C2E-94145D56CE55_1_105_c.jpeg'],
    64: ['81CB59F3-323D-466C-8E67-C0A89163A67C_1_105_c.jpeg'],
    65: ['9B4C0998-DA0C-4CF5-8E44-52B6A2104CC4_1_105_c.jpeg', 'AB9C683E-0146-426F-830B-0D5A2D5D707A_1_105_c.jpeg'],
    67: ['5307CBC5-4319-4917-8811-D34C7900ACEA_1_105_c.jpeg'],
    69: ['62DD21B5-0837-48A0-A217-5E0D6DDF5697_1_105_c.jpeg', '4AB52853-078C-4CEA-9F6A-275DFE693F5E_1_105_c.jpeg'],
    70: ['18DCF764-D810-484B-A0C3-D10EC66E72F4_1_105_c.jpeg', '2418C5CE-BCD1-409A-9698-11F5AD556E1F_1_105_c.jpeg'],
    74: ['107C7216-0A20-4803-8A5F-F066BC150B07_1_105_c.jpeg', '4F124CA2-8C1E-4B37-B3AD-78A6969D408B_1_105_c.jpeg'],
    75: ['9B1C08CE-BAA7-43D2-B6C9-6CEAE47B8835_1_105_c.jpeg'],
    76: ['ECC694B4-709A-47DD-9135-F68E0E7009CA_1_105_c.jpeg', '2E254619-C91F-44C4-92F5-34D3E4DAA046_1_105_c.jpeg'],
    77: ['765AE223-5DAE-43F5-89C8-8F532970C274_1_105_c.jpeg'],
    78: ['A6966838-1D03-4785-8043-B662AFD23CF9_1_105_c.jpeg', '776353E4-F7B3-4F2E-B7BF-5A2F2094730A_1_105_c.jpeg'],
    80: ['97515A1C-6157-4978-A69E-306DBF9B3EA9_1_105_c.jpeg', 'F46017EF-F2C1-4B51-9F08-7AFA7F8AC50B_1_105_c.jpeg'],
    81: ['6E0753D6-4D1C-4F67-8743-381F050F07E5_1_105_c.jpeg'],
    82: ['DDD85959-CCA2-410F-B378-6C2E40876A54_1_105_c.jpeg', 'F6A6AD81-DE49-4680-98B3-3603C5D3002C_1_105_c.jpeg'],
    83: ['74ADB5B7-6C69-408F-B225-A624CD1016B9_1_105_c.jpeg'],
    85: ['CEC136A5-A832-45A1-8C2E-94145D56CE55_1_105_c.jpeg', '81CB59F3-323D-466C-8E67-C0A89163A67C_1_105_c.jpeg'],
    86: ['9B4C0998-DA0C-4CF5-8E44-52B6A2104CC4_1_105_c.jpeg', 'AB9C683E-0146-426F-830B-0D5A2D5D707A_1_105_c.jpeg'],
    89: ['5307CBC5-4319-4917-8811-D34C7900ACEA_1_105_c.jpeg'],
    91: ['62DD21B5-0837-48A0-A217-5E0D6DDF5697_1_105_c.jpeg', '4AB52853-078C-4CEA-9F6A-275DFE693F5E_1_105_c.jpeg'],
    93: ['18DCF764-D810-484B-A0C3-D10EC66E72F4_1_105_c.jpeg', '2418C5CE-BCD1-409A-9698-11F5AD556E1F_1_105_c.jpeg'],
    95: ['107C7216-0A20-4803-8A5F-F066BC150B07_1_105_c.jpeg'],
    96: ['4F124CA2-8C1E-4B37-B3AD-78A6969D408B_1_105_c.jpeg', '9B1C08CE-BAA7-43D2-B6C9-6CEAE47B8835_1_105_c.jpeg'],
    98: ['ECC694B4-709A-47DD-9135-F68E0E7009CA_1_105_c.jpeg'],
    99: ['2E254619-C91F-44C4-92F5-34D3E4DAA046_1_105_c.jpeg', '765AE223-5DAE-43F5-89C8-8F532970C274_1_105_c.jpeg'],
    100: ['A6966838-1D03-4785-8043-B662AFD23CF9_1_105_c.jpeg', '776353E4-F7B3-4F2E-B7BF-5A2F2094730A_1_105_c.jpeg'],
    101: ['97515A1C-6157-4978-A69E-306DBF9B3EA9_1_105_c.jpeg'],
    103: ['F46017EF-F2C1-4B51-9F08-7AFA7F8AC50B_1_105_c.jpeg', '6E0753D6-4D1C-4F67-8743-381F050F07E5_1_105_c.jpeg'],
    104: ['DDD85959-CCA2-410F-B378-6C2E40876A54_1_105_c.jpeg'],
    106: ['F6A6AD81-DE49-4680-98B3-3603C5D3002C_1_105_c.jpeg', '74ADB5B7-6C69-408F-B225-A624CD1016B9_1_105_c.jpeg'],
    108: ['CEC136A5-A832-45A1-8C2E-94145D56CE55_1_105_c.jpeg', '81CB59F3-323D-466C-8E67-C0A89163A67C_1_105_c.jpeg'],
    109: ['9B4C0998-DA0C-4CF5-8E44-52B6A2104CC4_1_105_c.jpeg'],
    110: ['AB9C683E-0146-426F-830B-0D5A2D5D707A_1_105_c.jpeg', '5307CBC5-4319-4917-8811-D34C7900ACEA_1_105_c.jpeg'],
    111: ['62DD21B5-0837-48A0-A217-5E0D6DDF5697_1_105_c.jpeg', '4AB52853-078C-4CEA-9F6A-275DFE693F5E_1_105_c.jpeg'],
    112: ['18DCF764-D810-484B-A0C3-D10EC66E72F4_1_105_c.jpeg'],
    113: ['2418C5CE-BCD1-409A-9698-11F5AD556E1F_1_105_c.jpeg', '107C7216-0A20-4803-8A5F-F066BC150B07_1_105_c.jpeg'],
    114: ['4F124CA2-8C1E-4B37-B3AD-78A6969D408B_1_105_c.jpeg', '9B1C08CE-BAA7-43D2-B6C9-6CEAE47B8835_1_105_c.jpeg'],
    116: ['ECC694B4-709A-47DD-9135-F68E0E7009CA_1_105_c.jpeg'],
    117: ['2E254619-C91F-44C4-92F5-34D3E4DAA046_1_105_c.jpeg', '765AE223-5DAE-43F5-89C8-8F532970C274_1_105_c.jpeg'],
    118: ['A6966838-1D03-4785-8043-B662AFD23CF9_1_105_c.jpeg', '776353E4-F7B3-4F2E-B7BF-5A2F2094730A_1_105_c.jpeg'],
    1: ['97515A1C-6157-4978-A69E-306DBF9B3EA9_1_105_c.jpeg', 'F46017EF-F2C1-4B51-9F08-7AFA7F8AC50B_1_105_c.jpeg']
};
