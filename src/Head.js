class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.parent = el;

    this.currentDirection = 'right';
    this.SPEED = 70;
    this.BOARD_SIZE = 700;

    this.body = null;

    this.topPosition = 0;
    this.leftPosition = 0;
    // this.node.style.top = 0;
    // this.node.style.left = 0;

    this.getApplePosition();

    this.timeoutID = setTimeout(this.move.bind(this), this.SPEED);
    this.oppMapping = {
      'left': 'right',
      'right': 'left',
      'up': 'down',
      'down': 'up'
    }

  /* end game temp name
    need to check
    - if the position of the head is outside
    of the game board

    potential conditions
    - before the next time the head moves?
  */
  }

  // square
  isGameOver(top, left, direction, timeoutID) {
    console.log('top: ', top, 'left: ', left);
    if (direction === 'right') left += 50;
    if (direction === 'left') left -= 50;
    if (direction === 'up') top -= 50;
    if (direction === 'down') top += 50;
    if (top < 0 || left < 0 || top >= 700 || left >= 700) {
      console.log('GAME OVER');
      console.log('top: ', top, 'left: ', left);
      clearTimeout(timeoutID);
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
    const prevLeft = this.leftPosition;
    const prevTop = this.topPosition;
    const direction = this.currentDirection;

    if (this.isGameOver(this.topPosition, this.leftPosition, direction, this.timeoutID)) return;
    this.timeoutID = setTimeout(this.move.bind(this), this.SPEED);

    // handle head in apple
    if(this.isInApple(this.topPosition, this.leftPosition)) {
      if (this.body === null) this.body = new Body(this, this.parent);
      else this.body.addSeg();
      apple.randomizeLocation(this);
      console.log('BODY: ', this.body);
    }

    // handle moving shnake head (jank x2)
    if (direction === 'right') head.style.left = `${(this.leftPosition += 50)}px`;
    if (direction === 'left') head.style.left = `${(this.leftPosition -= 50)}px`;
    if (direction === 'up') head.style.top = `${(this.topPosition -= 50)}px`;
    if (direction === 'down') head.style.top = `${(this.topPosition += 50)}px`;

    // handle moving shnake body

    if (this.body) this.body.move(prevTop, prevLeft);

    /*
    setTimeout still queues a move call after we have set
    isGameOver to false
    */
    // check for out of bounds

  }
}




// console.log('parentElement: ', head.parentElement);
// const board = head.parentElement;
// const heightStyle = getComputedStyle(board).getPropertyValue("height");
// const height = Number(heightStyle.replace("px", ""));
// console.log(height);