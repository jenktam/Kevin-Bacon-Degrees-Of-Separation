/*
Can't run repo on local server.

Node.js Solution:
1) npm install http-server -g
2) http-server

http://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local

*/

function Graph(){
  this.nodes = [];
  this.graph = {};
}

Graph.prototype.addNode = function(n) {
  // Node into array
  this.nodes.push(n);
  var title = n.value;
  // Node into hash
  this.graph[title] = n;
}

Graph.prototype.getNode = function(actor) {
  var n = this.graph[actor];
  return n;
}
