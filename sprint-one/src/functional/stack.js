var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter += 1;
  };

  someInstance.pop = function() {
    var temp = storage[counter - 1];
    delete storage[counter - 1];
    counter -= 1;
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
var stack = Stack();

// stack returns somInstance, an object, its keys are (push, pop, size), the values are functions attched to the keys
