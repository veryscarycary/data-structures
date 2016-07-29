var DoublyLinkedList = function() {
  var list = {};
  list.head = null; // linkedlist.head
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if ( list.head === null ) {
      list.head = node;
      list.tail = list.head;
    } else {
      node.previous = list.tail;
      list.tail.next = node;
      list.tail = list.tail.next;
    }
  };

  list.removeTail = function() {
    var tempVal = list.tail.value;
    list.tail = list.tail.previous;
    return tempVal;
  };

  list.addToHead = function(value) {
    var node = Node(value);
    if ( list.tail === null ) {
      list.tail = node;
      list.head = list.tail;
    } else {
      node.next = list.head;
      list.head.previous = node;
      list.head = list.head.previous;
    }
  };

  list.removeHead = function() {
    var tempVal = list.head.value;
    list.head = list.head.next;
    return tempVal;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while ( currentNode.next !== null ) {
      if ( currentNode.value === target ) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (currentNode.value === target) {
      return true;
    } else {
      return false;
    }
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
