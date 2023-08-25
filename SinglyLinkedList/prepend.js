class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
             node.next = this.head;
             this.head = node
        }

        this.size++;
    }

    append(value){
        const node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.size++;
        
    }
}

const list = new LinkedList()

list.prepend(30)
list.prepend(40)
list.append(10)
list.append(5)
console.log(list)