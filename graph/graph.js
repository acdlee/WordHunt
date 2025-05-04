class Graph {
    constructor() {
        this.size = 0;
        this.edges = new Map();
    }

    addVertex(v) {
        // Add a vertex v to the graph
        this.edges.set(v, []);
    }

    addEdge(v1, v2) {
        // Add edge from vertex v1 to vertex v2
        this.edges.get(v1).push(v2);

        // Add edge from vertex v2 to vertex v1
        this.edges.get(v2).push(v1);
    }
}

Graph.prototype.initializeGraph = function(vertices) {
    const g = this;

    /*  Input array of (size 16) [...A-P] => 
        A B C D
        E F G H
        I J K L
        M N O P
    */
   // Create a 'square graph' (i.e. the graph can be conceptualized as
   // a square matrix) from input 'vertices'.
   const createSquareGraph = () => {
    try {
        let N = M = Math.sqrt(vertices.length);
        // Throw error if input 'vertices' cannot convert to a square matrix
        if (N % 1) throw new error("Input 'vertices' cannot be converted to a square matrix.");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        System.exit(1);
    }
    
    // Add vertices
    vertices.forEach(vertex => {
        g.addVertex(vertex);
    });
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            // Add edge v[i]
        }
    }
   }
};