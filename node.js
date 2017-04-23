function Node(value) {
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}

// Connect one or more neighbors
Node.prototype.connect = function(neighbor) {
  // This is a fancy way of having a function
  // that can accept a variable number of arguments
  for (var i = 0; i < arguments.length; i++) {
    this.edges.push(arguments[i]);
    // Connect both ways
    arguments[i].edges.push(this);
  }
}
