// Toggle Button for Mobile Responsive
const menuToggle = document.getElementById('menuToggle');
const popupMenu = document.getElementById('popupMenu');

menuToggle.addEventListener('click', () => {
  popupMenu.classList.toggle('hidden');
});

// Credit Logic
let tokens = 100;
const tokenSpan = document.querySelector('.creditcount');
const callButtons = document.querySelectorAll('.call-btn');

// Call History container
const historyAside = document.querySelector('.history');

// Call button loop
callButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (tokens >= 20) {
      tokens -= 20;
      tokenSpan.textContent = tokens;

      const parentCard = btn.closest('.card');
      const serviceName = parentCard.querySelector('.title').textContent;
      const serviceNumber = parentCard.querySelector('.number').textContent;
      const timeNow = new Date().toLocaleTimeString();

      const historyEntry = document.createElement('div');
      historyEntry.classList.add(
        'p-2',
        'border-b',
        'text-sm',
        'flex',
        'justify-between',
        'items-center'
      );

      historyEntry.innerHTML = `
        <div>
          <div class="font-bold">${serviceName}</div>
          <div class="text-gray-600">${serviceNumber}</div>
        </div>
        <div class="text-gray-500">${timeNow}</div>
      `;

      historyAside.appendChild(historyEntry);
    } else {
      alert('insufficient balance, please recharge!');
    }
  });
});

// Copy Count Logic
let copyCount = 2;
const copySpan = document.querySelector('.copycount');
const copyButtons = document.querySelectorAll('.copybtn');

copyButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    copyCount += 1;
    copySpan.textContent = copyCount;
  });
});

// Love Count Logic
let loveCount = 0;
const loveSpan = document.querySelector('.lovecount');
const loveIcons = document.querySelectorAll('.heart-icon');

loveIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    loveCount += 1;
    loveSpan.textContent = loveCount;
  });
});

// Clear History Logic
const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
  const entries = historyAside.querySelectorAll('div.p-2');
  entries.forEach((entry) => entry.remove());
});
