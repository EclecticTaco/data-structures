

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._storage.storage.length = 8;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  debugger;
  var storageArr = this._storage.get(index);
  if (storageArr === undefined) {
    this._storage.set(index, []);
  }
  if (storageArr !== undefined) {
    debugger;
    this._storage.each(addTuples);
  }

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


addTuples = function (element, idx, storage) {
  // use index to access a bucket in storage
  storage[index].push([k, v]);
  // push tuple into storage[index]
};

// limitedArray.each = function(callback) {
//   for (var i = 0; i < storage.length; i++) {
//     callback(storage[i], i, storage);
//   }
// };
/*
 * Complexity: What is the time complexity of the above functions?
 */
