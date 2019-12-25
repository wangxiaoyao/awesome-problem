## 使用指针的方式实现strcat

1 问题： 两个字符串的拼接

```
char s1[] = "hello";
char *s2 = " world";

=> 得到s1="hello world";
```

2 解题思路

- 1 注意题目若是由:char s1[] = "hello"; =》 char *s1 = "hello"; 则无法更改s1。因为s1为一个常量。

- 2 

```
while(*s1)   等价于   while(*s1!='\0')
```

- 3 简写如下
- 
```
while ( *s1++ = *s2++);
```