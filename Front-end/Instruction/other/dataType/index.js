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

// === 引用比较
let x1 = { a: 1 };
let x2 = { a: 1 };
console.log(x1 === x2); // false
let x3 = x1;
console.log(x1 === x3); // true

// 2 type casting / type coercion
console.log("2<===========>");
console.log(Number("100px"));
console.log(+"true");

console.log(
  "注意点：",
  Boolean([]),
  Boolean({}),
  Boolean(() => {})
);
console.log(typeof ("5" * 2));

// 3 const prevents reassign but not mutation => but use Object.freeze()
console.log("3<===========>");
const objMutation = {
  val: 1,
};
objMutation.val = 2;
console.log(objMutation);
// objMutation = 1;

// 4 undefined
console.log("4<===========>");
function test() {}
console.log(test());

// 5 primitive VS build-in constructor (JS temporarily wrapped by constructor（temporary object）处理)
console.log("5<===========>");
let k5 = "hello";
// k5.toUpperCase()  <=> new String(k5).toUpperCase()
console.log(k5 === new String("hello"));

// 6 symbol: hidden object properties
console.log("6<===========>");

const user = {
  name: "Alice",
  [Symbol("hidden")]: "secret1",
  [Symbol("hidden")]: "secret2",
};

// undefined =》 [Symbol("hidden")] 创建了第三种key
console.log(user[Symbol("hidden")]);

console.log(Object.keys(user)); // → ["name"] (symbol is hidden!)
console.log(Reflect.ownKeys(user));
console.log(Object.getOwnPropertySymbols(user)[1]);
console.log(user[Object.getOwnPropertySymbols(user)[1]]);

console.log(Symbol.for("app.token") === Symbol.for("app.token"));

// 7 tagged template
console.log("7<===========>");
function highlight(strs, ...values) {
  return strs.map((str, i) => {
    return str + (values[i] ? `<mark>${values[i]}</mark>` : "");
  });
}

const name = "小明";
const age = 18;
const result = highlight`我叫 ${name}，今年 ${age} 岁。`;
console.log(result);

// 8 optional chaining作用: ?.  以及  && 的惰性
console.log("8<===========>");
let checkData = 0;
console.log(checkData?.length !== 0);

console.log(checkData && checkData?.length);

console.log((checkData && checkData?.length) !== 0);

let obj = {
  a: 1,
  b: 2,
};

console.log("9<===========>");

let k = {
  a: 1,
  b: 2,
};
let arr = [1, 2, 3];
console.log(arr.find(0));
