var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = item;
};

setPrototype.contains = function(item) {
  for (var key in this.storage) {
    if (item === key) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for (var key in this.storage) {
    if (item === key) {
      delete this.storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var set = Set();
set.add('Mel Gibson');
set.remove('Mel Gibson');
set.contains('Mel Gibson')
