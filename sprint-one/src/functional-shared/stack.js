var Stack = function() {


  var stack = {
    storage: {},
    _size: 0
  };

  extend(stack, stackMethods);
  return stack;
};


var stackMethods = {
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

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var LOOKATTHIS = function() {
  var myStack = Stack();
  for (var i = 0; i < 999999; i++) {
    myStack[i] = Stack();
  }
};

LOOKATTHIS();