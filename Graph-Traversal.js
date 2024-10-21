/* GRAPH TRAVERSAL USES
@ Peer to peer networking
@ Web crawlers
@ Finding "closest" matches/recommendations
@ Shortest path problems
    # GPS Navigation
    # Solving mazes
    # AI (shortest path to win the game)

    DEPTH FIRST
Explore as far as possible down one 
branch before "backtracking"
*/

{
"A":["B", "C"],
"B":["A", "D"],
"C":["A", "E"],
"D":["B", "E", "F"],
"E":["C", "D", "F"],
"F":["D", "E"]
}

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

