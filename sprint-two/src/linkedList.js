var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.previous = null;

  list.addToTail = function(value) {
    if (this.tail === null) { // if list is empty run
      this[value] = Node(value); // create new node with pass in value
      this.head = this[value]; // link head points to above node
      this.tail = this[value]; // link tail points to above node
      this.previous = value; // sets previous to current value
    } else {
      this[value] = Node(value); // if list not empty run
      this.tail = this[value]; // set tail to this new node
      var before = this.previous;
      this[before].next = this[value]; // set previous node's next value to newly added node
      this[before] = this[value]; // set previous current (over writing old previous)
      this.previous = this[value];
    }
  };

  list.removeHead = function() {
    var oldHeader = this.head.value;
    var oldHeaderObj = this.head;
    this.head = oldHeaderObj.next;

    return oldHeader;
    // return oldHeader;
  };

  list.contains = function(target) {
    for (var key in this) {
      if (this[key].value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
