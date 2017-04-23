var data;
var graph;

function preload(){
  data = loadJSON('bacon.json');
}

function setup() {
  graph = new Graph();
  noCanvas();

  var movies = data.movies;

  for(var i = 0; i < movies.length; i++) {
    // console.log("movies[i]", movies[i].cast);
    var movie = movies[i].title;
    var cast = movies[i].cast;
    var movieNode = new Node(movie);
    graph.addNode(movieNode);

    for(var j = 0; j < cast.length; j++) {
      var actor = cast[j];
      // console.log("actor:", actor);
      var actorNode = graph.getNode(actor);

      if(actorNode == undefined) {
        actorNode = new Node(actor);
      }
      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
      actorNode.addEdge(movieNode);
    }
  }
  console.log(graph);
}
