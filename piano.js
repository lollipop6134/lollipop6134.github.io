const menuBtn = document.getElementById('showMenu');
const menu = document.querySelector('.menu');
const blackWindow = document.getElementById('blackWindow');

menuBtn.addEventListener('click', () => {
  menu.classList.add('show');
  blackWindow.classList.add('active');
});

blackWindow.addEventListener('click', () => {
    menu.classList.remove('show');
    blackWindow.classList.remove('active');
})

const keys = document.querySelectorAll('.key');

const notes = ['C', 'CSharp', 'D', 'DSharp', 'E', 'F', 'FSharp', 'G', 'GSharp', 'A', 'ASharp', 'B',
'C2', 'CSharp2', 'D2', 'DSharp2', 'E2', 'F2', 'FSharp2', 'G2', 'GSharp2', 'A2', 'ASharp2', 'B2',
'C3', 'CSharp3', 'D3', 'DSharp3', 'E3', 'F3', 'FSharp3', 'G3', 'GSharp3', 'A3', 'ASharp3', 'B3',
'C4', 'CSharp4'];

const keyboard = ['Q', '2', 'W', '3', 'E', 'R', '5', 'T', '6', 'Y', '7', 'U',
'I', '9', 'O', '0', 'P', '[', '=', ']', 'A', 'Z', 'S', 'X',
'C', 'F', 'V', 'G', 'B', 'N', 'J', 'M', 'K', ',', 'L', '.',
'/', "'"];

const keyboardru = ['Й', '2', 'Ц', '3', 'У', 'К', '5', 'Е', '6', 'Н', '7', 'Г',
'Ш', '9', 'Щ', '0', 'З', 'Х', '=', 'Ъ', 'Ф', 'Я', 'Ы', 'Ч',
'С', 'А', 'М', 'П', 'И', 'Т', 'О', 'Ь', 'Л', 'Б', 'Д', 'Ю',
'.', 'Э'];

const keyboardButton = document.getElementById('keyboard');
let isKeyboardButton = true;

function onload() {
  if (isKeyboardButton) {
    keyboardButton.innerText = 'Выключить';
  } else {
    keyboardButton.innerText = 'Включить';
  }
}

function keyboardButtonFunction() {
  keys.forEach((key) => {
    key.classList.toggle('hide-text');
  });
  isKeyboardButton = !isKeyboardButton;
  if (isKeyboardButton) {
    keyboardButton.innerText = 'Выключить';
  } else {
    keyboardButton.innerText = 'Включить';
  }
}

function playNote(note) {
  const audio = new Audio(`audio/${note}.mp3`);
  audio.play();
  const key = document.querySelector(`.key[data-note="${note}"]`);
  key.classList.add('active');
  setTimeout(() => key.classList.remove('active'), 200);
}

keys.forEach(key => {
  key.addEventListener('mousedown', () => {
    const note = key.dataset.note;
    playNote(note);
  });
});

function playNoteByKey(key) {
  const index = keyboard.indexOf(key);
  const index2 = keyboardru.indexOf(key);
  if (index !== -1) {
    const note = notes[index];
    playNote(note);
  }
  else if (index2 !== -1)
  {
    const note = notes[index2];
    playNote(note);
  }
}
  
window.addEventListener('keydown', event => {
  if (event.repeat) return;
  const key = event.key || event.code;
  playNoteByKey(key.toUpperCase());
});