# Pixel Paws

A Tamagotchi × CS Duolingo mashup: watch your pixel cat grow up alongside your coding progress!

**Live demo:** [playpixelpaws.vercel.app](https://playpixelpaws.vercel.app)  
**Hackathon submission:** [View on Devpost](https://devpost.com/software/pixel-paws)  
**Status:** Originally built for Rutgers' 2026 RU Hart x IEEE Buildathon and actively developed beyond the event.  

## Overview
 
Pixel Paws gamifies learning to code by pairing coding challenges (HTML, Python, Java) with a virtual pet you raise the more you practice. Answer questions correctly, build streaks, and watch your cat grow from a kitten to a teenager to an adult!

## Features
 
- **User accounts** — sign up / log in via Firebase Authentication
- **Growing pixel cat mascot** — evolves through life stages as you complete levels
- **Coding challenges** — question sets across HTML, Python, and Java
- **Custom pixel-art cat reactions** — mood changes based on your activity (happy, neutral, sad)
- **Background music** — retro chiptune soundtrack while you study
- **Firebase-backed profiles** — progress and data stored per user

## Built With
 
- **JavaScript** (no framework, no build step)
- **HTML/CSS**
- **Firebase** — Authentication, Firestore, and Storage
- **Vercel** — deployment and hosting

## Project Structure
 
```
pixel-paws/
├── frontend/
│   ├── index.html          # Signup / login page
│   ├── home.html           # Main dashboard after login
│   ├── level.html          # Coding challenge / level page
│   ├── app.js
│   ├── auth.js
│   ├── login.js
│   ├── main.js
│   ├── firebase.js
│   ├── i18n.js
│   ├── html-questions.js
│   ├── python-questions.js
│   ├── java-questions.js
│   ├── style.css
│   └── assets/
│       ├── img/
│       ├── cat_faces/
│       ├── cat_reactions/
│       ├── cat_stages/
│       └── music/
├── backend/                 # Firebase client logic (auth, cache, storage helpers)
├── TODO.md                  # Planned features / roadmap
└── README.md
```

## Roadmap
 
See [TODO.md](./TODO.md) for the full list of planned features, including:
- XP and streak systems
- More cat breeds with unique emotion sets
- Customizable avatars
- Profile settings
- Multi-language support
- Additional levels

## Credits
- All cat pixel art (faces, reactions, and growth stages) was hand-drawn by Juliania Shyprykevych specifically for this project.
- Other background/icon images are from free-to-use sites, including Unsplash and Pixabay.
- Music: "And The Journey Begins" and "Title Theme" by [xDeviruchi](https://xdeviruchi.itch.io/) — used under General Use ("The music tracks included in this album/asset pack (16-bit Fantasy: Battles) may be used in commercial and non-commercial projects such as video games, trailers, live streams, videos, social media posts, and other audiovisual works.".
