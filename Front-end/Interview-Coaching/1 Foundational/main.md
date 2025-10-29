[TOC]

### 1 解释浏览器从输入 URL 到页面呈现的完整过程，并指出关键性能指标的触发阶段

```
一、网络阶段（把字节拿到手）

1 地址栏与导航: 
- 判断是搜索还是导航： 
如果是关键词：走默认的搜索引擎。 
如果是有效的URL/域名： 则会向站点发起请求。
		=> 协议选择（HSTS）：
		方案1 浏览器在发送任何网络请求之前，会检查本地 HSTS 缓存，发现域名 A 在列表中。浏览器会内部自动将请求协议升级为 https://。  
		方案2 用户自己在浏览器设置。只能使用https的协议

        => 是否选择SW接管：如该站已注册，导航请求会先被SW的fetch事件拦截：命中缓存走Cache API。否则继续网络，并按照策略写入缓存
			
额外补充：		
1 HSTS 缓存记录： 当用户请求A网站（http://www.a.com），浏览器会开启http请求，如何A网站支持https，那么服务器会返回重定向301/302，引导浏览器/用户重新使用https请求 https://www.a.com。建立连接。服务器返回响应头：Strict-Transport-Security： max-age 网站强制要求https的时间 / includeSubDomains 此网站子域名。浏览器将其进行记录用于后续访问。

2 Service Worker（SW）： 独立的JS脚本（网页互相独立），PWA技术。
- 首次访问某网站一定走服务器：浏览器里还没此 SW 。页面加载完后才有机会注册 SW。
- 调用过 navigator.serviceWorker.register('/sw.js', { scope: '/' })，浏览器把注册信息（scope、脚本 URL、状态）持久化到本地。以后每次你访问 A.com 的某个 URL，浏览器都会在同源的注册表里找“最长前缀匹配的 scope”，若对应的 active worker 存在，就让它控制这次导航。（使用index.html: 主页面，负责注册 Service Worker。sw.js: Service Worker 脚本，实现预缓存和网络优先/回退缓存策略。）

查看注册情况：Chrome DevTools → Application → Service Workers

2 连接建立：
- DNS 解析（域名解析为ip的过程）：浏览器缓存 → 操作系统 DNS 缓存 → 路由器/本地 DNS → 运营商/公共 DNS（如 1.1.1.1/8.8.8.8）。
- TCP(HTTP/1.1/2)三次握手 


3 请求与响应：
- 发送 HTTP 请求（可能经 CDN/代理）。
- 命中 HTTP 缓存则直接返回；否则服务端流式返回 HTML。



二、渲染阶段（把字节变成像素）

1 解析与预加载
- HTML 流式解析 → 生成 DOM。
- 预加载扫描器并行发现 <link rel=preload>、CSS、JS、图片、字体 等外链。
- <script>的 async/defer 

2 构建样式与布局
- 下载并解析 CSS → CSSOM（CSS 是渲染阻塞资源）。
- 计算样式（style）、合成 Render Tree（DOM + CSSOM）。
- 布局（layout，计算几何信息），然后绘制（paint）与合成（composite，GPU 合成多个图层）。

三、交互阶段（从能看变成“好点”）

1 脚本执行与事件循环
- 解析/编译/执行 JS（长任务（>50ms）会占用主线程）
- 事件循环进入稳定态，监听器就绪，页面可快速响应输入。
```

