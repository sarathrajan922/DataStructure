let arr= [73,-1,0,-3,5,10]

console.log(arr)

const qsort= (arr)=>{
    if(arr.length < 2) return arr
    let pivot = arr[arr.length -1]
    let left = []
    let right = []
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...qsort(left),pivot,...qsort(right)]
}


console.log(qsort(arr))