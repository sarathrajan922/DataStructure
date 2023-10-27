class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }
        let curr = this.head
        while(curr.next){
            curr =curr.next;
        }
        curr.next = newNode;
        this.tail = newNode;
        return
    }

    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return     
    }

    display(){
        let curr = this.head
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
}

const obj = new LinkList()
obj.append(10);
obj.append(20);

obj.append(30);
obj.append(40);
obj.prepend(9)
obj.prepend(8)
obj.append(50)


obj.display()

// console.log(obj)