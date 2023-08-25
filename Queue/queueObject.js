class Queue{
    constructor(){
        this.items = {}
        this.rear = 0;
        this.front = 0;
    }

    enqueue(value){
        this.items[this.rear] = value;
        this.rear++
    }

    dequeue(){
        const value = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return value
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items)
    }


}

const Q2 = new Queue()

Q2.enqueue(20)
Q2.enqueue(4)
Q2.enqueue(9)
console.log(Q2)
console.log(Q2.dequeue())
console.log(Q2)
Q2.enqueue(20)
console.log(Q2)
console.log(Q2.dequeue())
console.log(Q2)
console.log(Q2.isEmpty())
console.log(Q2.peek())
console.log(Q2.size())
Q2.print()