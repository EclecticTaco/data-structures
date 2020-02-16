var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.value = value;
  tree.left = undefined;
  tree.right = undefined;

  return tree;
};

var binaryTreeMethods = {
  insert: function(value) {
    if (this.left === undefined && value < this.value) {
      this.left = BinarySearchTree(value);
      return 'first';
    } else if (this.right === undefined && value > this.value) {
      this.right = BinarySearchTree(value);
      return 'first';
    }

    if (this.left !== undefined && value < this.value) {
      this.left.insert(value);
      return 'second';
    }

    if (this.right !== undefined && value > this.value) {
      this.right.insert(value);
      return 'second';
    }


  },
  // accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  contains: function(value) {
    if (this.value === value) {
      return true;
    }

    if (this.left !== undefined && this.left.value === value) {
      return true;
    }

    if (this.right !== undefined && this.right.value === value) {
      return true;
    }

    if (this.left !== undefined && this.right !== undefined) {
      if (this.left.value < value) {
        this.right.contains(value);
      } else {
        this.left.contains(value);
      }
    }
    return false;
  },


  depthFirstLog: function(cb) {

  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
var tree = BinarySearchTree(5);
tree.insert(2);
tree.insert(3);
tree.insert(7);
console.log(tree.contains(8));