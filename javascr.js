'use strict';
function refreshPage() {
  window.location.reload();
}

const qmark = document.querySelector('.qmark');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const body = document.querySelector('#body');
const score = document.querySelector('.score');
const check = document.querySelector('.check');
const test = document.querySelector('.test');
const maincontent = document.querySelector('.main-content');
const video = document.querySelector('.video');

video.classList.add('video-unv');

let numberr = Math.floor(Math.random() * 101);
console.log(numberr);
score.value = 9;

test.addEventListener('click', refreshPage);

check.addEventListener('click', () => {
  if (guess.value == numberr) {
    message.textContent = '🎉 Correct Number';
    setInterval(() => {
      return refreshPage();
    }, 7000);
    video.classList.remove('video-unv');

    body.classList.add('body2');
  } else if (guess.value > numberr) {
    message.textContent = '📉 Lower'.toUpperCase();
    qmark.textContent = score.textContent - 1;
  } else {
    message.textContent = '📈 Higher'.toUpperCase();
    qmark.textContent = score.textContent - 1;
  }

  score.textContent = score.value--;
  if (score.textContent == 0) {
    body.classList.add('body3');
    setInterval(() => {
      return refreshPage();
    }, 4000);
    message.textContent = 'GAME OVER!';
    maincontent.textContent = 'GAME OVER!!!';
    qmark.textContent = 'X';
  }

  ////// Condition 1-20
  if (guess.value < 0) {
    qmark.textContent = 'X';
    message.textContent = 'Please guess between 0 and 100!';
  } else if (guess.value > 100) {
    message.textContent = 'Please guess between 0 and 100!';
    qmark.textContent = 'X';
  }
});

// function fonk1() {
//   ///// Condition for guessing
//   if (guess.value == numberr) {
//     message.textContent = '🎉 Correct Number';
//     setInterval(() => {
//       return refreshPage();
//     }, 7000);
//     video.classList.remove('video-unv');

//     body.classList.add('body2');
//   } else if (guess.value > numberr) {
//     message.textContent = '📉 Lower'.toUpperCase();
//     qmark.textContent = score.textContent - 1;
//   } else {
//     message.textContent = '📈 Higher'.toUpperCase();
//     qmark.textContent = score.textContent - 1;
//   }

//   score.textContent = score.value--;
//   if (score.textContent == 0) {
//     body.classList.add('body3');
//     setInterval(() => {
//       return refreshPage();
//     }, 4000);
//     message.textContent = 'GAME OVER!';
//     maincontent.textContent = 'GAME OVER!!!';
//     qmark.textContent = 'X';
//   }

//   ////// Condition 1-20
//   if (guess.value < 0) {
//     qmark.textContent = 'X';
//     message.textContent = 'Please guess between 0 and 100!';
//   } else if (guess.value > 100) {
//     message.textContent = 'Please guess between 0 and 100!';
//     qmark.textContent = 'X';
//   }
// }
