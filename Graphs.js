/*  WHAT ARE GRAPHS
    A graph data structure consists of 
    a finite (and possibly mutable) set of vertices 
    or nodes or points, together with a set of 
    unordered pairs of these vertices for an 
    undirected graph.
    or a set of ordered pairs for a directed graph.


USES FOR GRAPHS
1.  Social Networks
2.  Location / Mapping
3.  Routing Algorithms
4.  Visual Hierarchy
5.  File System Optimizations
6.  EVERYWHERE!

ESSENTIAL GRAPH TERMS
1.  Vertex - a node
2.  Edge - connection between nodes
3.  Weighted/Unweighted - values assigned to distances between vertices
4.  Directed/Undirected - directions assigned to distanced between vertices


Adjacency
List
Takes up more space (in sparse graphs)
Slower to iterate over all edges
Faster to lookup specific edge
Can take up less space (in sparse graphs)
Faster to iterate over all edges
Can be slower to lookup specific edge

*/






// OUR GRAPH CLASS
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
}




