const arr = [34,5,66,77,3,88]

const findSecondLargest = (arr)=>{
    let Large = -Infinity;
    let second = -Infinity;

    for(let i=0; i<arr.length;i++){
        sum += arr[i]
        if(arr[i] > Large){
            second = Large;
            Large = arr[i]
        }else if(arr[i] > second){
            second = arr[i]
        }
    }
    return second;
}

console.log(findSecondLargest(arr))