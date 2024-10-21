/* Detect if a Graph is Connected Using BFS
Write a function isConnected(graph, start) that checks if all vertices in a graph can be reached
from a given starting vertex using BFS. Return true if the graph is connected, otherwise false.
*/
function isConnected(graph, start) {
    const queue = [start];
    const visited = {};
    visited[start] = true;
    let count = 1;
  
    while (queue.length) {
      let vertex = queue.shift();
      graph[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
          count++;
        }
      });
    }
  
    return count === Object.keys(graph).length;
  }
  
  const graph1 = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A'],
    D: ['B']
  };
  
  const graph2 = {
    A: ['B'],
    B: ['A'],
    C: []
  };
  
  console.log(isConnected(graph1, 'A')); // Output: true
  console.log(isConnected(graph2, 'A')); // Output: false
  