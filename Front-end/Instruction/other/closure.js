// 闭包

// 作用1： 数据私有化
function closureFn() {
  let count = 0;
  return {
    get: () => count,
    increment: () => count++,
  };
}
const counter = closureFn();

console.log(counter.get());
console.log(counter.get().increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.get());


// 作用2 科里化
 

