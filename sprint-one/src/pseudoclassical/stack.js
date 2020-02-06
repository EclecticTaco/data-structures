var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
};

Stack.prototype.pop = function() {
  var temp;
  temp = this.storage[this.counter - 1];
  delete this.storage[this.counter - 1];
  this.counter -= 1;
  return temp;
};

Stack.prototype.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count += 1;
  }
  return count;
};

