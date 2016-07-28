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
  var binarySearch = function(array, target, startIndex, endIndex) {
    var startIndex = startIndex || 0;
    var endIndex = endIndex || array.length - 1;
    var midpoint = Math.floor((endIndex+ startIndex)/2);
    if (array[midpoint] === target) {
      return midpoint;
    }
    if (array[midpoint] > target) {
      // recurse left
    } else {
      // recurse right
    }
  };

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
