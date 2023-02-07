class Apple {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'apple');
    const img = document.createElement('img');
    img.setAttribute('src', 'src/assets/apple2.gif');
    this.node.appendChild(img);

    el.appendChild(this.node);
    this.leftPosition = null;
    this.topPosition = null;
    this.randomizeLocation();
  }

  isInBody(top, left, body) {
    if (!body) return false;
    for (const seg of body.body) {
      if (top === seg.topPosition && left === seg.leftPosition) return true;
    }
    return false;
  }

  randomizeLocation(head = {leftPosition: 0, topPosition: 0}) {
    // create new apple location
    // while it matches any of the head or body positions
      // keep creating new apple locations

    // now we have an apple location that isn't in the snake
    // reassign position and styling
    let newLeft, newTop;

    do {
      newLeft = Math.floor((Math.random() * 14)) * 50;
      newTop = Math.floor((Math.random() * 14)) * 50;
    } while (
      (newLeft === head.leftPosition && newTop === head.topPosition)
      || this.isInBody(newTop, newLeft, head.body)
    )

    // shift over
    // if (newLeft <= 600) newLeft += 50;
    // else newLeft -= 50;
    // if (newTop <= 600) newTop += 50;
    // else newTop -= 50;


    this.leftPosition = newLeft;
    this.topPosition = newTop;
    this.node.style.left = newLeft + 'px';
    this.node.style.top = newTop + 'px';
  }
}

