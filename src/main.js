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
      console.log('pressed left');
      head.currentDirection = 'left';
    }
    if (e.code === 'ArrowRight') {
      console.log('pressed right');
      head.currentDirection = 'right';
    }
    if (e.code === 'ArrowDown') {
      console.log('pressed down');
      head.currentDirection = 'down';
    }
    if (e.code === 'ArrowUp') {
      console.log('pressed up');
      head.currentDirection = 'up';
    }
  });
});
