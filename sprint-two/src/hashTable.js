

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._storage.storage.length = 8;
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  var storageArr = this._storage.get(index);
  var addTuples = function (element, idx, storage) {
    // use index to access a bucket in storage
    debugger;
    storage[index].push([k, v]); // unwanted behavior; pushes tuple into 3 times instead of just once,
    //  each iterates through storage.length, why 3?
    // push tuple into storage[index]
  };
  // limitedArray.each = function(callback) {
  //   for (var i = 0; i < storage.length; i++) {
  //     callback(storage[i], i, storage);
  //   }
  // };
  if (storageArr === undefined) {
    this._storage.set(index, []);
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

// ASK QUESTION!! Scoping when defining call back outside of scope, can't access index. Put inside annon func??
// var addTuples = function (element, idx, storage) {
//   // use index to access a bucket in storage
//   storage[index].push([k, v]);
//   // push tuple into storage[index]
// };


/*
 * Complexity: What is the time complexity of the above functions?
 */
