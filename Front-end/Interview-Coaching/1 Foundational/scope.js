//1 global scope
let globalVal = "global";

//2 block scope: if/for/while
if (true) {
  let name = "xiaoyao";
  var name1 = "xiaoyao1";
}
// console.log(name, name1);

//3 function scope:  {} 为 function body。不是 block scope
function fn(params) {
  var fn1 = "fn1";
  let fn2 = "fn2";
}
// console.log(fn1, fn2);

// => lexical scope 词法作用域。 ReferenceError: globalVal is not defined
/**
 * 词法作用域： 函数内能访问的变量，取决于函数定义时所在的作用域链，而不是调用它的地方。
 * 想获取lexicalFn2的局部变量： 1 使用传参的方式 2 使用闭包
 */
function lexicalFn(params) {
  console.log(globalVal);
}

function lexicalFn2(params) {
  let globalVal = "global1";
  lexicalFn();
}
lexicalFn2();


// 2方式 closure
function outter(params) {
  let lexicalVal = "lexicalVal";
  function inner(params) {
    console.log(lexicalVal);
  }
  return inner;
}
outter()();
