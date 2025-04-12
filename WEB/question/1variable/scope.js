//1 global scope
let globalVal = 'global';


//2 block scope: if/for/while
if (true) {
    let name = 'xiaoyao'
    var name1 = 'xiaoyao1'
}
// console.log(name, name1);


//3 function scope:  {} 为 function body。不是block scope
function fn(params) {
    var fn1 = 'fn1'
    let fn2 = 'fn2'
}
// console.log(fn1, fn2);


// => lexical scope
function lexicalFn(params) {
    console.log(globalVal);
}

function lexicalFn2(params) {
    let globalVal = 'global1'
    lexicalFn()
}
lexicalFn2();




// closure
function outter(params) {
    let lexicalVal = 'lexicalVal';
    function inner(params) {
        console.log(lexicalVal);
    }
    return inner;
}
outter()();








