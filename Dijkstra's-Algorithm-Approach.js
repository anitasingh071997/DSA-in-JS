/* THE APPROACH
1.  Every time we look to visit a new node, we pick the
    node with the smallest known distance to visit first.
2.  Once we’ve moved to the node we’re going to 
    visit, we look at each of its neighbors
3.  For each neighboring node, we calculate the 
    distance by summing the total edges that lead to the node we’re checking from 
    the starting node.
4.  If the new total distance to a node is less
    than the previous total, we store the new 
    shorter distance for that node.

    */

    // Find the shortest path from A to E.
        // Visited
        [A,C,B,D]

        // Previous
        {
            A: null,
            B: A,
            C: A,
            D: C,
            E: F,
            F: D
        }
