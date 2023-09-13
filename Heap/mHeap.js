class Heap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        let i = this.heap[this.heap.length-1]
        while(i>=0){
            let parent = Math.floor((i-1)/2);
            if(this.heap[i] < this.heap[parent]){
                [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]]
                i = parent
            }else{
                return
            }
        }
    }
}