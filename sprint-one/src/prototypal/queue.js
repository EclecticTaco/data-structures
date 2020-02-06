var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(queueMethods);
  stack.storage = {};
  stack.topCount = 0;
  stack.botCount = 0;
  return stack;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.topCount] = value;
  this.topCount += 1;
},

queueMethods.dequeue = function() {
  var temp = this.storage[this.botCount];
  delete this.storage[this.botCount];
  this.botCount += 1;
  return temp;
};

queueMethods.size = function () {
  var count = 0;
  for (var key in this.storage) {
    count += 1;
  }
  return count;
};


