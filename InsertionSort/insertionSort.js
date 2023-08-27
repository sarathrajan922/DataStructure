let arr= [84,2,44,3,1,7]

console.log(arr)

const insertionSort = (arr)=>{
    for(let i = 1; i < arr.length ; i++){
        let NTI = arr[i]
        let j= i-1;
        while(j>=0 && arr[j] > NTI){
            arr[j+1] = arr[j]
            j= j-1
        }
        arr[j+1] = NTI
    }
}

insertionSort(arr)
console.log(arr)


//Big-O = O(n^2)