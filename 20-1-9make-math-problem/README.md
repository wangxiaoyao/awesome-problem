## 生成数学题目

1 问题： 给宝宝随机写出100个四则运算数学题。 a, b 取值为 0-100

```
a+b = 
```

2 解题思路

- 1 fprint() 函数的使用。

- 2 不用fprint() 也可以使用sprintf()

```
// 1 设置一个缓存区
char buf[20]

// 2 初始化缓存区，并 格式化 字符串的输出样式
memset(buf, 0, 20);
sprintf(buf, "%d%c%d=\n", a, c, b);//2*3=\n
int j = 0;
while (buf[j])
	fputc(buf[j++], fp);
```