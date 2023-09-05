class Heap{
    constructor(){
        this.Heap = []
    }


    insertValue(value){
        this.Heap.push(value)
        let i = this.Heap.length -1
        while(i >= 0){
            let parent = Math.floor((i-1)/2)
            if(this.Heap[parent] > this.Heap[i]){
                [this.Heap[parent],this.Heap[i]]=[this.Heap[i],this.Heap[parent]]
                i = parent
            }else{
                return
            }
        }
    }


    delete(){
        this.Heap[0] = this.Heap[this.Heap.length -1]
        this.Heap.length--;
        let i =0 
        while(true){
            let child1 = this.Heap[2*i+1]
            let child2 = this.Heap[2*i+2]

            if(child1 < child2){
                if(child1 < this.Heap[i]){
                    [this.Heap[i],this.Heap[2*i+1]]=[this.Heap[2*i+1],this.Heap[i]]
                    i= 2*i+1
                }else{
                    return
                }
            }else{
                if(child2 < this.Heap[i]){
                    [this.Heap[i],this.Heap[2*i+2]]=[this.Heap[2*i+2],this.Heap[i]]
                    i= 2*i+2
                }else{
                    return 
                }
            }
        }
    }


    heapify(arr,n,i){
        let largest = i
        let L = 2*i+1
        let R = 2*i+2

        while(L <n && arr[L] < arr[largest]){
            largest = L
        }

        while(R <n && arr[R] < arr[largest]){
            largest = R
        }

        if(largest !=i){
            [arr[largest],arr[i]]=[arr[i],arr[largest]]
            this.heapify(arr,n,largest)
        }
        return arr

    }
   

}

const H = new Heap()

H.insertValue(8)
H.insertValue(10)
H.insertValue(12)
H.insertValue(14)
H.insertValue(18)
H.insertValue(15)
H.insertValue(16)
H.insertValue(17)

console.log(H.Heap)
H.delete()
console.log(H.Heap)

let arr = [...H.Heap]
console.log('heap')
console.log(arr)
let n = arr.length-1
for(let i=n; i>=0 ;i--){
    [arr[0],arr[i]]=[arr[i],arr[0]]
    H.heapify(arr,i,0)
}
console.log('sorted')
console.log(arr)
