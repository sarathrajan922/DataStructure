let arr = [234,55,677,2,44,77,5]
console.log("normal array")
console.log(arr)
//convert this array into heap

const heapify= (arr,n,i)=>{
    let largest = i;
    let left = 2*i+1;
    let right =2*i+2;

    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest != i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n, largest)
    }
    return arr
}

let n = arr.length;

for(let i=Math.floor(n/2)-1; i>=0; i--){
    heapify(arr,n,i)
}

console.log("heap")

console.log(arr)

const deleteHeap =()=>{
    arr[0]=arr[arr.length-1];
    arr.pop();
    let i = 0;
    while(true){
        let child1 = arr[2*i+1]
        let child2 = arr[2*i+2];

        if(child1 < child2){
            if(child1 < arr[i]){
                [arr[2*i+1],arr[i]]=[arr[i],arr[2*i+1]]
                i = 2*i+1;
            }else{
                return 
            }
        }else{
            if(child2 < arr[i]){
                [arr[i],arr[2*i+2]]=[arr[2*i+2],arr[i]]
                i= 2*i+1;
            }else{
                return
            }
        }
    }
}

console.log("---heap sort----")

for(let i= n-1; i>=0; i--){
    [arr[0],arr[i]]=[arr[i],arr[0]];
    heapify(arr,i,0)
}

console.log(arr)