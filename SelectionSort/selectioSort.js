let arr = [23,4,66,-1,0,10]
console.log(arr)


const selectionSort = (arr)=>{
    for(let i=0; i<arr.length-1; i++){
        let minIdx = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]< arr[minIdx]){
                minIdx = j
            }
        }
        [arr[i],arr[minIdx]]=[arr[minIdx],arr[i]]
    }
    return arr
}


console.log(selectionSort(arr))
