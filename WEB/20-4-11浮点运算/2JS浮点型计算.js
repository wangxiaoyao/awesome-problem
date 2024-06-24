// 简单的做法是：扩大10的N+1倍数，然后除以这个数，
// 由于精度不好控制。toFixed(num)四舍五入会有问题。所以我并没有写入精度参数。需要另行计算

// 加法
var a1 = 101
var b1 = 102
console.log(a1.toFixed(1));

// 两个浮点数字，和符号
function  floatCalculate(num1,num2,sign) {
  let arrayNum1 = num1.toString().split('');
  let arrayNum2 = num2.toString().split('');
  if(arrayNum1.indexOf('.')!=-1 || arrayNum2.indexOf('.')!=-1 ){
    let lengthNum1 = arrayNum1.length;
    let lengthNum2 = arrayNum2.length;
    let multipleValue=Math.pow(10,Math.max((lengthNum1 - arrayNum1.indexOf('.')-1),(lengthNum2 - arrayNum2.indexOf('.')-1))+1);
    let newNum1 = num1 * multipleValue;
    let newNum2 = num2 * multipleValue;
    switch (sign) {
      case '+':
        return ((newNum1 + newNum2)/multipleValue)
        break;
      case '-':
        return ((newNum1 - newNum2)/multipleValue)
        break;
      case '*':
        return ((newNum1 * newNum2)/Math.pow(multipleValue,2))
        break;
      case '/':
        if(newNum2===0){
          console.log("除数不为0");
        }else{
          return (newNum1/newNum2)
        }
        break;
      default:
        console.log("非运算符");
        break;
      }
  }else{
    console.log("非浮点运算");
  }
}
console.log(floatCalculate(a1,b1,'/'));



