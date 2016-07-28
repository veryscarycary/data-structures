var Stack = function() {
  var stack = Object.create(stackMethods);
  return stack;
};


var stackMethods = {
  storage: {},
  _size: 0,
  push: function(value) {
    this.storage[this._size] = value;
    this._size++;
  },

  pop: function() {
    var temp;
    if ( this._size - 1 >= 0 ) {
      this._size--;
      temp = this.storage[this._size];
      delete this.storage[this._size];
      return temp;
    }
  },

  size: function() {
    return this._size;
  }
};