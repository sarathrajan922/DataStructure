let arr =[34,66,444,6,2,77,100]


let secondLargest = (arr)=>{
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;
    let fouthLargest = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            fouthLargest = thirdLargest;
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = arr[i];
        }else if(arr[i]> secondLargest){
            fouthLargest= thirdLargest;
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        }else if(arr[i]> thirdLargest){
            fouthLargest = thirdLargest
            thirdLargest = arr[i];
        }else if(arr[i]> fouthLargest){
            fouthLargest = arr[i]
        }
    }
    return {
        largest,
        secondLargest,
        thirdLargest,
        fouthLargest
    }
}


console.log(secondLargest(arr))