var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.counter = 0;
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
};

stackMethods.pop = function() {
  var temp;
  temp = this.storage[this.counter - 1];
  delete this.storage[this.counter - 1];
  this.counter -= 1;
  return temp;
};

stackMethods.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count += 1;
  }
  return count;
};


