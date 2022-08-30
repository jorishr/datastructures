// to-do: weighted or not is property of the edges, not the graph
// which function belong to the vertex class?
// can I use an edge class here?
// use objects instead of arrays for vertices and edges?
// implement with linked list 
class Graph {
    constructor(directed = false, weighted = false){
        this.vertices    = [];
        this.isDirected  = directed;
        this.isWeighted  = weighted;
        if(this.isWeighted){
            this.defaultWeight = Infinity;
        } else this.defaultWeight = 0;
    }
    insertVertex(name){
        let vertex = new Vertex(name);
        this.vertices.push(vertex);
    }
    getVertexIndex(name){
        for(let i = 0; i < this.vertices.length; i++){
            if(name === this.vertices[i].name){
                return i;
            }
        }
        return null;
    }
    createClassicMatrix(){
        //create classic adjacency matrix with default values 0 or Infinity       
        this.edges = new Array(this.vertices.length);
        for(let i = 0; i < this.edges.length; i++){
            this.edges[i] = new Array(this.vertices.length);
            this.edges[i].fill(this.defaultWeight);
        }
        return this;
    }
    insertEdge(start, end, weight = 0){
        let indexStart = this.getVertexIndex(start);
        let indexEnd   = this.getVertexIndex(end);
        if(this.isDirected){
            this.edges[indexStart][indexEnd] = weight;
        } else {
            this.edges[indexStart][indexEnd] = weight;
            this.edges[indexEnd][indexStart] = weight;
        }
    }
    deleteEdge(start, end){
        let indexStart = this.getVertexIndex(start);
        let indexEnd   = this.getVertexIndex(end);
        if(this.isDirected){
            this.edges[indexStart][indexEnd] = this.defaultWeight;            
        } else {
            this.edges[indexStart][indexEnd] = this.defaultWeight;            
            this.edges[indexEnd][indexStart] = this.defaultWeight;
        }
    }
    getAdjacentVertices(name){
        let index  = this.getVertexIndex(name);
        let row    = this.edges[index];
        let result = [];
        for(let i = 0; i < row.length; i++){
            if(row[i] !== 0 && row[i] !== Infinity){
                result.push(this.vertices[i]);   
            }
        }
        return result;
    }
    isConnected(start, end){
        let indexStart = this.getVertexIndex(start);
        let indexEnd   = this.getVertexIndex(end);
        let edge = this.edges[indexStart][indexEnd];
        if(edge !== 0 && edge !== Infinity) return true
        return false;
    }
}

class Vertex {
    constructor(name){
        this.name = name;
    }
}

/**
 * EXAMPLE UNDIRECTED UNWEIGTHED GRAPH
 * 
 *          A-------E
 *         / \      |  
 *        /   \     |
 *       B-----C----D
 *                
 */         
console.log('***************************');
console.log('UNWEIGHTED UNDIRECTED GRAPH');
console.log('***************************');
const myGraph = new Graph(false, false);
myGraph.insertVertex('A');
myGraph.insertVertex('B');
myGraph.insertVertex('C');
myGraph.insertVertex('D');
myGraph.insertVertex('E');
myGraph.createClassicMatrix();
myGraph.insertEdge('A', 'B');
myGraph.insertEdge('A', 'C');
myGraph.insertEdge('A', 'E');
myGraph.insertEdge('B', 'C');
myGraph.insertEdge('C', 'D');
myGraph.insertEdge('D', 'E');
myGraph.insertEdge('A', 'A');
myGraph.deleteEdge('A', 'A');
console.log(myGraph);
console.log('Adjecent nodes for A:', myGraph.getAdjacentVertices('A'));
console.log('A and D connected?', myGraph.isConnected('A', 'D'));
console.log('A and B connected?', myGraph.isConnected('A', 'B'));

/**
 * EXAMPLE UNDIRECTED WEIGTHED GRAPH
 *              40
 *          A-------E
 *       60/ \      |20
 *        /   \70   |
 *       B-----C----D
 *          30   50
 */         
console.log('\n\n');
console.log('*************************');
console.log('WEIGHTED UNDIRECTED GRAPH');
console.log('*************************');
const weightedGraph = new Graph(false, true);
weightedGraph.insertVertex('A');
weightedGraph.insertVertex('B');
weightedGraph.insertVertex('C');
weightedGraph.insertVertex('D');
weightedGraph.insertVertex('E');
weightedGraph.createClassicMatrix();
weightedGraph.insertEdge('A', 'B', 60);
weightedGraph.insertEdge('A', 'C', 70);
weightedGraph.insertEdge('A', 'E', 40);
weightedGraph.insertEdge('B', 'C', 30);
weightedGraph.insertEdge('C', 'D', 50);
weightedGraph.insertEdge('D', 'E', 20);
weightedGraph.insertEdge('A', 'A', 0);
weightedGraph.deleteEdge('A', 'A');
console.log(weightedGraph);
console.log('Adjecent nodes for A:', weightedGraph.getAdjacentVertices('A'));
console.log('Adjecent nodes for E:', weightedGraph.getAdjacentVertices('E'));
console.log('Are A and D connected?', weightedGraph.isConnected('A', 'D'));
console.log('Are A and B connected?', weightedGraph.isConnected('A', 'B'));
console.log('Are E and C connected?', weightedGraph.isConnected('E', 'C'));
/**
 * EXAMPLE DIRECTED WEIGTHED GRAPH
 *              40
 *          A------>E
 *          ^       ^
 *       60/ \      |20
 *        /   \70   |
 *       B---->C<---D
 *          30   50
 */   
console.log('\n\n');
console.log('***********************');
console.log('WEIGHTED DIRECTED GRAPH');
console.log('***********************');
const directedGraph = new Graph(true, true);
directedGraph.insertVertex('A');
directedGraph.insertVertex('B');
directedGraph.insertVertex('C');
directedGraph.insertVertex('D');
directedGraph.insertVertex('E');
directedGraph.createClassicMatrix();
directedGraph.insertEdge('B', 'A', 60);
directedGraph.insertEdge('C', 'A', 70);
directedGraph.insertEdge('A', 'E', 40);
directedGraph.insertEdge('B', 'C', 30);
directedGraph.insertEdge('D', 'E', 20);
directedGraph.insertEdge('D', 'C', 50);
console.log(directedGraph);
console.log('Adjecent nodes for A:', directedGraph.getAdjacentVertices('A'));
console.log('Adjecent nodes for E:', directedGraph.getAdjacentVertices('E'));
console.log('Adjecent nodes for B:', directedGraph.getAdjacentVertices('B'));
console.log('Path from A to D?', directedGraph.isConnected('A', 'D'));
console.log('Path from A to B?', directedGraph.isConnected('A', 'B'));
console.log('Path from E to C?', directedGraph.isConnected('E', 'C'));
console.log('Path from D to C?', directedGraph.isConnected('D', 'C'));
console.log('Path from C to A?', directedGraph.isConnected('C', 'A'));