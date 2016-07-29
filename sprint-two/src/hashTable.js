

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket;
  var storage = this._storage;

  // If the bucket for the given index does not exist,
  // initialize it
  if ( storage.get(index) === undefined ) {
    bucket = LimitedArray();
    storage.set(index, bucket);
  }

  // This finds the tuple if it exists already
  // and replaces the existing value for the key
  // with a new value
  storage.each(function(bucket, i, storage) {
    var tuple = bucket.get(i);
    var key = tuple[0];
    if ( key === k ) {
      tuple[1] = v;
      return;
    }
  });

  // Create a tuple
  var tuple = LimitedArray();
  tuple.set(0, k);
  tuple.set(1, v);

  // Create a bucket
  bucket = bucket || storage.get(index);
  var bucketLength = 0;
  bucket.each(function(tuple, i, bucket) {
    bucketLength++;
  });
  // Insert tuple in bucket
  bucket.set(bucketLength, tuple);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    var key = tuple[0];
    var val = tuple[1];
    if ( key === k ) {
      return val;
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    var key = tuple[0];
    if ( key === k ) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


