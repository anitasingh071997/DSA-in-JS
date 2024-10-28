/* Write a basic JavaScript function to update the shortest path and distance
 if a shorter path is found during the algorithm.*/

 function updateShortestPath(currentNode, neighbor, graph, distances, previous) {
    const newDist = distances[currentNode] + neighbor.weight;
    if (newDist < distances[neighbor.node]) {
        distances[neighbor.node] = newDist;
        previous[neighbor.node] = currentNode;
    }
}