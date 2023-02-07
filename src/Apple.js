class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    el.appendChild(this.node);
    this.leftPosition = null;
    this.topPosition = null;
    this.randomizeLocation();
  }
  
  randomizeLocation(head) {
    console.log('in apple, head is: ', head);

    // 14 is for the board size
    this.leftPosition = Math.floor((Math.random() * 14)) * 50; // gives random int from 0 - 13 inclusive
    this.topPosition = Math.floor((Math.random() * 14)) * 50; // gives random int from 0 - 13 inclusive
    this.node.style.left = (this.leftPosition) + 'px';
    this.node.style.top = (this.topPosition) + 'px';

  }
}

