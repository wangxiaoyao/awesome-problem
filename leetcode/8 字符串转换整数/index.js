function myAtoi(str) {
  let noEspaceStr = str.replace(/\s/gi, "");
  console.log(noEspaceStr);
  let hasMinusPos = noEspaceStr.indexOf("-");
  console.log(hasMinusPos);
  // 负号在首位
  if (hasMinusPos === 0) {
    // 除掉首位负号
    let newStr = noEspaceStr.slice(1);
    let letterPos = newStr.search(/\D/gi);
    console.log(letterPos);
    // 没有字母时候
    if (letterPos === -1) {
      return Number(noEspaceStr);
    } else {
      let resultStr = noEspaceStr.slice(0, letterPos);
      return Number(resultStr);
    }
    // 没有负号的时候
  } else if (hasMinusPos === -1) {
    let letterPos = noEspaceStr.search(/\D/gi);
    // 没有字母时候
    if (letterPos === -1) {
      return Number(noEspaceStr);
    } else {
      let resultStr = noEspaceStr.slice(0, letterPos);
      return Number(resultStr);
    }
  }
}

let num1 = "42";
let num2 = "   -42";
let num3 = "4193 with words";
let num4 = "words and 987";

console.log(myAtoi(num4));
