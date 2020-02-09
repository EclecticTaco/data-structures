

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._storage.storage.length = 8;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, v]);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);
  for (var i = 0; i < array.length; i++) {
    if (array[i][0] === k) {
      return array[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


