class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;
    this.BOARD_SIZE = 700;

    this.node.style.top = 0;
    this.node.style.left = 0;

    this.timeoutID = setTimeout(this.move.bind(this), this.SPEED);
    
  /* end game temp name
    need to check 
    - if the position of the head is outside
    of the game board

    potential conditions
    - before the next time the head moves?
  */
  }

  // square
  isGameOver(top, left) {
    // if 
    console.log('top: ', top);
    console.log('left: ', left);
    if (top < 0 || left < 0 || top >= 700 || left >= 700) {
      console.log('here');
      clearTimeout(this.timeoutID);
      return true;
    }
    return false;
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;
    
    // get position
    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));

    
    // handle moving
    // jank x2
    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`;
    }
    if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
    }
    if (direction === 'up') {
      head.style.top = `${(topPosition -= 50)}px`;
    }
    if (direction === 'down') {
      head.style.top = `${(topPosition += 50)}px`;
    }
    
    /*
    setTimeout still queues a move call after we have set
    isGameOver to false
    */
    if (!this.isGameOver(topPosition, leftPosition)) {
      this.timeoutID = setTimeout(this.move.bind(this), this.SPEED);
    }
    // check for out of bounds
    
  }
}


// console.log('parentElement: ', head.parentElement);
// const board = head.parentElement;
// const heightStyle = getComputedStyle(board).getPropertyValue("height");
// const height = Number(heightStyle.replace("px", ""));
// console.log(height);