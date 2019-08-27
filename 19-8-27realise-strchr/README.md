##指针实现strchr函数

1 问题描述：strchr函数的定义见下:在参数 str 所指向的字符串中搜索第一次出现字符 c（一个无符号字符）的位置。请自己写一个功能一样的函数。

```
char * strchr(const char str[],char c)
```


2 解题思路：

- 1 指针在处理字符串（数组）中的特点：

```
char str[]="helloworld";

// 注意不要写成取址 &str，因为代表了指针指向字符串第一位，字符串的第一位默认字符串名称
char *p = str;
printf("%c",p[1]);
```

- 2 在函数的形参传递中

```
char *str  => char str[]  是等价的
```

- 3 指针在处理字符串中的第二个特点：

```
char str[]="hello world";
// 注意不能漏写&，因为你代表指针指向str的第四位
char *p = &str[3];
printf("%s\n",p);
```

指针p取 str第四位的地址，并往后。

