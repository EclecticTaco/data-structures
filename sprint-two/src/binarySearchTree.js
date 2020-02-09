var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  this.value = value;
  this.left = undefined;
  this.right = undefined;

  return tree;
};

var binaryTreeMethods = {
  insert: function(value) {
    if (this.left === undefined && value < this.value) {
      this.left = BinarySearchTree(value);
    } else if (this.right === undefined && value > this.value) {
      this.right = BinarySearchTree(value);
    }

  //   if (this.left )
  },

  contains: function(value) {

  },

  depthFirstLog: function(cb) {

  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
