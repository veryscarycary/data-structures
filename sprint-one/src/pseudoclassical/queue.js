var Queue = function() {

  this.storage = {};
  this._size = 0;

};


Queue.prototype.enqueue = function(val) {
  this.storage[this._size] = val;
  this._size++;
};

Queue.prototype.dequeue = function() {
  if (this._size - 1 >= 0) {
    var temp = this.storage[0];
    for (var i = 0; i < this._size; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this._size--;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this._size;
};


