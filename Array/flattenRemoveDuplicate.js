//crate a function for that not only flatten the array but also removes duplicate elements
//eg: [1,2,[3,4],2,[5,6,[7,8]]]
//o/p: [1,2,3,4,5,6,7,8]

const arr = [1,2,[3,4],2,[5,6,[7,8]]]

const flatten = (arr)=>{
    let flattenArray = []
    for(let i=0; i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flattenArray = flattenArray.concat(flatten(arr[i]))
        }else{
            flattenArray.push(arr[i])
        }
    }
    return flattenArray
}

console.log(Array.from(new Set(flatten(arr))))