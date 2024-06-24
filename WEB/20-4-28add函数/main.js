function add(param) {
  let sum = 0;
  function temp(param) {
    sum += param;
    return temp;
  }
  temp(param);
  temp.toString = function () {
    return sum;
  };
  return temp;
}
console.log("====================================");
console.log(add(1)(2)(3));
console.log("====================================");
