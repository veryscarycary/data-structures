describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('');
  it('Begin the new Doubly Linked List tests below');

  it('should have methods named "addToHead", "removeTail"', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should have a new "previous" property pointing to the node behind it or null', function() {
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head).to.have.property('previous');
  });

  it('should take a value and add to front of list when addToHead is called', function() {
    doublyLinkedList.addToHead(7);
    doublyLinkedList.addToHead(8);
    expect(doublyLinkedList.head.value).to.equal(8);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(7);
  });

  it('should remove the last node from the list and return its value when removeTail is called', function() {
    doublyLinkedList.addToTail(9);
    doublyLinkedList.addToTail(10);
    expect(doublyLinkedList.tail.value).to.equal(10);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(9);
  });

});
