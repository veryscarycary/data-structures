var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);  // fix me
};

treeMethods.removeFromParent = function() {
  var parent = this.parent;
  var children = parent.children;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (this === child) {
      children.splice(i, 1);
      this.parent = null;
    }
  }
};

treeMethods.contains = function(target) {
  
  var search = function(arr, target) {
    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i].value === target ) {
        return true;
      } else if (arr[i].children.length > 0) {
        if ( search(arr[i].children, target) === true ) {
          return true;
        }
      }
    }
    return false;
  };

  return search(this.children, target);
};

treeMethods.traverse = function(cb) {
  cb(this);

  if (this.children.length) {
    this.children.forEach(function (child) {
      child.traverse(cb);
    });
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
