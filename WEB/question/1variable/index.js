//1 variable shadowing: hoisted, TDZ
var shadowing = 'hello'
function shadowingFn() {
    console.log('variable shadowing:',shadowing);
    // let => TDZ
    var shadowing = 'world'
}
shadowingFn();


// 2 const => primitive but reference type can mutate


// 3 var 声明的变量会绑定到顶层对象global，window。 let/const =》单独的Lexical Environment。
console.log(window.name)
console.log(age)
var name = 'hello'
let age = 20
const address = 'beijing'
console.log(window.address)