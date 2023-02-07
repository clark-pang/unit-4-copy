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

  randomizeLocation(head = {leftPosition: 0, topPosition: 0}) {
    console.log('in apple, head is: ', head);

    // 14 is for the board size
    let newLeft = Math.floor((Math.random() * 14)) * 50; // gives random int from 0 - 13 inclusive
    let newTop = Math.floor((Math.random() * 14)) * 50; // gives random int from 0 - 13 inclusive
    if (newLeft === head.leftPosition && newTop === head.topPosition) {
      // shift over
      if (newLeft <= 600) newLeft += 50;
      else newLeft -= 50;
      if (newTop <= 600) newTop += 50;
      else newTop -= 50;
    }

    this.leftPosition = newLeft;
    this.topPosition = newTop;
    this.node.style.left = newLeft + 'px';
    this.node.style.top = newTop + 'px';
  }
}

