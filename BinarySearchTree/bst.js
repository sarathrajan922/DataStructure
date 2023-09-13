class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null
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
        if(newNode.data < root.data){
            if(!root.left){
                root.left = newNode;
                return
            }else{
                this.insertHelper(root.left,newNode);
            }
        }else{
            if(!root.right){
                root.right = newNode;
                return
            }else{
                this.insertHelper(root.right,newNode);
            }
        }
    }

    inOrder(root= this.root){
        if(root){
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    postOrder(root= this.root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }

    perOrder(root = this.root){
        if(root){
            console.log(root.data);
            this.perOrder(root.left);
            this.perOrder(root.right)
        }
    }

    levelOrder(){
        let queue = [];
        queue.push(this.root);
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

    min(root=this.root){
        if(!root.left){
            return root.data
        }else{
          return this.min(root.left)
        }
    }

    max(root=this.root){
        if(!root.right){
            return root.data
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
      
        this.deleteHelper(this.root,value);
    }

    deleteHelper(root,value){
        if(!root){
            return null
        }
        if(value < root.data){
            root.left = this.deleteHelper(root.left,value);
        }else if(value > root.data){
            root.right = this.deleteHelper(root.right,value)
        }else{
            if(!root.left && !root.right) return null;
            if(!root.left) return root.right;
            if(!root.right) return root.left;

            root.data = this.min(root.right);
            root.right = this.deleteHelper(root.right,root.data)
        }


    }
}


const obj = new BST();

console.log(obj.isEmpty())
obj.insert(90)
obj.insert(50)
obj.insert(400)
console.log(obj.root.left.left)
console.log(obj.isEmpty())
obj.inOrder()
console.log(obj.isEmpty())
obj.perOrder()
console.log(obj.isEmpty())
obj.postOrder()
console.log(obj.isEmpty())

obj.levelOrder();

console.log(obj.min())
console.log(obj.max())