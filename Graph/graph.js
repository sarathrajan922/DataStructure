class Graph{
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set();
        }
    }

    addEdge(vertex1,vertex2,bi){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjList[vertex1].add(vertex2);
        if(bi){
            this.adjList[vertex2].add(vertex1)
        }
    }
}

const G = new Graph();

G.addVertex(20)
G.addVertex(30)
G.addVertex(49)
G.addVertex(89)

G.addEdge(20,30,false)
G.addEdge(30,49,true)
G.addEdge(89,20,true)

console.log(G.adjList)