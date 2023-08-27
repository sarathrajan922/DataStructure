let arr = [23,4,66,-1,0,10]
console.log(arr)


const selectionSort = (arr)=>{
    for(let i=0;i<arr.length-1; i++){
        let midIdx = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[midIdx]){
                midIdx = j
            }
        }
        [arr[i],arr[midIdx]]=[arr[midIdx],arr[i]]
    }
    return arr
}


console.log(selectionSort(arr))
