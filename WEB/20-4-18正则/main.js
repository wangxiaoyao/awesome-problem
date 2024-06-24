// 例题1
var foo='get-element-by-id';

// 方法1： 正则方法
function getName(val){
  var valUpper = val.replace(/-\w/g ,L => L.toUpperCase());
  var valUpper = valUpper.split('-');
  return  valUpper.join('');
}
console.log(getName(foo));

// 方法2： 函数写法
// function fun1(){
//     let arr = foo.split('-');
//     for (let index = 1; index < arr.length; index++) {        
//         let firstChar = arr[index].charAt(0).toUpperCase();
//         console.log(firstChar);
//         arr[index] = firstChar + arr[index].slice(1);
//     }
//     let string = arr.join('');
//     return string
//   }
// console.log(fun1(foo));

// 例题2

var time = '2014年9月26日';

// 方法1
let result =  time.replace(/\D\b/g , "-").replace(/[^0-9\-]/g,'');
console.log(result);

// 方法2
// function formatTime(val){
//   return val.match(/\d+/g).join('-');
// };
