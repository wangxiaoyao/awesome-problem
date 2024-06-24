Number.prototype.add = function (param) {
  return this.valueOf() + param;
};
Number.prototype.minus = function (param) {
  return this.valueOf() - param;
};

// 绑定在Object上。不推荐，因为这样所有的类型都有这个属性
// Object.prototype.add = function (param) {
//   return this.valueOf() + param;
// };
// Object.prototype.minus = function (param) {
//   return this.valueOf() - param;
// };

console.log((5).add(4));
