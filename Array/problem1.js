const arr = [{a:4,b:9},{a:5,b:-1},{a:9,b:11},{a:19,b:21}];

//print the numbers a to b without duplicating

let set = new Set();

arr.forEach((obj)=>{
    let i = obj['a'];
    let increment = obj['a'] < obj['b'] ? true : false;

    if(increment){
        while(i <= obj['b']){
            !set.has(i) && console.log(i);
            set.add(i);
            i++
        }
    }else{
        while(i >= obj['b']){
            !set.has(i) && console.log(i);
            set.add(i);
            i--
        }
    }
})