var LinkedList = function() {
  var list = {};
  list.head = null; // linkedlist.head
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if ( list.head === null ) {
      list.head = node;
      list.tail = list.head;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next;
    }

    // } else if ( list.head.next === list.head && list.tail !== list.head ) {

    // if ( list.tail !== null ) { // if list.tail exists...
    //   list.tail.next = node;  // point it at the next tail to be added
    // }

    // list.tail = node;
    console.log('THIS IS THE ADDTOTAIL FUNCTION');
    console.log('node: ' + node);
    console.log('node.value: ' + node.value);
    console.log('node.next: ' + node.next);
    console.log('')
  };

  list.removeHead = function() {
    var tempVal = list.head.value;
    list.head = list.head.next;
    return tempVal;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while ( currentNode.next !== null ) {
    debugger;
      console.log('THIS IS THE CONTAINS FUNCTION');
      console.log('target: ' + target);
      console.log('node: ' + currentNode);
      console.log('node.value: ' + currentNode.value);
      console.log('node.next: ' + currentNode.next);
      console.log('node.next.value: ' + currentNode.next.value);
      if ( currentNode.value === target ) {
        console.log('RETURNING TRUE!!!')
        console.log('')
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    console.log('RETURNING FALSE!!!')
    console.log('')
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
