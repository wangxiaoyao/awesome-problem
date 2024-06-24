## 实现add函数

1 问题描述：实现一个add函数，使得add(1)(2)(3)的值为6

2 解题重点：

- 1 必须实现的是一个嵌套函数，add函数返回的是一个函数()
- 2 题意可知：最后返回的是一个number值。 那么解题思路是： 由于JS中任何引用类型都继承了Object的属性。Function类型也具有toString()的。 在最后输出中会自动调用toString方法。我们实现这个方法，从而转为number值
- 3 函数的柯里化

```
var sumCurrying = function (a) {
  return function (b) {
    return a + b;
  };
};

console.log(sumCurrying(1)(2));

```