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

    insertIntoIndex(value,index){
        if(index < 0 || index > this.size){
            console.log('index not valid.')
            return 
        } 
        if(index === 0){
            this.prepend(value)
        }else{
            let node = new Node(value)
            let prev = this.head
            for(let i=0; i < index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            if(index === this.size){
                this.tail = node
            }
            this.size++
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty...')
            return
        }   
        let values = []
        let curr = this.head
        while(curr){
            values.push(curr.value)
            curr = curr.next
        }
        console.log(values)
    }
}

const list = new LinkedList()

// list.prepend(30)
// list.prepend(40)
// list.append(10)
// list.append(5)
list.insertIntoIndex(-11,0)
list.print()
list.insertIntoIndex(20,1)
list.print()
list.insertIntoIndex(10,2)
list.print()
list.insertIntoIndex(-1,1)
list.print()
console.log(list)