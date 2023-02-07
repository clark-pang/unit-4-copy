document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  // left off const, to allow access to global space
  // var also doesn't allow it to be accessed
  apple = new Apple(board);
  console.log('in main, apple is: ', apple);
  const head = new Head(board);

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
