/* Graphs - Dijkstra Exercise
Create a constructor function for a WeightedGraph. 
It should inherit from the Graph constructor and have all the same methods 
except for adding an edge. Since weights will now be added with edges, the adjacency list 
should not only store the nodes which are connected to it but also the corresponding weight of the edge.

A PriorityQueue has been implemented for you. The PriorityQueue adds the LOWEST priority first 
(this is helpful for Dijkstra).

Implement the following method on the WeightedGraph.prototype

Dijkstra - this function should return an array with two values,
the first being the total distance and the second an array of nodes 
which create the shortest path.

var g = new WeightedGraph()
 
g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');
 
g.addEdge('A', 'Z', 7)
g.addEdge('A', 'C', 8)
 
g.addEdge('Z', 'Q', 2)
 
g.addEdge('C', 'G', 4)
 
g.addEdge('D', 'Q', 8)
 
g.addEdge('E', 'H', 1)
 
g.addEdge('H', 'Q', 3)
 
g.addEdge('Q', 'C', 6)
 
g.addEdge('G', 'Q', 9)
 
g.Dijkstra('A','E') // ["A", "Z", "Q", "H", "E"]
g.Dijkstra('A','Q') // ["A", "Z", "Q"]
g.Dijkstra('A','G') // ["A", "C", "G"]
g.Dijkstra('A','D') // ["A", "Z", "Q", "D"]

*/ 

class WeightedGraph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  
    addEdge(vertex1, vertex2, weight) {
      if (this.adjacencyList[vertex1]) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
      }
      if (this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
      }
    }
  
    Dijkstra(start, end) {
      const distances = {};
      const priorityQueue = new PriorityQueue();
      const previous = {};
      const path = []; // to return the shortest path
      let smallest;
  
      // Initialize distances and priority queue
      for (let vertex in this.adjacencyList) {
        if (vertex === start) {
          distances[vertex] = 0;
          priorityQueue.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
          priorityQueue.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
      }
  
      // While there are vertices to process
      while (priorityQueue.values.length) {
        smallest = priorityQueue.dequeue().val;
  
        if (smallest === end) {
          // Construct the shortest path
          while (previous[smallest]) {
            path.push(smallest);
            smallest = previous[smallest];
          }
          path.push(start);
          path.reverse();
          return [distances[end], path];
        }
  
        if (smallest || distances[smallest] !== Infinity) {
          for (let neighbor of this.adjacencyList[smallest]) {
            let nextNode = neighbor.node;
            let candidate = distances[smallest] + neighbor.weight;
            if (candidate < distances[nextNode]) {
              distances[nextNode] = candidate;
              previous[nextNode] = smallest;
              priorityQueue.enqueue(nextNode, candidate);
            }
          }
        }
      }
      return null;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    enqueue(val, priority) {
      this.values.push({ val, priority });
      this.sort();
    }
  
    dequeue() {
      return this.values.shift();
    }
  
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    }
  }
  
  // Example usage:
  var g = new WeightedGraph();
  
  g.addVertex('A');
  g.addVertex('Z');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addVertex('H');
  g.addVertex('Q');
  g.addVertex('G');
  
  g.addEdge('A', 'Z', 7);
  g.addEdge('A', 'C', 8);
  g.addEdge('Z', 'Q', 2);
  g.addEdge('C', 'G', 4);
  g.addEdge('D', 'Q', 8);
  g.addEdge('E', 'H', 1);
  g.addEdge('H', 'Q', 3);
  g.addEdge('Q', 'C', 6);
  g.addEdge('G', 'Q', 9);
  
  console.log(g.Dijkstra('A', 'E')); 
  console.log(g.Dijkstra('A', 'Q')); 
  console.log(g.Dijkstra('A', 'G')); 
  console.log(g.Dijkstra('A', 'D')); 
  
// Error  