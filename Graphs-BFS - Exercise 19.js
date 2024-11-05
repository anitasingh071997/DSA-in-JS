/* Graphs - BFS Exercise
Implement the following methods on the Graph class:
breadthFirstSearch - this function should return an array of vertices visited 
using BFS.

var graph = new Graph();
 
graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');
 
graph.addEdge('S','P');
graph.addEdge('S','U');
 
graph.addEdge('P','X');
graph.addEdge('U','X');
 
graph.addEdge('P','Q');
graph.addEdge('U','V');
 
graph.addEdge('X','Q');
graph.addEdge('X','Y');
graph.addEdge('X','V');
 
graph.addEdge('Q','R');
graph.addEdge('Y','R');
 
graph.addEdge('Y','W');
graph.addEdge('V','W');
 
graph.addEdge('R','T');
graph.addEdge('W','T');
 
graph.breadthFirstSearch('S'); // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]

*/

class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (this.adjacencyList[vertex]) {
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
        if (this.adjacencyList[vertex1]) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        }
        if (this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
        }
    }
    breadthFirstSearch(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        
        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);
            
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        
        return result;
    }
}

// Example usage 

var graph = new Graph();

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

graph.addEdge('S', 'P');
graph.addEdge('S', 'U');
graph.addEdge('P', 'X');
graph.addEdge('U', 'X');
graph.addEdge('P', 'Q');
graph.addEdge('U', 'V');
graph.addEdge('X', 'Q');
graph.addEdge('X', 'Y');
graph.addEdge('X', 'V');
graph.addEdge('Q', 'R');
graph.addEdge('Y', 'R');
graph.addEdge('Y', 'W');
graph.addEdge('V', 'W');
graph.addEdge('R', 'T');
graph.addEdge('W', 'T');

console.log(graph.breadthFirstSearch('S')); 
