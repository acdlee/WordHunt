/**
 * Given an array of letters that can form a square matrix, a square matrix
 * is constructed and returned. 
 * Throws an Error and exits the program if a square matrix cannot be constructed.
 * @param {*} vertices  - An array of letters
 * @returns a square matrix
 */
export const createSquareMatrix = (vertices) => {
    let matrix = [], N;
    try {
        N = Math.sqrt(vertices.length);
        // Throw error if input 'vertices' cannot convert to a square matrix
        if (N % 1) throw new Error("Input 'vertices' cannot be converted to a square matrix.");
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
    
    let count = 0;
    for (let i = 0; i < N; i++) {
        matrix.push([]);
        for (let j = 0; j < N; j++) {
            matrix[i].push(vertices[count++]);
        }
    }

    return matrix;
}

/**
 * Given a matrix and an element at index [row, col] the function returns
 * the surrounding 8 elements, if in bounds. 
 * @param {*} matrix 
 * @param {*} row 
 * @param {*} col
 * @return {Arrray} - Array of letters
 */
export function getSurrounding(matrix, row, col) {
    const N = matrix.length, M = matrix[0].length;
    let rValue = []

    // Top left
    if (row - 1 >= 0 && col - 1 >= 0) rValue.push(matrix[row - 1][col - 1]);

    // Top Middle
    if (row - 1 >= 0) rValue.push(matrix[row - 1][col]);
    // Top Right
    if (row - 1 >= 0 && col + 1 < M) rValue.push(matrix[row - 1][col + 1]);
    // Left
    if (col - 1 >= 0) rValue.push(matrix[row][col - 1]);
    // Right
    if (col + 1 < M) rValue.push(matrix[row][col + 1]);
    // Bottom Left
    if (row + 1 < N && col - 1 >= 0) rValue.push(matrix[row + 1][col - 1]);
    // Bottom Middle
    if (row + 1 < N) rValue.push(matrix[row + 1][col]);
    // Bottom Right
    if (row + 1 < N && col + 1 < M) rValue.push(matrix[row + 1][col + 1]);

    return rValue;
}