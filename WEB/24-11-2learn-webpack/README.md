##  三 webpack

1 什么是Webpack 以及工作原理(Dependency Graph生成)

2 Webpack基础配置以及分析bundle.js

3 webpack配置： 加载器处理非JavaScript文件，插件用于扩展Webpack功能。

```json
# 一编译与打包

## 1 mode不同选项的区别
依据环境进行动态调整

## 2 JS处理 =》基础配置

## 3 public静态文件处理：
- HtmlWebpackPlugin：index.html 
- CopyWebpackPlugin：favicon.ico,robots.txt,...

## 4 css处理（执行循序右到左，分开写保证性能）
- css-loader工作原理： CSS模块化
- style-loader工作原理
- postcss-loader (postcss.config.js)： cssnano，postcss-preset-env（autoprefixer）
- .scss文件：sass，sass-loader

## 5 babel：三者的工作原理
- @babel/core 
- @babel/preset-env ： 理解core-js提供的Polyfill
- babel-loader

## 6 ts处理
- typescript 
- ts-loader 

@babel/preset-typescript

## 7 react
@babel/preset-react


# 二开发与优化

1 http服务（plugins）
- webpack-dev-server： Hot Module Replacement（HMR），自动刷新。 
- 工作原理：为什么可以在不写入到dist文件，能够自动刷新页面。
- file协议和http协议。本地文件加载 ES6 模块时遇到的 CORS 错误

注意：不要显式调用：HotModuleReplacementPlugin 会出现冲突。 static 不需要配置监听src和dist，会默认从entry调用。


2 Source Maps
- 选择mode
- 配置devtool： bundle.js.map文件


3 按需加载
- 代码分割（Code Splitting）：动态导入（Dynamic Imports），分割点（Split Points），懒加载（Lazy Loading）
- output.chunkFilename


# 三 测试
## 配置Jest



# 四部署

```



思考问题：

1 为什么需要把type="module" 放入script声明。

2 加载器：理解加载器以及加载器的作用和配置。理解：浏览器版本browserslist: package.json。 （npx browserslist）

3  babel配置过程中的presets 和 plugins

4  配置%PUBLIC_URL%

5 import style from './style' 问题

- 方法1:修改webpack配置
- 方法2:命名法： .module.css.  既可以实现css的模块化

6 autoprefixer 问题 => 使用代替。 前缀问题

7 配置本地的环境.env。 依据这个进行区分 production

8 多页面应用（MPA）

9 如何自己实现Webpack打包工具