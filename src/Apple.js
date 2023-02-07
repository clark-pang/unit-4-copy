class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    el.appendChild(this.node);
    
    
    // 14 is for the board size
    const xPosition = Math.floor((Math.random() * 14)); // gives random int from 0 - 13 inclusive
    const yPosition = Math.floor((Math.random() * 14)); // gives random int from 0 - 13 inclusive
    this.node.style.left = (xPosition * 50) + 'px';
    this.node.style.top = (yPosition * 50) + 'px';

  }
}
