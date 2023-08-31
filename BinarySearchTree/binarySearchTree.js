class Node {
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
            return
        }

        this.insertHelper(this.root,newNode);
    }

    insertHelper(root,newNode){
        if(root.data > newNode.data){
            if(!root.left){
                root.left = newNode
                return
            }else{
                this.insertHelper(root.left,newNode)
            }
        }else{
           if(!root.right){
            root.right = newNode
            return
           }else{
            this.insertHelper(root.right,newNode)
           }
        }
    }
}


const BST = new BinaryTree()

console.log('BST is Empty? '+ BST.isEmpty())
BST.insert(10)
BST.insert(20)
BST.insert(2)

console.log(BST)