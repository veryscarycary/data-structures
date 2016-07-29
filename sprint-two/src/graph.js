

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {
    value: node,
    edge: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node) === true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var toEdges = this[node].edge; // array of nodes that have edges to this 'node'
  for ( var i = 0; i < toEdges.length; i++ ) {
    var toEdge = toEdges[i];
    this.removeEdge( node, toEdge );
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if ( this[fromNode].edge.indexOf(toNode) > -1 ) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edge.push(toNode); // {} with property edge: []
  this[toNode].edge.push(fromNode); // {} with property edge: []
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index1 = this[fromNode].edge.indexOf(toNode);
  this[fromNode].edge.splice(index1, 1);

  var index2 = this[toNode].edge.indexOf(fromNode);
  this[toNode].edge.splice(index2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // var nodes = [];
  for ( var node in this ) {
    if ( this.hasOwnProperty(node) ) {
      cb(node);
    }
  }
  // return _.map(this, function(node) {
  //   return cb(node);
  // });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


