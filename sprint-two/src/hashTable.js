

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage;
  var bucket;
  var skipNewBucketStorage = false;

  // Create a tuple
  var tuple = LimitedArray();
  tuple.set(0, k);
  tuple.set(1, v);

  if ( storage.get(index) !== undefined ) {
    bucket = storage.get(index);

    var bucketLength = 0;
    bucket.each(function(tuple, i, bucket) {
      bucketLength++;
    });
    
    if ( bucketLength > 0 ) { // bucket already has some stuff in it

      // This finds the tuple if it exists already
      // and replaces the existing value for the key
      // with a new value
      bucket.each(function(tuple, i, bucket) {
        var key = tuple.get(0);
        if ( key === k ) {
          tuple.set(1, v);
          skipNewBucketStorage = true;
        }
      });
      if (!skipNewBucketStorage) {
        // Insert new tuple in empty bucket
        bucket.set(bucketLength, tuple);
      }
    }
  } else if ( storage.get(index) === undefined ) {
    // If the bucket for the given index does not exist,
    // initialize it
    bucket = LimitedArray();
    storage.set(index, bucket);
    bucket.set(0, tuple);
    console.log("This:");
    console.log(this);
    console.log("This._storage.get(index):");
    console.log(this._storage.get(index));
    console.log("This._storage.get(index).get(0):");
    console.log(this._storage.get(index).get(0));
    console.log("This._storage.get(index).get(0).get(0):");
    console.log(this._storage.get(index).get(0).get(0));
    console.log("This._storage.get(index).get(0).get(1):");
    console.log(this._storage.get(index).get(0).get(1));
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage;
  var bucket = storage.get(index);
  var res;
  // debugger;
  bucket.each(function(tuple, i, bucket) {
    var key = tuple.get(0);
    var val = tuple.get(1);
    if ( key === k ) {
      res = val;
    }
  });
  return res;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  bucket.each(function(tuple, i, bucket) {
    var key = tuple.get(0);
    if (key === k) {
      Array.prototype.splice.call(bucket, i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


