document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');
  const playButton = document.querySelector('#play-button')
  score = document.querySelector('#score');
  highScore = document.querySelector('#high-score');
  const currHS = localStorage.getItem('hs');
  highScore.innerText = currHS ?? 0;

  apple = new Apple(board);
  let head;

  playButton.addEventListener('click', e => {
    if (head) head.cleanUp();
    head = new Head(board);
    head.startGame();
  });

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
      if (head.currentDirection !== 'right') head.currentDirection = 'left';
    }
    if (e.code === 'ArrowRight') {
      if (head.currentDirection !== 'left') head.currentDirection = 'right';
    }
    if (e.code === 'ArrowDown') {
      if (head.currentDirection !== 'up') head.currentDirection = 'down';
    }
    if (e.code === 'ArrowUp') {
      if (head.currentDirection !== 'down') head.currentDirection = 'up';
    }
  });
});
