// All 118 questions organized by section
const sections = [
    {
        id: 1,
        name: "Names & Feelings",
        subtitle: "The intimate names only we know",
        photos: ["765AE223-5DAE-43F5-89C8-8F532970C274_1_105_c.jpeg", "776353E4-F7B3-4F2E-B7BF-5A2F2094730A_1_105_c.jpeg"],
        questions: [
            {
                id: "q1",
                type: "voice",
                text: "Say the cute name you're giving me (not Amrit, not just my name!)",
                placeholder: "Record your voice..."
            },
            {
                id: "q2",
                type: "text",
                text: "When you're pretend-annoyed with me, what will you call me?",
                placeholder: "That name you'll use when I'm being silly..."
            },
            {
                id: "q3",
                type: "text",
                text: "Describe me in one word to your Kodai friends",
                placeholder: "Just one perfect word..."
            },
            {
                id: "q4",
                type: "emoji",
                text: "The emoji that's \"Amrit's emoji\"",
                emojis: ['💕', '😍', '🥰', '❤️', '💖', '💗', '🤗', '😊', '✨', '🌟', '💝', '🦋', '🌸', '🌹', '💐', '🌺']
            }
        ]
    },
    {
        id: 2,
        name: "Photos - Through Your Eyes",
        subtitle: "Moments captured, memories cherished",
        photos: ["A6966838-1D03-4785-8043-B662AFD23CF9_1_105_c.jpeg", "97515A1C-6157-4978-A69E-306DBF9B3EA9_1_105_c.jpeg", "F46017EF-F2C1-4B51-9F08-7AFA7F8AC50B_1_105_c.jpeg"],
        questions: [
            { id: "q5", type: "photo", text: "Screenshot a text from me you actually saved" },
            { id: "q6", type: "photo", text: "Something that reminds you of our 5-hour drive" },
            { id: "q7", type: "photo", text: "The momos place (or any food place that's \"ours\" now)" },
            { id: "q8", type: "photo", text: "Screenshot song lyrics that describe us" },
            { id: "q9", type: "photo", text: "A meme that's our exact dynamic" },
            { id: "q10", type: "photo", text: "Your view right now doing this" },
            { id: "q11", type: "photo", text: "Something today that made you think of me" },
            { id: "q12", type: "photo", text: "Show me what happiness looks like to you" },
            { id: "q13", type: "photo", text: "A childhood photo I haven't seen" },
            { id: "q14", type: "photo", text: "Something you own that I still don't know about" }
        ]
    },
    {
        id: 3,
        name: "Drawing Your Heart",
        subtitle: "Sketch what words cannot express",
        photos: ["ECC694B4-709A-47DD-9135-F68E0E7009CA_1_105_c.jpeg", "2E254619-C91F-44C4-92F5-34D3E4DAA046_1_105_c.jpeg"],
        loveNote: "Draw freely - there's no right or wrong, just your heart on canvas",
        questions: [
            { id: "q15", type: "canvas", text: "Sketch our RK (our future home) and label what goes where" },
            { id: "q16", type: "canvas", text: "Draw your perfect day with me from morning to night" },
            { id: "q17", type: "canvas", text: "Draw June 15 from YOUR memory - the whole day" },
            { id: "q18", type: "canvas", text: "Create a symbol that is \"RashRit\" or whatever we are" },
            { id: "q19", type: "canvas", text: "Draw the elevator moment (I want to see your version)" },
            { id: "q20", type: "canvas", text: "Doodle how you feel right now" },
            { id: "q21", type: "canvas", text: "Draw the moment you knew you wanted me as your +1" },
            { id: "q22", type: "canvas", text: "Sketch what \"home\" looks like (since I'm your home too)" }
        ]
    },
    {
        id: 4,
        name: "Colors of Our Love",
        subtitle: "Paint our emotions in shades only you see",
        photos: ["6E0753D6-4D1C-4F67-8743-381F050F07E5_1_105_c.jpeg", "F6A6AD81-DE49-4680-98B3-3603C5D3002C_1_105_c.jpeg"],
        questions: [
            { id: "q23", type: "color", text: "What color is us right now?" },
            { id: "q24", type: "color", text: "What color is how you feel about me?" },
            { id: "q25", type: "color", text: "What color was June 15th in your memory?" },
            { id: "q26", type: "color-palette", text: "Pick 3 colors that are \"us\"", count: 3 },
            { id: "q27", type: "color", text: "What color is the feeling when I hold you?" },
            { id: "q28", type: "color", text: "Color for our first trip together" }
        ]
    },
    {
        id: 5,
        name: "Your Voice, Your Heart",
        subtitle: "Let me hear what makes my heart skip",
        photos: ["DDD85959-CCA2-410F-B378-6C2E40876A54_1_105_c.jpeg", "CEC136A5-A832-45A1-8C2E-94145D56CE55_1_105_c.jpeg"],
        loveNote: "I want to save your voice, your laugh, your love - just 10 seconds of pure you",
        questions: [
            { id: "q29", type: "voice", text: "Hum/sing our song (the one that's OURS)" },
            { id: "q30", type: "voice", text: "Say \"I love you\" the way only you say it" },
            { id: "q31", type: "voice", text: "Say my new cute name" },
            { id: "q32", type: "voice", text: "Say something in Hindi about us" },
            { id: "q33", type: "voice", text: "Whisper one wish for our future" },
            { id: "q34", type: "voice", text: "Just laugh - I want to save this" },
            { id: "q35", type: "voice", text: "Say \"forehead kissi\" (remember why this matters?)" },
            { id: "q36", type: "url", text: "Link to OUR song", placeholder: "Paste the link to the song that's ours..." }
        ]
    },
    {
        id: 6,
        name: "How You See Me",
        subtitle: "Your honest eyes on who I am to you",
        photos: ["74ADB5B7-6C69-408F-B225-A624CD1016B9_1_105_c.jpeg"],
        questions: [
            {
                id: "q37",
                type: "dropdown",
                text: "My actual love language based on how I am with you",
                options: ["Physical touch", "Words of affirmation", "Quality time", "Gifts", "Acts of service"]
            },
            {
                id: "q38",
                type: "dropdown",
                text: "I'm cutest when",
                options: ["Driving", "Focused on you", "Laughing", "Sleeping", "Getting excited", "Being confused"]
            },
            {
                id: "q39",
                type: "dropdown",
                text: "What you need more from me",
                options: ["Physical touch", "My words", "More time together", "Surprises", "Understanding what you don't say"]
            },
            {
                id: "q40",
                type: "dropdown",
                text: "When we fight, what helps you",
                options: ["Space first, then talk", "Talk right away", "Hug first, talk later", "Let me cool down", "Just hold me"]
            },
            {
                id: "q41",
                type: "dropdown",
                text: "My superpower with you",
                options: ["Listening deeply", "Making you laugh", "Staying calm", "Remembering your details", "Making you feel safe", "Long drives"]
            },
            {
                id: "q42",
                type: "dropdown",
                text: "Compliment from me that matters most",
                options: ["You're beautiful", "You're so smart", "You're strong", "I see you", "I'm proud of you"]
            },
            {
                id: "q43",
                type: "checkbox",
                text: "Things I do that make you feel loved (pick 5)",
                max: 5,
                options: ["Really listen when you talk", "Text you first", "Remember the tiny things", "Make you laugh", "Plan surprises", "Hold you tight", "Look at you that specific way", "Ask how you really are", "Drive for hours with you", "Make you feel safe", "Say 'Jaan'", "Get your moods without asking"]
            },
            {
                id: "q44",
                type: "checkbox",
                text: "Three words that describe me to you (pick 3)",
                max: 3,
                options: ["Caring", "Intense", "Calm", "Funny", "Thoughtful", "Protective", "Genuine", "Patient", "Passionate", "Sweet", "Stubborn", "Romantic", "Real", "Safe"]
            },
            {
                id: "q45",
                type: "checkbox",
                text: "We need more (pick 3)",
                max: 3,
                options: ["Long drives talking", "Deep 2am conversations", "Trying new things", "Being completely silly", "Planning trips", "Quiet time just existing", "Video calls", "Physical time together", "Adventures"]
            },
            {
                id: "q46",
                type: "checkbox",
                text: "What I'm genuinely good at (pick 3)",
                max: 3,
                options: ["Making you feel heard", "Being there", "Reading your moods", "Keeping promises", "Making you comfortable", "Surprising you", "Making the distance bearable"]
            },
            {
                id: "q47",
                type: "radio",
                text: "I show love more through",
                options: ["What I say", "What I do"]
            },
            {
                id: "q48",
                type: "radio",
                text: "You prefer from me",
                options: ["Planned romantic things", "Spontaneous sweet moments"]
            },
            {
                id: "q49",
                type: "radio",
                text: "I'm better at",
                options: ["Big gestures", "Daily small things"]
            },
            {
                id: "q50",
                type: "radio",
                text: "My energy with you",
                options: ["Calm & steady", "Intense & passionate"]
            },
            {
                id: "q51",
                type: "radio",
                text: "When you're upset, I'm better at",
                options: ["Just listening", "Trying to fix it", "Making you laugh", "Giving you space"]
            }
        ]
    },
    {
        id: 7,
        name: "Rating Us - Your Honest Truth",
        subtitle: "Slide to tell me everything honestly",
        photos: ["81CB59F3-323D-466C-8E67-C0A89163A67C_1_105_c.jpeg", "9B4C0998-DA0C-4CF5-8E44-52B6A2104CC4_1_105_c.jpeg"],
        loveNote: "Be honest, Jaan - I want your truth, not what you think I want to hear",
        questions: [
            { id: "q52", type: "slider", text: "How romantic vs playful are we?", note: "(1 = All romantic, 10 = All playful)" },
            { id: "q53", type: "slider", text: "My texting game - rate it honestly" },
            { id: "q54", type: "slider", text: "How well do I know you? (For real)" },
            { id: "q55", type: "slider", text: "How good am I at reading your moods without you saying?" },
            { id: "q56", type: "slider", text: "Physical affection level you want from me", note: "(1 = less, 10 = more)" },
            { id: "q57", type: "slider", text: "Do I talk or listen more?", note: "(1 = I talk too much, 10 = I listen well)" },
            { id: "q58", type: "slider", text: "How good am I at making you feel special?" },
            { id: "q59", type: "slider", text: "Should we be more spontaneous or planned?", note: "(1 = more planned, 10 = more spontaneous)" },
            { id: "q60", type: "slider", text: "Do you need more space or togetherness?", note: "(1 = more space, 10 = more time together)" },
            { id: "q61", type: "slider", text: "How safe do you feel with me?" },
            { id: "q62", type: "slider", text: "How excited are you about our future?" },
            { id: "q63", type: "slider", text: "Rate my driving honestly (June 15 reference!)" }
        ]
    },
    {
        id: 8,
        name: "Time & Our Future",
        subtitle: "Marking the moments that will be ours forever",
        photos: ["AB9C683E-0146-426F-830B-0D5A2D5D707A_1_105_c.jpeg"],
        questions: [
            { id: "q64", type: "date", text: "Pick OUR day - a date we celebrate each month", note: "(not June 15, something new for us)" },
            { id: "q65", type: "time", text: "What time of day do you miss me most?" },
            { id: "q66", type: "time", text: "Best time for our daily call/text ritual" },
            { id: "q67", type: "date", text: "A future date you're looking forward to with me" },
            { id: "q68", type: "datetime", text: "When should we open our time capsule?" }
        ]
    },
    {
        id: 9,
        name: "Places in Your Heart",
        subtitle: "Map the locations where our love will live",
        photos: ["9B1C08CE-BAA7-43D2-B6C9-6CEAE47B8835_1_105_c.jpeg"],
        questions: [
            { id: "q69", type: "text", text: "Where should we take our first trip together?", placeholder: "The place you're dreaming of..." },
            { id: "q70", type: "text", text: "Where would you want our RK (our home) to be someday?", placeholder: "Where should our home be..." },
            { id: "q71", type: "text", text: "Dream destination for us", placeholder: "The place you've always wanted to see with me..." },
            { id: "q72", type: "text", text: "A place from your childhood you want to show me", placeholder: "Take me to your past..." },
            { id: "q73", type: "text", text: "Pin exactly where you are right now", placeholder: "Where you're sitting as you fill this..." }
        ]
    },
    {
        id: 10,
        name: "Your Deepest Thoughts",
        subtitle: "Our story, through your heart",
        photos: ["5307CBC5-4319-4917-8811-D34C7900ACEA_1_105_c.jpeg", "62DD21B5-0837-48A0-A217-5E0D6DDF5697_1_105_c.jpeg", "4AB52853-078C-4CEA-9F6A-275DFE693F5E_1_105_c.jpeg"],
        loveNote: "Take your time, Jaan. These are the answers I'll treasure forever.",
        questions: [
            { id: "q74", type: "textarea", text: "What did you feel when you saw coffee & flowers at the airport?", placeholder: "Tell me what went through your heart..." },
            { id: "q75", type: "textarea", text: "At what point during the 5-hour drive did you know you didn't want it to end?", placeholder: "Was there a specific moment?" },
            { id: "q76", type: "textarea", text: "Why did you say \"forehead kissi milgayi\" like a kid? What were you feeling?", placeholder: "I remember how you said it..." },
            { id: "q77", type: "textarea", text: "What made you kiss me in that elevator? What changed?", placeholder: "Tell me about that moment..." },
            { id: "q78", type: "textarea", text: "What were you thinking lying next to me in the Airbnb before the elevator moment?", placeholder: "What was going through your mind?" },
            { id: "q79", type: "textarea", text: "\"I would have regretted if I wouldn't have done that\" - what were you scared of?", placeholder: "What regret were you avoiding?" },
            { id: "q80", type: "textarea", text: "Why did you invite me as +1 to Kodai? What made you want me there?", placeholder: "Why me for that trip?" },
            { id: "q81", type: "textarea", text: "What does \"Jaan\" mean to you when I call you that?", placeholder: "How does it make you feel?" },
            { id: "q82", type: "textarea", text: "When I call you \"My RK\" (my home), how does that make you feel?", placeholder: "What does being someone's home mean to you?" },
            { id: "q83", type: "textarea", text: "What's your favorite moment from those Airbnb nights together?", placeholder: "The moment that stays with you..." },
            { id: "q84", type: "textarea", text: "Remember June 16 when it rained and we couldn't meet - how did that feel?", placeholder: "Tell me about that disappointment..." },
            { id: "q85", type: "textarea", text: "Complete this: \"With Amrit, I feel...\"", placeholder: "Let it all out..." },
            { id: "q86", type: "textarea", text: "What's uniquely \"us\" that other couples don't have?", placeholder: "What makes us special?" },
            { id: "q87", type: "textarea", text: "Something ordinary I make extraordinary for you", placeholder: "The little things..." },
            { id: "q88", type: "textarea", text: "A habit of mine you secretly love (or hate)?", placeholder: "Be honest..." },
            { id: "q89", type: "textarea", text: "If I'm having the worst day, what would you actually do?", placeholder: "Paint that picture for me..." },
            { id: "q90", type: "textarea", text: "What do I do that shows love without saying \"I love you\"?", placeholder: "The actions that speak..." },
            { id: "q91", type: "textarea", text: "Complete: \"I love it when Amrit...\"", placeholder: "Finish the sentence..." },
            { id: "q92", type: "textarea", text: "Something you learned from being with me", placeholder: "How have I changed you?" },
            { id: "q93", type: "textarea", text: "How can I tell when you're happy vs upset vs nervous?", placeholder: "Teach me your tells..." },
            { id: "q94", type: "textarea", text: "Something about me that still surprises you", placeholder: "What catches you off guard?" },
            { id: "q95", type: "textarea", text: "What do you wish I understood better about you?", placeholder: "Help me understand..." },
            { id: "q96", type: "textarea", text: "When exactly did you know \"this is real\"?", placeholder: "The moment it all became real..." },
            { id: "q97", type: "textarea", text: "Your favorite way I say \"Rashi\"", placeholder: "How do I say it that you love?" },
            { id: "q98", type: "textarea", text: "What do I say that always makes you smile?", placeholder: "Those words that light you up..." },
            { id: "q99", type: "textarea", text: "One fear you have about us (we can talk through it)", placeholder: "It's safe to share..." },
            { id: "q100", type: "textarea", text: "How do you actually feel about the distance between us?", placeholder: "The honest truth about the miles..." },
            { id: "q101", type: "textarea", text: "What's changed in you since June 15?", placeholder: "How are you different now?" },
            { id: "q102", type: "textarea", text: "What do I do that nobody else notices about me?", placeholder: "What only you see..." },
            { id: "q103", type: "textarea", text: "ONE thing I should never stop doing", placeholder: "Please never stop..." },
            { id: "q104", type: "textarea", text: "A promise you're making to us today", placeholder: "Your promise to our future..." },
            { id: "q105", type: "textarea", text: "What's our \"emergency comfort protocol\" when one of us is down?", placeholder: "Our system for bad days..." },
            { id: "q106", type: "textarea", text: "Something we haven't done yet that you want to do with me", placeholder: "Add it to our bucket list..." },
            { id: "q107", type: "textarea", text: "When do you feel closest to me even when we're far?", placeholder: "When the distance disappears..." },
            { id: "q108", type: "textarea", text: "What's your absolute favorite memory of us so far?", placeholder: "The one that tops them all..." },
            { id: "q109", type: "textarea", text: "What are you most scared of losing about us?", placeholder: "What can't you imagine losing?" },
            { id: "q110", type: "textarea", text: "How do I make you feel seen?", placeholder: "When I truly see you..." },
            { id: "q111", type: "textarea", text: "What do you love most about \"us\"?", placeholder: "The essence of us..." },
            { id: "q112", type: "textarea", text: "What was going through your head when I was \"scared to touch you\" in the car?", placeholder: "What were you thinking?" },
            { id: "q113", type: "textarea", text: "How did you feel when I finally hugged you tight that first time?", placeholder: "That first real hug..." }
        ]
    },
    {
        id: 11,
        name: "Your Handwriting, Your Mark",
        subtitle: "Leave your personal touch in your own hand",
        photos: ["18DCF764-D810-484B-A0C3-D10EC66E72F4_1_105_c.jpeg", "2418C5CE-BCD1-409A-9698-11F5AD556E1F_1_105_c.jpeg"],
        loveNote: "Write it, photograph it, upload it - I want your handwriting forever",
        questions: [
            { id: "q114", type: "photo", text: "Write \"I love you\" in your handwriting", note: "Write on paper, take a photo, and upload" },
            { id: "q115", type: "photo", text: "Write one word that IS us", note: "That perfect word in your handwriting" },
            { id: "q116", type: "photo", text: "Write your promise to me in Hindi", note: "Your vow in your language" },
            { id: "q117", type: "photo", text: "Write \"Mera Amrit\"", note: "How those words look in your hand" },
            { id: "q118", type: "signature", text: "Sign this whole thing - make it official", note: "Draw your signature below with your finger or stylus" }
        ]
    },
    {
        id: 12,
        name: "Complete",
        subtitle: "You did it, my love",
        photos: ["107C7216-0A20-4803-8A5F-F066BC150B07_1_105_c.jpeg", "4F124CA2-8C1E-4B37-B3AD-78A6969D408B_1_105_c.jpeg", "765AE223-5DAE-43F5-89C8-8F532970C274_1_105_c.jpeg"],
        completion: true
    }
];
