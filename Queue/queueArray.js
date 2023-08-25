class Queue{
    constructor(){
        this.items = []
    }

    enqueue(val){
        this.items.push(val)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length == 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }else{
            return null
        }

    }

    print(){
        console.log(this.items.toString())
    }
}

let Q1 = new Queue()

Q1.enqueue(10)
Q1.enqueue(20)
Q1.enqueue(30)
Q1.print()
console.log(Q1.dequeue())
Q1.print()
console.log(Q1.peek())

