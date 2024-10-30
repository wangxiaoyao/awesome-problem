function isPalindromeNum(num) {
  newStr = num.toString().split("").reverse().join("");
  if (newStr.indexOf("-") !== -1) {
    return false;
  } else {
    newNum = Number(newStr);
    if (newNum === num) {
      return true;
    } else {
      return false;
    }
  }
}

let num1 = 121;
let num2 = -121;
let num3 = 10;

console.log(isPalindromeNum(num3));
