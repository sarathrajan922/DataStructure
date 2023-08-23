let arr = [3,45,-1,2,77,-2]
console.log(arr)

const quickSort = (arr)=>{
    if(arr.length < 2) return arr
    const pivot = arr[arr.length-1];
    let left = []
    let right = []
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort(arr))


//worst case = O(n^2)
//avg case = O(nlogn)