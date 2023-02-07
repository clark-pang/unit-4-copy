class Body {
  constructor (head, parent) {
    this.body = [];
    this.body.push(new Seg(head.topPosition, head.leftPosition, parent));
    this.parent = parent;
  }

  addSeg() {
    const lastSeg = this.body[this.body.length - 1];
    const newSeg = new Seg(lastSeg.topPosition, lastSeg.leftPosition, this.parent);
    this.body.push(newSeg);
  }

  // always be sending in the head's previous location so we can update our conga line
  // shift everything over in reverse (to avoid overwrite)
  move(top, left) {
    for (let i = this.body.length - 1; i >= 1; i--) {
      const currSeg = this.body[i];
      const prevSeg = this.body[i - 1];
      currSeg.topPosition = prevSeg.topPosition;
      currSeg.leftPosition = prevSeg.leftPosition;
      currSeg.node.style.left = currSeg.leftPosition + 'px';
      currSeg.node.style.top = currSeg.topPosition + 'px';
    }

    const firstSeg = this.body[0];

    firstSeg.topPosition = top;
    firstSeg.leftPosition = left;

    firstSeg.node.style.left = firstSeg.leftPosition + 'px';
    firstSeg.node.style.top = firstSeg.topPosition + 'px';
  }
}

class Seg {
  constructor(top, left, parent) {
    this.topPosition = top;
    this.leftPosition = left;
    this.node = document.createElement('div');
    this.node.setAttribute('class', 'seg');
    parent.appendChild(this.node);
  }
}



//clark notes:
// a body is just a collection of segments
    // each seg must contain left and top position
    // strutured in dom just like the head
// we can store them in an array
// in order to move the snake accordingly, we need to shift over that array by one
  // i.e. replace each seg's x and y with the next seg's
// note to self about the 'self contained 1st chain' bug:
// it was solved by realizing that keeping a reassigned pointer to 'this' would be of no help
// since it's a reference to the object
// you had to get the specific properties


/* CHRIS NOTES LOL
potentially a linkedlist
a collection of nodes (segments)

their positions are based off
of each other's previous position

this.head = the node from the head class
this.tail = null

this.topPosition = null;
this.leftPosition = null;

add segment method
- would need to fire everytime head class instance
isInApple() === true

update position method
- needed for when the move() fires
to move each segment forward

How to handle collision?
initial thoughts
- search method into a contains method
- contains method?
*/