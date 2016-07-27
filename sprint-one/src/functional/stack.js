var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    if ( value ) {
      storage[size] = value;
    }
    size++;
  };

  someInstance.pop = function() {
    var temp;
    if ( size - 1 >= 0) {
      size--;
      temp = storage[size];
      storage[size] = undefined;
      return temp;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
