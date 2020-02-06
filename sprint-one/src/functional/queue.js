var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var counterTop = 0;
  var counterBottom = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counterTop] = value;
    counterTop += 1;

  };

  someInstance.dequeue = function() {
    var temp = storage[counterBottom];
    delete storage[counterBottom];
    counterBottom += 1;
    return temp;
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in storage) {
      count += 1;
    }
    return count;
  };

  return someInstance;
};
// Queue returns an Object (someInstance)
// that object has keys which are (enqeue, deqeue, size) the values associated with those keys re the function