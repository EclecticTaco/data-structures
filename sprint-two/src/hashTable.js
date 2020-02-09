

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._storage.storage.length = 8;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // retrieve bucket
  var bucket = this._storage.get(index);
  // create bucket if !bucket
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  //flag variable, hasKey?
  var hasKey;

  // iterate bucket
  for (var i = 0; i < bucket.length; i += 1) {
    var tuple = bucket[i];
    if (bucket[i][0] === k) {
      hasKey = true;
      bucket[i][1] = v;
      break;
    }
    hasKey = false;
  }
  // create var to reference tuple
  // check if key exists
  // if key, update value
  // break out of loop
  if (!hasKey) {
    bucket.push([k, v]);
  }
  // if !hasKey?
  // push tuple into bucket
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
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i += 1) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }

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
