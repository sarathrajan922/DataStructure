class Node{
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }

    
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    prepend(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            this.size++
            return
        }
        let curr = this.head;
        curr.prev = newNode;
        newNode.next = curr;
        this.head = newNode;
        this.size++
        return
    }

    append(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.prepend(value);
            return
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.size++;
        return   
    }






}

let D1 = new DoublyLinkedList();

console.log(D1.isEmpty())
D1.prepend(10)
D1.append(9)
D1.prepend(20)
console.log(D1.head)
console.log(D1.tail)
console.log(D1.isEmpty())