/*  ADDING AN EDGE
This function should accept two vertices,
we can call them vertex1 and vertex2.
The function should find in the adjacency list 
the key of vertex1 and push vertex2 to the array.
The function should find in the adjacency 
list the key of vertex2 and push vertex1 to the array.
Don't worry about handling errors/invalid vertices.
*/
{
    "Tokyo": [],
    "Dallas": [],
    "Aspen": []
  }

  g.addEdge("Tokyo", "Dallas")

  {
    "Tokyo": ["Dallas"],
    "Dallas": ["Tokyo"],
    "Aspen": []
  }

  g.addEdge("Dallas", "Aspen")

  {
    "Tokyo": ["Dallas"],
    "Dallas": ["Tokyo", "Aspen"],
    "Aspen": ["Dallas"]
  }

  

  class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");

