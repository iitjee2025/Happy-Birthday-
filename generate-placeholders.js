const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, 'public', 'photos');
if (!fs.existsSync(photosDir)) {
  fs.mkdirSync(photosDir, { recursive: true });
}

const placeholders = [
  {
    name: 'pic1.jpg',
    title: 'Main Character Energy',
    hangul: '언제나 빛나는 너 ✨',
    gradient: ['#3c096c', '#7b2cbf', '#ff9e00'],
    icon: '✨',
  },
  {
    name: 'pic2.jpg',
    title: 'K-Drama Smile',
    hangul: '심쿵 미소 🌸',
    gradient: ['#5a189a', '#9d4edd', '#ff70a6'],
    icon: '🌸',
  },
  {
    name: 'pic3.jpg',
    title: 'My Favorite View',
    hangul: '세상에서 가장 예쁜 💜',
    gradient: ['#240046', '#5a189a', '#c77dff'],
    icon: '💜',
  },
  {
    name: 'pic4.jpg',
    title: 'Cozy Moments',
    hangul: '따뜻한 햇살처럼 ☕',
    gradient: ['#3a0ca3', '#7209b7', '#f72585'],
    icon: '☕',
  },
  {
    name: 'pic5.jpg',
    title: 'Effortlessly Iconic',
    hangul: '완벽한 순간 📸',
    gradient: ['#10002b', '#3c096c', '#9d4edd'],
    icon: '📸',
  },
  {
    name: 'pic6.jpg',
    title: 'Forever My Star',
    hangul: '보라해 • Mikrokosmos 🌙',
    gradient: ['#1a0c2c', '#4a154b', '#e0aaff'],
    icon: '🌙',
  },
];

placeholders.forEach((p) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.gradient[0]}" />
        <stop offset="50%" stop-color="${p.gradient[1]}" />
        <stop offset="100%" stop-color="${p.gradient[2]}" />
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)" />
        <stop offset="100%" stop-color="rgba(0,0,0,0)" />
      </radialGradient>
    </defs>
    <rect width="800" height="1000" fill="url(#grad)" />
    <rect width="800" height="1000" fill="url(#glow)" />
    
    <!-- Stars -->
    <circle cx="150" cy="200" r="2.5" fill="#ffffff" opacity="0.8" />
    <circle cx="680" cy="160" r="3" fill="#ffffff" opacity="0.9" />
    <circle cx="280" cy="350" r="2" fill="#ffd166" opacity="0.7" />
    <circle cx="620" cy="420" r="2.5" fill="#ffb3c6" opacity="0.8" />
    <circle cx="200" cy="780" r="3" fill="#ffffff" opacity="0.7" />
    <circle cx="650" cy="820" r="2" fill="#e0aaff" opacity="0.9" />

    <!-- Center Icon Aura -->
    <circle cx="400" cy="460" r="140" fill="rgba(255,255,255,0.08)" />
    <circle cx="400" cy="460" r="110" fill="rgba(255,255,255,0.12)" />
    
    <!-- Center Emoji/Symbol -->
    <text x="400" y="495" font-size="100" text-anchor="middle" font-family="sans-serif">${p.icon}</text>
    
    <!-- Titles -->
    <text x="400" y="650" font-size="36" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="Georgia, serif" letter-spacing="1">NAIRA</text>
    <text x="400" y="700" font-size="24" fill="#ffb3c6" text-anchor="middle" font-family="sans-serif">${p.hangul}</text>
    <text x="400" y="740" font-size="18" fill="rgba(255,255,255,0.7)" text-anchor="middle" font-family="monospace" letter-spacing="3">PLACEHOLDER • DROP PHOTO HERE</text>
  </svg>`;

  fs.writeFileSync(path.join(photosDir, p.name), svg);
});

console.log('Successfully generated aesthetic placeholder photos in public/photos/');

