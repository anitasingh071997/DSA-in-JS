/* Graphs Exercise - addEdge
Implement the following methods on the Graph class - addVertex has been implemented for you
addEdge - this function should add an edge between two nodes in the graph and place each value of the nodes 
in each array for the value of the node in the adjacency list.

var graph = new Graph();
 
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
 
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
 
graph.adjacencyList['A']; // contains both ('B', 'C')
graph.adjacencyList['B']; // contains both ('A', 'D')
graph.adjacencyList['C']; // contains both ('A', 'D')
graph.adjacencyList['D']; // contains both ('C', 'B')

*/

class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
        }
    }
    
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
}

// Example Usage

var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log(graph.adjacencyList['A']);
console.log(graph.adjacencyList['B']); 
console.log(graph.adjacencyList['C']); 
console.log(graph.adjacencyList['D']); 