class Heap{
    constructor() {
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);
        let i = this.heap.length-1;
        while(i>=0){
            let parent = Math.floor((i-1)/2);
            if(this.heap[i] < this.heap[parent]){
               [this.heap[i],this.heap[parent]]=[this.heap[parent],this.heap[i]]
               i= parent;
            }else{
                return
            }
        }
    }

    delete(){
       this.heap[0]=this.heap[this.heap.length-1];
       this.heap.length--;
       let i=0;
       while(true){
        let child1 = this.heap[2*i+1];
        let child2 = this.heap[2*i+2];

        if(child1 <child2){
            if(child1 < this.heap[i]){
                [this.heap[i],this.heap[2*i+1]]=[this.heap[2*i+2],this.heap[i]]
                i= 2*i+1;
            }else{
                return
            }
        }else{
            if(child2 < this.heap[i]){
                [this.heap[i],this.heap[2*i+2]]=[this.heap[2*i+2],this.heap[i]]
                i= 2*1+2
            }else{
                return
            }
        }
       }
    }

    heapify(arr,n,i){
        let largest = i
        let left = 2*i+1;
        let right = 2*i+2;
        while(left <n && arr[left] < arr[largest]){
            largest = left;
        }
        while(right < n && arr[right] < arr[largest]){
            largest = right;
        }
        if(i !=largest){
        [arr[i],arr[largest]]=[arr[largest],arr[i]];
        this.heapify(arr,n,largest);
        }
        return arr;
    }

}

let H= new Heap();
H.insert(8)
H.insert(10)
H.insert(12)
H.insert(14)
H.insert(18)
H.insert(15)
H.insert(16)
H.insert(17)
H.delete()
console.log(H.heap)
let arr= [...H.heap]
let n = arr.length-1

for(let i=n; i>=0; i--){
    [arr[0],arr[i]]=[arr[i],arr[0]]
    H.heapify(arr,i,0)
}
console.log('sorted')

console.log(arr)
