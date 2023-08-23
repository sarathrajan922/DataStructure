let array = [20,1,66,34,8,3]
console.log(array)
const sort = (arr)=> {
    let n= arr.length-1;
    let swapped;
    do{
        swapped = false;
        for(let i=0; i<n; i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped = true
            }
        }
        n--
    }while(swapped)
}
sort(array)
console.log(array)