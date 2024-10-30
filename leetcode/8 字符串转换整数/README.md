## 字符串转换整数 (atoi)

1 问题： 实现一个 atoi 函数，使其能将字符串转换成整数。


2 解题关键：

### JS方式

1 在于：Number自带的方式

2 消除字符的空格，使用正则替换

```
let newStr =  str.replace(/\s/gi,  '');
```