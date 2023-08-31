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
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode;
            return
        }
        this.insertHelper(this.root, newNode);
        return
    }

    insertHelper(root,newNode){
        if(root.data > newNode.data){
            if(!root.left){
                root.left = newNode;
                return
            }else{
                this.insertHelper(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right = newNode;
                return
            }else{
                this.insertHelper(root.right,newNode)
            }
        }
        
    } 


    search(root,value){
        if(!root)return false
        if(root.data === value){
            return true;
        }else if(value < root.data){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }


    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }
}


const BST = new BinaryTree()

console.log('BST is Empty? '+ BST.isEmpty())
BST.insert(10)
BST.insert(20)
BST.insert(2)

console.log(BST)

console.log('BST is Empty? '+ BST.isEmpty())

console.log(BST.search(BST.root,10))

// BST.preOrder(BST.root)
BST.postOrder(BST.root)