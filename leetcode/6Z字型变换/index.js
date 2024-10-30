function reverseInteger(num) {
  let arr = num.toString().split("").reverse();
  let pos = arr.indexOf("-");
  if (pos != -1) {
    arr.splice(pos, 1);
    return -Number(arr.join(""));
  } else {
    let k = arr.join("");
    return Number(arr.join(""));
  }
}

let num1 = 123;
let num2 = -123;
let num3 = 120;

console.log(reverseInteger(num3));
