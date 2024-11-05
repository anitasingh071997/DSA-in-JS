/* Graphs - DFS Exercise
Implement the following method on the Graph class:
depthFirstSearch - this function should return an array of nodes visited 
using DFS. You can do this iteratively (using a stack) or recursively, 
but note the order of the results will be different. 
The test cases should accommodate this.

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
 
graph.depthFirstSearch('S');
 
/**
 * results:
 *
 * ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
 * ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
 *
 **/

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
    
    
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    
    // Recursive DFS
    depthFirstSearchRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        
        function dfs (vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    dfs (neighbor);
                }
            });
        }
        
        dfs (start);
        return result;
    }
    
    // Iterative DFS
    depthFirstSearchIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    const adjacencyList = this.adjacencyList;

    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
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

console.log(graph.depthFirstSearchRecursive('S')); 
console.log(graph.depthFirstSearchIterative('S')); 