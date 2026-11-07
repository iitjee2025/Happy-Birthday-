# 💜 Happy Birthday Naira — BTS Bora-Hae & K-Drama Celebration Web App

A stunning, modern, romantic, and highly interactive Birthday Celebration web app built with **Next.js (App Router)**, **Tailwind CSS**, **Lucide React**, **Canvas-Confetti**, and **Framer Motion**.

---

## ✨ Features & Sections

### 1. 🎵 Hero Entrance Screen
* **Aesthetic Vinyl Record Player**: Modern turntable featuring spinning vinyl with groove details, glowing center label (*"Naira's Song • Side A"*), dynamic tonearm pivot, and animated equalizer bars.
* **Ambient Acoustic Melody**: Plays a custom romantic acoustic melody synthesized cleanly via the Web Audio API with zero external network lag or broken audio links.
* **Floating Music Notes**: Emits musical notes (♪ ♫ 💜 ✨) as the vinyl rotates.
* **Korean Typography**: Hangul accents (*"생일 축하해요"* / *Saeng-il chukha-haeyo*).
* **Interactive Unlock Button**: Pulsing *"Unlock Your Birthday Surprise 💜"* button that triggers a celestial harp chime and transitions smoothly to the main showcase.

### 2. 📸 Polaroid Photo Scrapbook Gallery
* **BTS Scrapbook Styling**: 6 Polaroid cards arranged with varied tilt angles, authentic paper drop-shadows, and translucent washi tape stickers.
* **Spring Physics**: Cards lift on hover with a soft purple glow and rotate straight.
* **Bilingual Korean-English Captions**:
  * *"Main Character Energy ✨ • 언제나 빛나는 너"*
  * *"K-Drama Smile 🌸 • 심쿵 미소"*
  * *"My Favorite View 💜 • 세상에서 가장 예쁜"*
  * *"Cozy Coffee Aesthetic ☕ • 따뜻한 햇살처럼"*
  * *"Effortlessly Iconic 📸 • 완벽한 순간"*
  * *"Forever My Star 🌙 • 보라해 (I Purple You)"*
* **Full-screen Lightbox**: Click any Polaroid card to view an enlarged memory showcase.
* **Photo Ready**: Drop Naira's photos directly into `public/photos/` as `pic1.jpg` to `pic6.jpg`. Built-in aesthetic fallbacks and placeholders are provided out of the box.

### 3. 🌟 "Reasons You Make the World Brighter" Interactive Cards
* **6 3D Flip Cards** featuring custom BTS/K-Drama themed icons:
  * 💜 **The Borahae Heart**: *Your Golden Kindness*
  * ☕ **Vanilla Latte**: *Your Comforting Presence*
  * 🌟 **Starlight**: *Your Contagious Laugh*
  * 🎤 **Melody**: *Main Character Vibe*
  * 📸 **Vintage Camera**: *Every Memory with You*
  * 🌙 **Crescent Moon**: *My Universe, Naira*
* **Interactive 3D Flip**: Click to flip with smooth 3D perspective physics, revealing heartfelt messages and quotes.

### 4. 💌 The Sealed Letter & "Make a Wish 🎂"
* **Digital Aesthetic Vintage Envelope**: Deep mauve velvet envelope with an embossed 3D wax seal stamped with an ornate **"N"** and heart.
* **Unfolding Animation**: Tapping the seal breaks the wax stamp, unfolds the envelope flap, and reveals a romantic letter written in elegant script typography.
* **"Make a Wish 🎂" Button**:
  * Triggers an orchestrated multi-stage BTS purple (`#9D4EDD`, `#7B2CBF`, `#C77DFF`), gold (`#FFD166`), and cherry blossom blush confetti explosion across the screen using `canvas-confetti`.
  * Plays a celebratory chime sound.
  * Shows a sweet confirmation wish banner (*"소원이 꼭 이루어지길 바라요"*).

---

## 🚀 How to Run the App

### 1. Development Server
```bash
npm run dev
# or: node ./node_modules/next/dist/bin/next dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
npm run start
```

---

## 🖼️ How to Add Naira's Photos
Simply save Naira's photos inside the `public/photos/` folder with these filenames:
* `public/photos/pic1.jpg`
* `public/photos/pic2.jpg`
* `public/photos/pic3.jpg`
* `public/photos/pic4.jpg`
* `public/photos/pic5.jpg`
* `public/photos/pic6.jpg`

---

*보라해 (Borahae) — I Purple You Forever! 💜*

