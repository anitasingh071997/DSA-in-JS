/* Graphs Exercise - removeEdge
Implement the following methods on the Graph class, 
addEdge and addVertex have been implemented for you.

removeEdge - this function should accept two nodes 
and remove the edge between them. It should modify the adjacency list to ensure 
that both values are not in each array for the two nodes which no longer contain the edge.

var graph = new Graph();
 
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
 
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
 
graph.removeEdge('B', 'A');
graph.removeEdge('C', 'D');
 
graph.adjacencyList['A']; //  // contains 'C'
graph.adjacencyList['B']; // contains 'D'
graph.adjacencyList['C']; // contains 'A'
graph.adjacencyList['D']; // contains 'B'

*/

class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2){
        if (this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                (v) => v !== vertex2
                );
        }
        
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                (v) => v !== vertex1
                );
        }
    }
}

// Example usage

var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

graph.removeEdge('B', 'A');
graph.removeEdge('C', 'D');

console.log(graph.adjacencyList['A']); 
console.log(graph.adjacencyList['B']); 
console.log(graph.adjacencyList['C']); 
console.log(graph.adjacencyList['D']); 

