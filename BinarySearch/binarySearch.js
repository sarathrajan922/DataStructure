let arr = [10,20,30,40,50,60,70]

const search = (arr,target)=>{
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end)/2)
        if(target === arr[mid]) return mid;
        if(target < arr[mid]){
            end = mid - 1;
        }else{
            start = mid + 1
        }
    }
   
    return `${target} is not found in the given array..`
}

console.log(search(arr,44))