let arr= [84,3,-2,11,1]
console.log(arr)

const mergeSort = (arr)=>{

    if(arr.length < 2 )return arr

    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))

}

const merge = (leftArr,rightArr)=>{
  const sortedArr = []
  while(leftArr.length && rightArr.length){
    if(leftArr[0] <= rightArr[0]){
        sortedArr.push(leftArr.shift())
    }else{
        sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr,...leftArr,...rightArr]
}

console.log(mergeSort(arr))