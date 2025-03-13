## 一 教学内容

### 第1章：Git简介

#### 1.1 “版本控制”概念 ：

```text
概念：版本控制是软件开发中的一门重要技术：用于管理文件的变更。它允许多个用户协同工作，对文件的历史进行跟踪，并在需要时回滚到以前的版本。
```



#### 1.2 Git vs. 其他版本控制系统（如SVN）

版本控制的类型：

- 本地版本控制
- 集中式版本控制：SVN，Perforce....
- 分布式版本控制：git，Mercurial



#### 1.3 安装和配置Git

[官网](https://git-scm.com/) 进行下载



### 第2章：Git基础

### 2.1 创建和初始化Git仓库

```bash
## 创建一个文件夹：git
mkdir git

## 初始化: .git文件夹
git init
```



### 2.2 工作区、暂存区和本地仓库的概念

在使用Git进行版本控制时（初始化文件夹后），就会在本地文件夹形成三个区域：分别代表了不同的阶段，目的：共同管理和跟踪文件的修改。

- 工作区：你在计算机上能看到和操作的实际文件的地方。创建、修改、删除文件。
- 暂存区：一个临时存储区域，用来保存即将提交到本地仓库的更改。
- 本地仓库：你本地磁盘上的一个完整的版本控制数据库，包含所有的提交历史、分支和标签。也是与远程以及其他仓库交互的区域。



### 2.3 Git区域转换与历史状态

```shell
## 当前状态
git status

## 状态转换：工作区=》暂存区
git add .

## 状态转换: 暂存区=》本地仓库
git commit -m "mes"

## 状态转换：本地仓库=》暂存区/工作区/完全舍弃修改
git reset --soft <commit>
git reset --mixed <commit>
git reset --hard <commit>
```

```shell
## git log提交历史和提交信息

commit ba18a68d8482cbf79c4cbad2fdd6971109d52f97 (HEAD -> main)
Author: wangxiaoyao <wangxiaoyao77@gmail.com>
Date:   Sun Jul 7 11:49:27 2024 +0800

    1.png
<end>

## 历史转换
git reset <commit>
```



### 第3章：分支与合并

### 3.1 分支的概念和用途

分支是本地开发的平行的代码线。每个分支都可以看作是代码库的一个分支版本，允许开发人员在不影响主线代码的情况下进行开发和实验。



### 3.2 创建和切换分支

```shell
## 分支状态
git branch

## 创建分支，并切换分支
git checkout -b feature

## 删除分支
git branch -d feature
```



### 3.3 合并分支和解决冲突

```shell
## 分支合并
git merge XX
```



### 第4章：远程仓库

### 4.1 远程仓库的概念

远程仓库（Remote Repository）是存储在网络服务器上的Git仓库，允许多个开发者在不同地点协作开发。远程仓库是分布式版本控制系统的重要组成部分：它通常作为团队协作的中央代码存储库。比如：GitHub、GitLab、Bitbucket或私有服务器上。

### 4.2 添加和删除远程仓库

```shell
## 查看远程库状态
git remote -v

## 添加远程库
git remote add origin git@github.com:wangxiaoyao/gitTest.git

## 删除
git remote remove origin

## 克隆
git clone <Url>
```



### 4.3 推送和拉取代码

```shell
## 分支建立联系
git branch -u origin/main main

## 拉取代码
git pull (origin main)

## 提交代码
git push (origin main)
```



### 4.4 远程分支的管理

```shell
## 查看远程分支状态
git branch -r

## 创建远程分支
git push origin feature

## 删除远程分支
git push origin --delete feature
```



## 二 项目操作

 [github远程地址](https://github.com/wangxiaoyao/gitTest)



## 三 git问题：

假设两组人分别开发了同一个项目。但是他们分别使用了不同的远程库：A(url.git)，B(url.git)。 如何对A和B进行合并到本地仓库？



