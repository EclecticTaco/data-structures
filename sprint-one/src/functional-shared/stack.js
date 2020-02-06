var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack.counter = 0;

  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.counter] = value;
    this.counter += 1;
  },

  pop: function () {
    var temp;
    temp = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter -= 1;
    return temp;
  },

  size: function () {
    var count = 0;
    for (var key in this.storage) {
      count += 1;
    }
    return count;
  },
};




