class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.parent = el;
    this.lastDirection = null;
    this.currentDirection = 'right';

    this.oppsMap = {
      'left': 'right',
      'right': 'left',
      'up': 'down',
      'down': 'up'
    }

    this.SPEED = 85;
    this.BOARD_SIZE = 700;

    this.body = null;

    this.topPosition = 0;
    this.leftPosition = 0;

    this.timeoutID;
    this.score = 0;

  }

  startGame() {
    this.timeoutID = setTimeout(this.move.bind(this), this.SPEED);
    score.innerText = '0';
  }

  cleanUp() {
    // remove all elements from dom
    if (this.body) {
      for (const seg of this.body.body) {
        seg.node.remove();
      }
    }
    this.node.remove();
  }

  isOutOfBounds(top, left, direction) {
    if (direction === 'right') left += 50;
    if (direction === 'left') left -= 50;
    if (direction === 'up') top -= 50;
    if (direction === 'down') top += 50;
    if (top < 0 || left < 0 || top >= 700 || left >= 700) {
      return true;
    }
    return false;
  }

  isInApple(topPosition, leftPosition) {
    return (topPosition === apple.topPosition && leftPosition === apple.leftPosition);
  }

  toggleDeath() {
    this.node.classList.add('dead');
    if (this.body) {
      for (let i = 0; i < this.body.body.length; i++) {
        const seg = this.body.body[i];
        setTimeout(() => seg.node.classList.add('dead'), 150 * (i + 1));
      }
    }
  }

  endGame() {
    // if there is no hs, set hs
    // if score > hs, set hs
    const currHS = localStorage.getItem('hs');
    console.log('currHS is ', currHS);
    if (currHS === null || this.score > currHS) {
      localStorage.setItem('hs', this.score);
      highScore.innerText = this.score;
    }

    clearInterval(this.timeoutID);
    this.toggleDeath();
  }

  isInOwnSeg() {
    for (const seg of this.body.body) {
      if (this.leftPosition === seg.leftPosition && this.topPosition === seg.topPosition) {
        return true;
      }
    }
    return false;
  }

  move() {
    const head = this.node;
    const prevLeft = this.leftPosition;
    const prevTop = this.topPosition;

    // we already hard-check in our listener to avoid opposite presses
    // but this is an extra check such that the user cannot 'queue' an opposite direction
      // (between the invocations of move())
    if (this.lastDirection) {
      // if it's opposite from current, assign last to current
      if (this.oppsMap[this.lastDirection] === this.currentDirection) {
        this.currentDirection = this.lastDirection;
      }
    }
    const direction = this.currentDirection;
    this.lastDirection = this.currentDirection;

    // end game checks
    // oob?
    if (this.isOutOfBounds(this.topPosition, this.leftPosition, direction)) {
      this.endGame();
      return;
    }
    // ourobouros?
    if (this.body !== null && this.isInOwnSeg()) {
      this.endGame();
      return;
    }

    // handle head in apple (monch monch)
    if(this.isInApple(this.topPosition, this.leftPosition)) {
      this.score++;
      score.innerText = this.score;
      if (this.body === null) this.body = new Body(this, this.parent);
      else this.body.addSeg();
      apple.randomizeLocation(this);
    }

    // handle moving shnake head
    if (direction === 'right') head.style.left = `${(this.leftPosition += 50)}px`;
    if (direction === 'left') head.style.left = `${(this.leftPosition -= 50)}px`;
    if (direction === 'up') head.style.top = `${(this.topPosition -= 50)}px`;
    if (direction === 'down') head.style.top = `${(this.topPosition += 50)}px`;

    // handle moving shnake body
    if (this.body) this.body.move(prevTop, prevLeft);

    // setup new move
    this.timeoutID = setTimeout(this.move.bind(this), this.SPEED);
  }
}




// console.log('parentElement: ', head.parentElement);
// const board = head.parentElement;
// const heightStyle = getComputedStyle(board).getPropertyValue("height");
// const height = Number(heightStyle.replace("px", ""));
// console.log(height);