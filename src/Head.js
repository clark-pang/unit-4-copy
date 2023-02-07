class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 100;
    this.BOARD_SIZE = 700;
  
    this.topPosition = 0;
    this.leftPosition = 0;
    // this.node.style.top = 0;
    // this.node.style.left = 0;

    this.getApplePosition();

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

  // get apple position 
  getApplePosition() {

    const appleXPosition = apple.leftPosition;
    const appleYPosition = apple.topPosition;
    console.log('x, y: ', appleXPosition, appleYPosition);
    return [];
  } 

  isInApple(topPosition, leftPosition) {
    return (topPosition === apple.topPosition && leftPosition === apple.leftPosition);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;
    
    // get position
    // let topPosition = Number(head.style.top.replace('px', ''));
    // let leftPosition = Number(head.style.left.replace('px', ''));

    // check if position matches apple position
    if(this.isInApple(this.topPosition, this.leftPosition)) {
      console.log('in head, this is: ', this);
      apple.randomizeLocation(this);
    }
    // if so, then get rid of dat appl and make new one
    
    // handle moving
    // jank x2
    if (direction === 'right') {
      head.style.left = `${(this.leftPosition += 50)}px`;
    }
    if (direction === 'left') {
      head.style.left = `${(this.leftPosition -= 50)}px`;
    }
    if (direction === 'up') {
      head.style.top = `${(this.topPosition -= 50)}px`;
    }
    if (direction === 'down') {
      head.style.top = `${(this.topPosition += 50)}px`;
    }
    
    /*
    setTimeout still queues a move call after we have set
    isGameOver to false
    */
    if (!this.isGameOver(this.topPosition, this.leftPosition)) {
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