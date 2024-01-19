let str1 = 'sarath';
let str2 = 'sragaht';

const isAnagram = (str1,str2)=>{
    let s1 = str1.split('').sort().join('');
    let s2 = str2.split('').sort().join('')

    return s1 === s2;
}


console.log(isAnagram(str1,str2))