```
性能指标 与 阶段 （后一种指标都需要前一种指标的优化。）

1 网络阶段

TTFB（Time to First Byte）：浏览器发出请求 → 收到响应的第一个字节的事件（服务器处理请求和响应的速度） = 网络延迟 + 服务器处理时间 + 响应时间
	- 网络：HTTP/2，CDN 缓存，cache-control
	- 服务器：服务器性能和主机配置，优化数据库的查询，Redis服务器缓存。



2 渲染阶段

FCP（First Contentful Paint）：首次把非空白内容（文字/图/非空 SVG/Canvas）画到屏幕的时间。
	- 消除资源阻塞： 
	   css：css提及压缩，css拆分为：关键css（Critical CSS）和 非关键css。 关键css内联在 <style> 标签中，非关键css：使用外部请求<link rel="stylesheet" href="non-critical-styles.css">
	   js：对于不依赖DOM的脚本：使用async 或者 defer （三者区别）
	- 资源预加载： preload <link rel="preload" href="/font.woff2" as="font" crossorigin>
	- 优化资源：图片优化（webp，可视区域懒加载Intersection Observer API），
	- 启用SSR： 将首次渲染工作从客户端（浏览器）移动到了服务器端。渲染成包含完整内容的 HTML 字符串。而传统的CSR 为空壳div root，需要等待：js下载和数据驱动  以及  流式传输 (Streaming SSR)：服务器在处理数据或渲染复杂组件时，不等整个页面生成完毕，就将已准备好的 HTML 部分流式传输给客户端。


LCP（Largest Contentful Paint）：首屏视口内最大的内容元素（大图/大标题/海报）完成绘制的时间
	- 资源预加载： preload
	- 优化资源：图片优化


CLS（Cumulative Layout Shift）：加载与渲染过程中可见内容元素意外位移的综合（布局位移）：网站视觉稳定性。 比如：当图片加载完成后，它会突然挤压或推开周围的内容。
	- 图像和视频始终设置宽高（包裹一个）
	- 设置占位符
	- 动画使用：transform 属性，而不是 top left导致重排



3 交互阶段

TTI（Time to Interactive）：衡量了页面从开始加载到用户可以可靠地与页面元素进行交互所需的时间。（1 FCP结束 2 事件处理程序注册 3 主线程5s内没有长任务）
	- 优化JS：Code Splitting按需加载 / Tree-Shaking移除未使用
	- 分解长任务 (Break Up Long Tasks)： >50ms 的JS运行视为长任务。setTimeout/ queueMicrotask / requestIdleCallback 进行异步任务的分解。
	- Web Workers：将计算密集型任务移出主线程。使用Web Workers的独立线程


INP（Interaction to Next Paint）：真实用户交互（点击/输入/拖拽）到下一帧渲染完成的时间。 考察响应用户的操作的反应时间。 解决主线程阻塞问题。
	- 分解长任务：同上
	- 防抖和节流
	- Web Workers：同上
```



### 延伸问题：script 标签（三者区别）

```shell
默认情况：脚本的下载和执行都会导致页面停滞，阻塞Html的渲染
async：脚本下载：并行； 执行：立即停止 HTML 解析，先下载先执行。 并且JS是单线程，同一时间只会执行其中一个。 所以js文件应该是独立的功能模块，且彼此独立。
defer：脚本下载：并行； 执行：等待html解析完毕即 DOM 构建完成，在 DOMContentLoaded 事件触发前，按照书写顺序执行而不是看是否下载好。
```



### 2 JavaScript 中 var、let 和 const 有什么区别？


```
## 1 作用域（Scope） =》 scope.js

var：函数作用域(函数内的var 声明只在该函数内可见) 或 全局作用域（全局声明var在浏览器环境里会成为 window 的属性）

let / const：块级作用域（block scope）。
	- 任何一对花括号 { ... }（如 if、for、while、裸块、try/catch）内声明的变量，只在该块内有效；
	- 不会挂到 window（即使在全局脚本里）。


例子：
1 循环捕获：for (var i=0; i<3; i++) setTimeout(()=>console.log(i)) 输出 3,3,3；而用 let 会输出 0,1,2，因为 let 在每次迭代都会生成新的块级绑定。

2 全局污染：var x=1; 在非模块脚本中会产生 window.x，let/const 不会。


## 2 提升（Hoisting）与初始化（Initialization）

共同点：三者的声明名都会被编译阶段记录（即：都会变量“提升”）。


不同点：“初始化”：

var：初始化为 undefined。在声明语句之前访问变量不会抛错，而是得到 undefined

console.log(a); // undefined
var a = 10;


let / const：不会初始化。在真正执行到声明之前，这个名字处于暂时性死区（TDZ），任何读/写/typeof 都会抛 ReferenceError。

console.log(b); // ReferenceError（TDZ）
let b = 10;

typeof c;       // ReferenceError（TDZ 中 typeof 也会抛）
const c = 1;


## 3 赋值性、重复声明与只读语义

可重新赋值：

var：可重新赋值 ✅

let：可重新赋值 ✅

const：不可重新赋值 ❌（对基础类型是只读，对对象是“绑定只读、内部可变”）


const obj = { n: 1 };
obj.n = 2;     // ✅ 允许：修改的是对象内部属性
// obj = {}    // ❌ 不允许：试图给绑定本身重新赋值
```

