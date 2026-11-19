// PAGE NAVIGATION
function showPage(number) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById('page' + number)
    .classList.add('active');
}

// NOT ACCEPTED BUTTON RUN AWAY
const noBtn = document.getElementById('noBtn');
const buttonArea = document.getElementById('buttonArea');

function moveButton() {
  const maxX = Math.max(
    0,
    buttonArea.clientWidth - noBtn.offsetWidth
  );

  const maxY = Math.max(
    0,
    buttonArea.clientHeight - noBtn.offsetHeight
  );

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
}

noBtn.addEventListener('pointerenter', moveButton);

noBtn.addEventListener('touchstart', function(e) {
  e.preventDefault();
  moveButton();
}, { passive: false });

noBtn.addEventListener('click', function(e) {
  e.preventDefault();
  moveButton();
});

// SET TODAY AS MINIMUM DATE
const dateInput = document.getElementById('dateInput');

const today = new Date();

const localToday = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, '0'),
  String(today.getDate()).padStart(2, '0')
].join('-');

dateInput.min = localToday;

// DATE SELECTION
function goToTime() {
  if (!dateInput.value) {
    alert('Please select a date ❤️');
    return;
  }

  showPage(6);
}

// TIME SELECTION
const timeInput = document.getElementById('timeInput');

function goToFood() {
  if (!timeInput.value) {
    alert('Please select a time ⏰');
    return;
  }

  showPage(7);
}

// FINAL PAGE
function finish() {
  const selectedFood =
    document.querySelector('input[name="food"]:checked');

  if (!selectedFood) {
    alert('Please choose your favourite food 🍕');
    return;
  }

  const date = dateInput.value;
  const time = timeInput.value;
  const food = selectedFood.value;

  document.getElementById('summary').innerHTML =
    'Our Date: ' + date +
    '<br>Our Time: ' + time +
    '<br>Our Food: ' + food;

  showPage(8);
}

// FLOATING HEARTS
setInterval(() => {
  const heart = document.createElement('div');

  heart.className = 'heart';

  heart.innerHTML = ['❤️', '💗', '💕', '💖', '🌸'][
    Math.floor(Math.random() * 5)
  ];

  heart.style.left = Math.random() * 100 + 'vw';

  heart.style.animationDuration =
    (3 + Math.random() * 4) + 's';

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);

}, 700);