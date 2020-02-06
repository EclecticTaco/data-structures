var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.topCount = 0;
  someInstance.botCount = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;

};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.topCount] = value;
    this.topCount += 1;
  },

  dequeue: function() {
    var temp = this.storage[this.botCount];
    delete this.storage[this.botCount];
    this.botCount += 1;
    return temp;
  },

  size: function() {
    var count = 0;
    for (var key in this.storage) {
      count += 1;
    }
    return count;
  }
};


