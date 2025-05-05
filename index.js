import Graph from "./graph/graph.js";

const g = new Graph();
let arr = "ABCDEFGHIJKLMNOP".split("");
g.initializeGraph(arr);

console.log(g.numVertices);
console.log(g.edges.get('F'));