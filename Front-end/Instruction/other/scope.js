//1 global scope
let globalVal = "global";

//2 block scope: if/for/while
if (true) {
  let name = "xiaoyao";
  var name1 = "xiaoyao1";
}
// console.log(name, name1);

//3 function scope:  {} 为 function body。不是 block scope
function fn() {
  var fn1 = "fn1";
  let fn2 = "fn2";
}
// console.log(fn1, fn2);

//4 lexical scope 词法作用域。 ReferenceError: globalVal is not defined
/**
 * 词法作用域： 函数内能访问的变量，取决于函数定义时所在的作用域链（写代码的位置处），而不是调用它的地方。(规则)
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

// 2方式 closure： 函数被创建 + 它“定义时”可访问到的词法环境（变量们）。 一定由：外层函数 + 内层函数共同构成。
/**
 * 一般情况下：当一个函数（外层函数）执行完毕并返回后，它内部声明的所有局部变量都会被销毁，内存会被回收。
 * 特殊情况：内层函数在定义处，引用了外层函数的局部变量。为了确保内部函数调用能够访问这些变量。不会进行销毁。存活在内存中。那么构成的 “函数带走了定义处的词法法作用域。即：变量访问环境"“就叫做：闭包（机制）。
 */
function outter() {
  let lexicalVal = "lexicalVal";
  function inner() {
    // inner闭包，抓住了lexicalVal
    console.log(lexicalVal);
  }
  return inner;
}

// 1 持久引用闭包
const fn1 = outter(); // 1 持久闭包：outter已经结束，但是lexicalVal没有被释放，仍然在fn的闭包里
fn1();
// 2 短暂引用的闭包
// outter()()

// 闭包思考题。
function make() {
  let n = 0;
  return () => ++n; 
}
const c1 = make();
const c2 = make();
c1(); // 1
c1(); // 2
c1(); // 3
c2(); // 1  <-- c2 有自己的 n 每次调用外层函数，都会得到“独立的一套变量环境”（工厂函数常用）

// 闭包和词法作用域的区别：词法作用域决定了可以拿到那些变量，闭包决定了拿到的变量不被销毁并干活
