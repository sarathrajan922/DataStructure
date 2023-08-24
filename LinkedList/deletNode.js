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

    deleteNode(value){
        if(this.isEmpty()) {
            console.log('list is empty..')
            return
        }
        let curr = this.head;
        if(curr.value === value){
            this.head = curr.next
            return
        }else{
            while(curr.next){
                if(curr.next.value === value){
                    curr.next = curr.next.next
                }else{
                    curr = curr.next
                }
            }
        }
    }

    append(value){
        const node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.size++;
        
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

list.prepend(30)
list.prepend(40)
list.append(10)
list.append(5)

list.print()
list.deleteNode(10)
list.print()