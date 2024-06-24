## 实现下列函数

1 问题描述：

```
## 使下列值为6
(5).add(4).minus(3)
```

2 解题重点：

- 1 通俗的函数，我们都将其绑定在window上。所以函数不用提升，而可以四处运行。为了给某类型添加该类型的通用方法：原型链继承。要想(5).fun 运行。我们必须要让Number类型具有fun的方法。

```
## 1 添加A类型的原型方法fun1
A.prototype.fun1 = 

## 2 A类型的实例，去执行该方法。注意一旦a不属于A类型，则无法执行fun1
let a = new A();
a.fun1()
```

```
## 绑定在Object的方法fun1
Object.prototype.fun1 = 

## 绑定在Boolean的方法fun1
Boolean.prototype.fun1 =

Boolean.prototype.fun1 = function () {
  console.log(this);
  return 1;
};
console.log(true.fun1()); 
```


- 2 最值得注意的是，原型链方法不能使用箭头函数，否则里面的this将指向window，而不是调用这个方法的实例（某个类型）。下列这种方法是错误的：

```
Number.prototype.add = (param) => {
  return this.valueOf() + param;
};

Number.prototype.minus = (param) => {
  return this.valueOf() - param;
};
```