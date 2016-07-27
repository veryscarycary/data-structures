var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.storage = {};
  instance._size = 0;

  extend(instance, queueMethods);

  return instance;
};

var extend = function(obj, obj2) {
  for (var prop in obj2) {
    obj[prop] = obj2[prop];
  }
  return obj;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this._size] = val;
    this._size++;
  },
  dequeue: function() {
    if (this._size - 1 >= 0) {
      var temp = this.storage[0];
      for (var i = 0; i < this._size; i++) {
        this.storage[i] = this.storage[i + 1];
      }
      this._size--;
      return temp;
    }
  },
  size: function() {
    return this._size;
  }
};


