var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(Tree(value));  // fix me
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
