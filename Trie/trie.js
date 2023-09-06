class Node{
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let i=0; i<word.length; i++){
            let char = word[i]
            if(!curr.children.has(char)){
                curr.children.set(char,new Node)
            }
            curr = curr.children.get(char)
        }
        curr.isEnd = true
    }


    search(word){
        let curr = this.root
        for(let i = 0; i< word.length ; i++){
            let char = word[i]
            if(!curr.children.has(char)){
                return false
            }
            curr = curr.children.get(char)
        }
        return curr.isEnd
    }



    print(node =this.root,word = ''){
        if(node.isEnd){
            console.log(word)
        }

        for(let [char,child] of node.children){
            this.print(child,word+char)
        }
    }
}


const T = new Trie();
T.insert("sarath");
T.insert("saranya")
T.insert('sreedevi')
T.insert('rajan')

T.print()

console.log(T.search("rajan"))

