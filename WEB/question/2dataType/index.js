// 1 primitive(Cannot be changed in-place 除非reassign) VS reference(can, so Multiple variables can point to same object)
console.log("1<===========>");
let a = 10;
let b = a;
b = 20;

console.log(a); // → 10 (primitive → no link): stack memory

let x = { value: 10 };
let y = x;
y.value = 20;
console.log(x.value); // → 20 (reference → shared公用) : heap memory

// reassignment: so two different object
y = { value: 30 };
console.log(x.value);



// 2 type casting
console.log("2<===========>");

console.log(Number('100px'));
console.log(+"true");



// 3 const prevents reassign but not mutation => but use Object.freeze()
console.log("3<===========>");
const objMutation = {
    val: 1
}
objMutation.val = 2;
console.log(objMutation);
// objMutation = 1;



// 4 undefined
console.log("4<===========>");
function test() { }
console.log(test());



// 5 primitive VS build-in constructor (JS temporarily wrapped by constructor（temporary object）处理)
console.log("5<===========>");
let k5 = 'hello';
// k5.toUpperCase()  <=> new String(k5).toUpperCase()
console.log(k5 === new String('hello'));



// 6 symbol: hidden object properties 
console.log("6<===========>");

const user = {
    name: "Alice",
    [Symbol("hidden")]: "secret1",
    [Symbol("hidden")]: "secret2",
};

// undefined =》 [Symbol("hidden")] 创建了第三种key 
console.log(user[Symbol("hidden")]);

console.log(Object.keys(user));   // → ["name"] (symbol is hidden!)
console.log(Reflect.ownKeys(user));
console.log(Object.getOwnPropertySymbols(user)[1]);
console.log(user[Object.getOwnPropertySymbols(user)[1]]);

console.log(Symbol.for("app.token") === Symbol.for("app.token"));












