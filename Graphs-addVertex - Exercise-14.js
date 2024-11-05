/* Graphs Exercise - addVertex
Implement the following methods on the Graph class

addVertex- this function should add a node to the graph
and place a new key in the adjacency list with the 
value of an empty array.

var graph = new Graph;
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.adjacencyList['A']; // []
graph.adjacencyList['B']; // []
graph.adjacencyList['C']; // []

*/ 

class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
    //  Check if the vertex is already in the adjacency List
    if (!this.adjacencyList[vertex]) {
        // if not add the vertex with an empty array 
        this.adjacencyList[vertex] = [];
    }
    }
}

// Example usage

var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

console.log(graph.adjacencyList['A']); 
console.log(graph.adjacencyList['B']); 
console.log(graph.adjacencyList['C']); 
