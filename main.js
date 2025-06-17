let clockFormat = '12h';

// Main JS for the website
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  let timeStr;
  if (clockFormat === '24h') {
    timeStr = `${String(hours).padStart(2, '0')}:${minutes}`;
  } else {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    timeStr = `${hours}:${minutes} ${ampm}`;
  }
  const clock = document.getElementById('clock-container');
  if (clock) {
    clock.textContent = timeStr;
  }
}
setInterval(updateTime, 1000);
updateTime();

// Background image switcher
const body = document.body;

// Popup for background selection
const bgNav = document.querySelector('.navbar a[href="#background"]');
const bgPopup = document.getElementById('background-popup');
const closeBgPopup = document.getElementById('close-bg-popup');
const bgThumbs = document.querySelectorAll('.bg-thumb');

if (bgNav && bgPopup && closeBgPopup) {
  bgNav.addEventListener('click', (e) => {
    e.preventDefault();
    bgPopup.style.display = 'flex';
  });
  closeBgPopup.addEventListener('click', () => {
    bgPopup.style.display = 'none';
  });
  // Optional: close popup when clicking outside the modal
  bgPopup.addEventListener('click', (e) => {
    if (e.target === bgPopup) bgPopup.style.display = 'none';
  });
}

bgThumbs.forEach(img => {
  img.addEventListener('click', () => {
    document.body.style.backgroundImage = `url('${img.src}')`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100vw 100vh';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundAttachment = 'fixed';
    bgPopup.style.display = 'none';
  });
});

// Clock popup logic
const clockNav = document.querySelector('.navbar a[href="#clock"]');
const clockPopup = document.getElementById('clock-popup');
const closeClockPopup = document.getElementById('close-clock-popup');
const btn12h = document.getElementById('clock-12h');
const btn24h = document.getElementById('clock-24h');

if (clockNav && clockPopup && closeClockPopup) {
  clockNav.addEventListener('click', (e) => {
    e.preventDefault();
    clockPopup.style.display = 'flex';
  });
  closeClockPopup.addEventListener('click', () => {
    clockPopup.style.display = 'none';
  });
  clockPopup.addEventListener('click', (e) => {
    if (e.target === clockPopup) clockPopup.style.display = 'none';
  });
}
if (btn12h && btn24h) {
  btn12h.addEventListener('click', () => {
    clockFormat = '12h';
    clockPopup.style.display = 'none';
    updateTime();
  });
  btn24h.addEventListener('click', () => {
    clockFormat = '24h';
    clockPopup.style.display = 'none';
    updateTime();
  });
}

// Emoji popup logic
const emojiNav = document.querySelector('.navbar a[href="#emojis"]');
const emojiPopup = document.getElementById('emoji-popup');
const closeEmojiPopup = document.getElementById('close-emoji-popup');
const emojiCombos = document.querySelectorAll('.emoji-combo');
const cornerEmojis = document.getElementById('corner-emojis');

if (emojiNav && emojiPopup && closeEmojiPopup) {
  emojiNav.addEventListener('click', (e) => {
    e.preventDefault();
    emojiPopup.style.display = 'flex';
  });
  closeEmojiPopup.addEventListener('click', () => {
    emojiPopup.style.display = 'none';
  });
  emojiPopup.addEventListener('click', (e) => {
    if (e.target === emojiPopup) emojiPopup.style.display = 'none';
  });
}
emojiCombos.forEach(combo => {
  combo.addEventListener('click', () => {
    if (cornerEmojis) cornerEmojis.textContent = combo.textContent;
    emojiPopup.style.display = 'none';
  });
});

// Quote popup logic
const quoteNav = document.querySelector('.navbar a[href="#quote"]');
const quotePopup = document.getElementById('quote-popup');
const closeQuotePopup = document.getElementById('close-quote-popup');
const quoteOptions = document.querySelectorAll('.quote-option');
const quoteDisplay = document.getElementById('quote');

if (quoteNav && quotePopup && closeQuotePopup) {
  quoteNav.addEventListener('click', (e) => {
    e.preventDefault();
    quotePopup.style.display = 'flex';
  });
  closeQuotePopup.addEventListener('click', () => {
    quotePopup.style.display = 'none';
  });
  quotePopup.addEventListener('click', (e) => {
    if (e.target === quotePopup) quotePopup.style.display = 'none';
  });
}
quoteOptions.forEach(option => {
  option.addEventListener('click', () => {
    if (quoteDisplay) quoteDisplay.innerHTML = option.innerHTML;
    quotePopup.style.display = 'none';
  });
});
