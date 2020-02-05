var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[value] = counter;
    counter += 1;
  };

  someInstance.pop = function() {
    var temp = {};
    for (var key in storage) {
      if (storage[key] === (counter - 1)) {
        delete storage[key];
        temp[key] = storage[key];
      }
    }
    for (var keys in temp) {
      return keys
    }

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

// stack returns somInstance, an object, its keys are (push, pop, size), the values are functions attched to the keys