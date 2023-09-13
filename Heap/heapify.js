let arr = [234,55,677,2,44,77,5]
console.log("normal array")
console.log(arr)
//convert this array into heap

const  heapify =(arr,n,i)=>{
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;
    
    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }
    if(right < n && arr[right] > arr[largest]){
        largest = right
    }

    if(largest != i){
        [arr[largest],arr[i]]=[arr[i],arr[largest]]
        heapify(arr,n,largest)
    }

    return arr
}


let n = arr.length;
for(let i=Math.floor(n/2)-1; i>=0; i--){
    heapify(arr,n,i)
}

console.log("heap")

console.log(arr)