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

    levelOrder(){
       let queue = []
       queue.push(this.root)
       while(queue.length){
        let curr = queue.shift();
        console.log(curr.data);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
       }
    }


    min(root){
        if(!root.left){
            return root.data
        }else{
          return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.data
        }else{
            return this.max(root.right)
        }
    }



    delete(value){
        this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root) return null
        if(value < root.data){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.right){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right) return null
            if(!root.left ) return root.right
            if(!root.right) return root.left
            
            root.data = this.min(root.right)
            root.right = this.deleteNode(root.right,root.data)
        }
        return root
    }

  


}


const BST = new BinaryTree()

console.log('BST is Empty? '+ BST.isEmpty())
BST.insert(10)
BST.insert(20)
BST.insert(2)
BST.insert(49)
BST.insert(9)
BST.insert(12)
BST.insert(88)
BST.insert(8)
BST.insert(1)
BST.insert(-2)
BST.insert(-5)
console.log(BST)

console.log('BST is Empty? '+ BST.isEmpty())

console.log(BST.search(BST.root,10))


BST.postOrder(BST.root)
console.log(`min value of the tree  `+ BST.min(BST.root))
console.log(`max value of the tree  `+ BST.max(BST.root))
BST.delete(1)
BST.postOrder(BST.root)

console.log("--BFS--")

BST.levelOrder()