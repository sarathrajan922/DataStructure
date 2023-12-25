// write a function to flatten a nested array?
//eg: [1,[2,3],[4,[5,6]]]
//o/p: [1,2,3,4,5,6]


const arr = [1,[2,3],[4,[5,6]]]

const flatten = (arr)=>{
   let flattenArray = []
   for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        flattenArray = flattenArray.concat(flatten(arr[i]))
    }else{
        flattenArray.push(arr[i])
    }
   }
   return flattenArray
}

console.log(flatten(arr))