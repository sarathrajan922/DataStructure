let arr = [34,55,55,77,77,8,9]

const findUnique = (arr)=>{
//     let unique =[]
//     for(let i =0; i<arr.length; i++){
//         if(unique.indexOf(arr[i]) === -1){
//             unique.push(arr[i])
//         }
//     }

//     return unique;
    return [...new Set(arr)]
}

console.log(findUnique(arr))