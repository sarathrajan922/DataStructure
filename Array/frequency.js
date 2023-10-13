let arr = [10,10,3,4,5,5,5,5,8,9,9];

const frequency = (arr)=>{
    let set = new Map();

    for(let i = 0 ; i< arr.length ; i++){
        if(!set.has(arr[i])){
            set.set(arr[i],1)
        }else{
            let count = set.get(arr[i]);
            set.set(arr[i],count+1);
        }
    }
    return set;
}

console.log(frequency(arr))