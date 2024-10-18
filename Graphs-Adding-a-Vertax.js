/* ADDING A VERTEX
Write a method called addVertex, which
accepts a name of a vertex.

It should add a key to the adjacency list 
with the name of the vertex and set its
value to be an empty array.
*/

g.addVertex("Tokyo")
{
    "Tokyo"; []
}

class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}
