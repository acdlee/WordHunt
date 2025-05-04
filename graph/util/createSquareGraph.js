const createSquareGraph = (vertices) => {
    let g = new Map();
    let matrix = [], N;
    try {
        N = Math.sqrt(vertices.length);
        // Throw error if input 'vertices' cannot convert to a square matrix
        if (N % 1) throw new Error("Input 'vertices' cannot be converted to a square matrix.");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
    
    // Add vertices
    vertices.forEach(vertex => {
        g.addVertex(vertex);
    });
    
    let count = 0;
    for (let i = 0; i < N; i++) {
        matrix.push([]);
        for (let j = 0; j < N; j++) {
            matrix[i].push(vertices[count++]);
        }
    }

    console.log(matrix);
}

let x = "ABCDEFGHI";
x = x.split("");
createSquareGraph(x);