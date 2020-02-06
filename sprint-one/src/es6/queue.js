class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(Stacks) {
    this.storage = {};
    this.topCount = 0;
    this.botCount = 0;
  }

  enqueue(value) {
    this.storage[this.topCount] = value;
    this.topCount += 1;
  }

  dequeue() {
    var temp = this.storage[this.botCount];
    delete this.storage[this.botCount];
    this.botCount += 1;
    return temp;
  }

  size() {
    var count = 0;
    for (var key in this.storage) {
      count += 1;
    }
    return count;
  }
}
