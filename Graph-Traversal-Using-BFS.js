/* Find the Shortest Path in an Unweighted Graph (Using BFS)
Write a function shortestPath(graph, start, target) that finds the shortest path between two 
vertices in an unweighted graph using BFS traversal. Return an array representing the shortest path.

*/ 

function shortestPath(graph, start, target) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start);
  
    while (queue.length) {
      const path = queue.shift();
      const vertex = path[path.length - 1];
  
      if (vertex === target) return path;
  
      graph[vertex].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      });
    }
  
    return null; // No path found
  }
  
  const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: []
  };
  
  console.log(shortestPath(graph, 'A', 'F')); // Output: ['A', 'B', 'D', 'F']
  