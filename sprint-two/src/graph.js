

// Instantiate a new graph
var Graph = function() {
  this.graphs = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.storage = [];

  this.graphs.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.graphs.length; i += 1) {
    if (node === this.graphs[i].value) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var removeNode = undefined;
  for (var i = 0; i < this.graphs.length; i += 1) {
    if (this.graphs[i].value === node) {
      removeNode = this.graphs[i];
      this.graphs.splice(i, 1);
    }
  }
  for (var x = 0; x < this.graphs.length; x += 1) {
    for (var j = 0; j < this.graphs[x].storage.length; j += 1) {
      if (this.graphs[x].storage[j].value === node) {
        this.graphs[x].storage.splice(j, 1);
      }
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.graphs.length; i += 1) {
    if (this.graphs[i].value === fromNode) {
      for (var x = 0; x < this.graphs[i].storage.length; x += 1) {
        if (this.graphs[i].storage[x].value === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var from = undefined;
  var to = undefined;
  for (var i = 0; i < this.graphs.length; i++ ) {
    if (this.graphs[i].value === fromNode) {
      from = this.graphs[i];
    }
    if (this.graphs[i].value === toNode) {
      to = this.graphs[i];
    }
  }
  from.storage.push(to);
  to.storage.push(from);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var from = undefined;
  var to = undefined;
  for (var i = 0; i < this.graphs.length; i++) {
    if (this.graphs[i].value === fromNode) {
      from = this.graphs[i];
      for (var j = 0; j < from.storage.length; j++) {
        if (from.storage[j].value === toNode) {
          from.storage.splice(j, 1);
        }
      }
    }
    if (this.graphs[i].value === toNode) {
      to = this.graphs[i];
      for (var x = 0; x < to.storage.length; x++) {
        if (to.storage[x].value === fromNode) {
          to.storage.splice(x, 1);
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.graphs.length; i++) {
    var ele = this.graphs[i];

    cb(ele.value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

