let arr = [10,20,30,40,50,60,70]

const search= (arr, target)=>{
  let start = 0
  let end = arr.length - 1
  while(start <= end){
    let mid = Math.floor((start + end)/2)
    if(arr[mid]=== target) return mid
    if(target < arr[mid]){
        end = mid -1
    }else{
        start = mid + 1
    }
  }
  return 'value not found'
}

console.log(search(arr,70))