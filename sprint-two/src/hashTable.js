

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage[index] === undefined ) {
    this._storage[index] = [];
  }
  for (var i = 0; i < this._storage[index].length; i++ ) {
    var tuple = this._storage[index][i];
    var key = tuple[0];
    if ( key === k ) {
      tuple[1] = v;
      return;
    }
  }
  this._storage[index].push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  console.log(bucket);
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


