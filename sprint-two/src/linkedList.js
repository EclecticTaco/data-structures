var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.tail === null) {
      var node = Node(value);
      this.head = node; // link head points to above node
      this.tail = node; // link tail points to above node
    } else {
      // if list not empty run
      var newNode = Node(value);
      var temp = this.tail;
      this.tail = newNode; // set tail to this new node
      temp.next = newNode; // set previous node's next value to newly added node
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
