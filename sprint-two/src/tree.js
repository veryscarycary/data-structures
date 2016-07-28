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
    var midpoint = Math.floor((endIndex + startIndex) / 2);
    debugger;
    if (array[midpoint].value === target) {
      return true;
    }

    if (array[midpoint].value > target) {
      // recurse left
      return binarySearch(array, target, startIndex, midpoint - 1);
    } else if (array[midpoint].value < target) {
      // recurse right
      return binarySearch(array, target, midpoint + 1, endIndex);
    }

    return false;
  };

  return binarySearch(this.children, target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
