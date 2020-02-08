var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var child = this;
  var inner = function(tree) {
    if (tree.value === target) {
      return true;
    }
    for (var i = 0; i < tree.children.length; i ++) {
      var call = inner(tree.children[i]);
      if (call === true) {
        return true;
      }
    }
    return false;
  };
  return inner(child);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
var tree = Tree(20);

tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
tree.contains(7);
tree.contains(8);