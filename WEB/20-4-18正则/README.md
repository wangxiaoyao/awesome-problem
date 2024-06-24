##正则相关问题：

1 问题描述：

例题1：已知有字符串foo=”get-element-by-id”,写一个function将其转化成驼峰表示法”getElementById”。

例题2：输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26

2 解题重点：

- 1 少使用match，exec 因为要生成数组，会变慢