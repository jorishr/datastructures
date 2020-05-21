class Graph {
    constructor(directed = false, weighted = false){
        this.isDirected  = directed;
        this.isWeighted  = weighted;
        this.vertices    = [];
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
            this.isWeighted ? this.edges[i].fill(Infinity) : this.edges[i].fill(0);
        }
        return this;
    }
    insertEdge(start, end, weight = 1){
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
            this.edges[indexStart][indexEnd] = 0;            
        } else {
            this.edges[indexStart][indexEnd] = 0;            
            this.edges[indexEnd][indexStart] = 0;
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
console.log(myGraph);
myGraph.deleteEdge('A', 'A');
console.log(myGraph);
console.log(myGraph.getAdjacentVertices('A'));
console.log(myGraph.isConnected('A', 'D'));
console.log(myGraph.isConnected('A', 'B'));

/**
 * EXAMPLE UNDIRECTED WEIGTHED GRAPH
 *              40
 *          A-------E
 *       60/ \      |14
 *        /   \70   |
 *       B-----C----D
 *          30   11
 */         