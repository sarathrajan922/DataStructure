const arr= [10,3,44,55,55,55,44,7,8]

const findDuplicates = (arr)=>{
    let output = []
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j] && !output.includes(arr[i])){ 
                    output.push(arr[i])
            }
        }
    }
    return output
}

const duplicate = (arr)=>{
    let set = new Set()
    let newSet = new Set()
    for(let element of arr){
        if(!set.has(element)){
            set.add(element)
        }else{
            newSet.add(element)
        }
    }

    return Array.from(newSet)
}

console.log(findDuplicates(arr))
console.log(duplicate(arr))