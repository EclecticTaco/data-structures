class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(Stacks) {
    this.storage = {};
    this.counter = 0;
  }
  push(value) {
    this.storage[this.counter] = value;
    this.counter += 1;
  }

  pop() {
    var temp;
    temp = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter -= 1;
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