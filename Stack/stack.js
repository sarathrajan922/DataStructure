class Stack{
    constructor(){
        this.items = []
    }


    push(val){
        this.items.push(val)
    }

    pop(){
        return this.items.pop()
    }


    peek(){
        return this.items[this.items.length -1]
    }

    isEmpty(){
        return this.items.length == 0
    }

    print(){
        console.log(this.items)
    }

    size(){
        return this.items.length
    }
}

const obj = new Stack()

obj.push(10)
obj.push(30)
obj.push(-1)
obj.push(44)

obj.print()
console.log(obj.peek())
console.log(obj.pop())
console.log(obj.isEmpty())
console.log(obj.size())