```
题目：
var shadowing = 'hello'
function shadowingFn() {
    console.log('variable shadowing:',shadowing);
    var shadowing = 'world'
}
shadowingFn();
```





### 3 typescript： 补全AllowNull的类型

type A = number;
type B = string;
type C = { age: number; name: string };

const a1: AllowNull<A> = null; 
const a2: AllowNull<A> = 123; 
const b1: AllowNull<B> = null; 
const b2: AllowNull<B> = abc; 
const c1: AllowNull<C> = null; 
const c2: AllowNull<C> = {age: 1, name: abc};


```
type AllowNull<T> = T | null
```



### 4 为什么 Tree Shaking 必须使用 ES Modules。 （ Tree Shaking与按需引用）


```shell
## 概念

Tree Shaking 是一种**在打包阶段删除未被使用（dead code）**的技术：分析模块间依赖，只把实际被引用到的导出打进最终产物，从而减小体积、提升加载与执行效率。

主流打包器（如 webpack、Rollup、Rspack 等）集成这项技术。并把 Tree Shaking 设计建立在 ESM 的静态语法之上。

注意配置项： sideEffects
打包工具发现你在 index.js 中没有使用 global-config.js 的任何导出（export），它可能会错误地认为这个文件是“死代码”，并把它删除。结果： 你的全局配置和样式（副作用）消失了！所以需要配置：

"sideEffects": [
    "**/*.css", 
    "./src/global.js"
]
false就会删除所有未使用

egg：
// index.js 文件
import './global-config.js'; // 导入但没有使用任何导出
import { useTool } from './utils.js';

// global-config.js 文件
console.log('我正在运行！'); // <--- 这是一个副作用
document.body.style.backgroundColor = 'blue'; // <--- 这是一个副作用
window.GLOBAL_SETTING = true; // <--- 这是一个副作用

// utils.js 文件
export function useTool() { /* ... */ } // 纯函数


ESM 是 JavaScript 的官方模块系统，使用 import/export 语法。注意


## 原因


1 静态结构（statically analyzable）

CJS 的 require() 和 module.exports 在语义上是动态的（路径、导出形态、属性可变），打包器难以在不执行代码的情况下完全确定依赖与导出使用关系；可以在条件句，函数中执行。

ESM 的静态结构：import/export 在语法层面是静态的，编译时即可解析依赖与符号，而无需执行代码。使得“未使用导出”可以在构建期被可靠删除。必须在组件模块顶层，且不能在函数内部或条件句。

2 实时绑定（live bindings）： import 创建了对导出原始变量的"只读引用"。

ESM
// counter.js 
export let count = 0;
export function inc() { count++; }

// main.js 
import { count, inc } from './counter.js';
console.log('before:', count); // ⬅️ 这是“窗户”在看 counter.js 里的 count
inc();                          // 导出方把 count 改成了 count+1
console.log('after:', count);  // ⬅️ 同一扇窗户再看一次，看到的是最新值


CJS


## 实例

ESM
// math.js
export function add(a, b) { return a + b }
export function mul(a, b) { return a * b }

// app.js
import { add } from './math.js'
console.log(add(1, 2))       // 未使用的 mul 将在生产构建被移除


CJS
// math.cjs
exports.add = (a, b) => a + b
exports.mul = (a, b) => a * b

// app.cjs
const math = require('./math.cjs')   // 导入是“整个对象”，且 require 可动态
console.log(math.add(1, 2))          // 打包器很难在不执行的前提下断定 mul 永不被用

## 拓展问题：（按需引用的对比）

问：下面哪种导入更有利于 Tree Shaking，为什么？
A) import _ from 'lodash'
B) import { debounce } from 'lodash-es'


回答：
lodash 主包是 CommonJS，import _ from 'lodash' 等价于把整包作为一个对象引入，打包器很难可靠在构建期删除未用函数，常常把整套 lodash 都打进产物。

lodash-es 是 ES Modules 版本，import { debounce } from 'lodash-es' 属于静态命名导入，Vite/Rollup 能在编译期明确只用到了 debounce，从而仅打包该导出（Tree Shaking 生效）。


按需引用的方式:（对于CJS模块/难摇的库）不依赖于tree Shaking,开发者显示的引入子模块。从而把包切小
import debounce from 'lodash/debounce'

```