import {createSquareMatrix, getSurrounding} from './util/graph_util.js';

class Graph {
    constructor() {
        this.numVertices = 0;
        this.edges = new Map();
    }

    addVertex(v) {
        // Add a vertex v to the graph
        this.edges.set(v, []);
        this.numVertices += 1;
    }

    addEdge(v1, v2) {
        // Add edge from vertex v1 to vertex v2
        if (!this.edges.get(v1).includes(v2)) this.edges.get(v1).push(v2);

        // Add edge from vertex v2 to vertex v1
        if (!this.edges.get(v2).includes(v1)) this.edges.get(v2).push(v1);
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

    // Create square matrix
    const squareMatrix = createSquareMatrix(vertices);

    // Add vertices
    vertices.forEach(vertex => {
        g.addVertex(vertex);
    });

    // Add edges
    for (let i = 0; i < squareMatrix.length; i++) {
        for (let j = 0; j < squareMatrix[0].length; j++) {
            // Get the list of connected vertices
            let connectedVertices = getSurrounding(squareMatrix, i, j);
            // Add each vertex as an edge
            connectedVertices.forEach((v) => g.addEdge(squareMatrix[i][j], v));
        }
    }
};

export default Graph;