/*  REMOVING AN EDGE
This function should accept two vertices, we'll 
call them vertex1 and vertex2
The function should reassign the key of vertex1 
to be an array that does not contain vertex2
The function should reassign the key of vertex2
to be an array that does not contain vertex1
Don't worry about handling errors/invalid vertices 
*/

{
    "Tokyo": ["Dallas"],
    "Dallas": ["Tokyo", "Aspen"],
    "Aspen": ["Dallas"]
  }

  g.removeEdge("Tokyo", "Dallas")

  {
    "Tokyo": [],
    "Dallas": ["Aspen"],
    "Aspen": ["Dallas"]
  }

//   Solution 
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
