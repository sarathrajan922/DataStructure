let arr = [40,9,55,-1,66];

const Bsort = (arr)=>{
    let n = arr.length -1
    let swapped;
    do{
        swapped = false;
        for(let i=0 ; i<n ; i++){
            if(arr[i]> arr[i+1]){
                [arr[i],arr[i+1]]= [arr[i+1],arr[i]]
                swapped= true
            }
        }
        n--
    }while(swapped)
    return arr
}


const sort = (arr)=>{
    let n = arr.length - 1;
    let swapped = false;

    do{
        for(let i =0 ; i< n; i++){
            if(arr[i]> arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped = true
            }
        }
        n--
    }while(swapped)
    return arr
}
console.log(Bsort(arr))
console.log(sort(arr))