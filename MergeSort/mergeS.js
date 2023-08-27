let arr = [93,2,-1,0,5]

console.log(arr)

const mSort= (arr) =>{
    if(arr.length < 2) return arr
    let mid = Math.floor(arr.length /2)
    let leftAr = arr.slice(0,mid)
    let rightAr = arr.slice(mid)
    return merge(mSort(leftAr),mSort(rightAr))
}

const merge = (leftAr,rightAr)=>{
    let sortedAr = []
    while(leftAr.length && rightAr.length){
        if(leftAr[0] <= rightAr[0]){
            sortedAr.push(leftAr.shift())
        }else{
            sortedAr.push(rightAr.shift())
        }
    }

    return [...sortedAr,...leftAr,...rightAr]
}


console.log(mSort(arr))