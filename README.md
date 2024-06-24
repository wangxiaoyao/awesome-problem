# awesome-problem

> 日常积累的各类语言的练习题，具体问题。以帮助巩固各语言基础，方便面试。并记录具体问题的解决思路。

## 使用说明

1 按照解决问题所使用的程序语言对整体项目进行划分。

2 文件以 `创立时间 + 问题 `组成，每一个文件里README文件：问题，思路。（多文件表示多种解题方式）

3 编译语言说明（C为例）

使用IDE：将 XXX.C 文件放入创立项目的，已有main函数，先将其改掉,或删除整个文件。将我的XXX.C放入，点击运行。

使用终端：

- 1 本电脑需先安装 GCC套件

```
# MAC系统只要安装了 Xcode就有了 clang。

# linux可以在终端输入以下命令进行安装GCC
sudo apt-get  install  build-essential
```

- 2 利用GCC进行编译

```
gcc XXX.c -o "可执行程序名称"
```

点击生成的可执行程序，即可运行。

## 程序语言归类

C：

- mac：Xcode
- window：VS2019
- 编译器：gcc

Cpp：

- mac： Xcode
- window：VS2019
- 编译器：clang/llvm

WEB：html，css，javascript 三大模块问题。以及demo实例。

- vscode