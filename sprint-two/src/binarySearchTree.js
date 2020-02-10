var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.value = value;
  tree.left = undefined;
  tree.right = undefined;

  return tree;
};

var binaryTreeMethods = {
  insert: function(value) {
    // debugger;
    if (this.left === undefined && value < this.value) {
      this.left = BinarySearchTree(value);
      return 'first';
    } else if (this.right === undefined && value > this.value) {
      this.right = BinarySearchTree(value);
      return 'first';
    }

    if (this.left !== undefined && value < this.value) { // if this.right is undefined: error, needs new check
      this.left.insert(value);
      return 'second';
    }

    if (this.right !== undefined && value > this.value) {
      this.right.insert(value);
      return 'third';
    }


  },

  contains: function(value) {

  },

  depthFirstLog: function(cb) {

  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
