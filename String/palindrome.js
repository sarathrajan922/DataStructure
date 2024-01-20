let str = "malayalam";

const isPalindrome = (str) => {
  let n = str.length - 1;
  for (let i = 0; i <= n / 2; i++) {
    if (str[i] != str[n]) {
      return false;
    }
    n--;
  }
  return true;
};

//or

const isPalindromeCheck = (str) => {
  let str2 = str.split("").reverse().join("");
  return str === str2;
};

console.log(isPalindrome(str));
console.log(isPalindromeCheck(str));
