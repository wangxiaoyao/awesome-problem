// 1 题目
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");

// 2 考察点与讲解

/**

考察：Event Loop，同步任务、宏任务（Macro-tasks） 和 微任务（Micro-tasks） 的执行顺序。

执行过程：（单线程环境下的非阻塞执行模型）
1. 执行全局同步代码（进入调用栈）：Call Stack（调用栈）执行同步代码的栈结构，先进后出
2. 清空微任务队列（Microtask Queue），微任务优先）  ： Promise.then、MutationObserver、queueMicrotask。 
3  DOM 渲染时机：浏览器会在执行完一个宏任务、清空所有微任务后，尝试渲染页面（称为“渲染机会”）。requestAnimationFrame：它的回调会在渲染前执行，
3. 取一个宏任务执行（Task Queue 宏任务队列） ：setTimeout、setInterval、setImmediate、requestAnimationFrame、I/O 事件等。切记：一轮事件循环中最多执行一个宏任务
4. 再次清空 microtask 队列
5. 重复 3-4，直到所有任务完成 =》 Event Loop（事件循环）在主线程空闲时，从队列取任务并执行的机制。Web Worker：不共享主线程，不在当前事件循环中，使用独立的线程模型。

*/

// 3 参考答案:
/** 
script start
async1 start
async2
promise1
script end
async1 end
promise2
undefined =》 原因：REPL环境回显：在浏览器控制台（DevTools Console）这种交互式控制台会将“最后一个表达式/语句的求值结果”给你打印出来。测试：在控制台直接输入 console.log('x')也会出现两行
                   最后一个同步任务：console.log('script end')的结果：undefined。发生在：清空微，下一个宏任务（setTimeout 回调）之前。
setTimeout
*/

// 4 问题拓展1 =》 新生成的 async1 end 在 setTimeout 之前
async function async1() {
  console.log("async1 start");
  await async2();
  await async3();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

async function async3() {
  console.log("async3");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");

// 问题拓展2 =>  一轮事件循环中最多执行一个宏任务。 所以 m-in-T1 在 T2 之前。
console.log("S");

setTimeout(() => {
  console.log("T1");
  Promise.resolve().then(() => console.log("m-in-T1"));
}, 0);

Promise.resolve().then(() => {
  console.log("m1");
  queueMicrotask(() => console.log("m2"));
});

setTimeout(() => console.log("T2"), 0);

console.log("E");

// 问题拓展3: 微任务，宏任务，requestIdleCallback（RIC）

//   1 Promise： 当Promise已经settled后：resolve，reject，回调就会进入到微任务
Promise.resolve().then(() => console.log("P1"));

/** 2 queueMicrotask
 *  立即将callback放入微任务。 比setTimeout(...,0) 更快、时序更稳定。
 *  语法为：queueMicrotask(callback) 且不需要 .then。
 */
queueMicrotask(() => console.log(1));

/** 3 MutationObserver： 参见 mutationObserver.html
 * DOM 变更的“批量微任务回调”，所以插入：微任务的时机是DOM的变更
 * new MutationObserver 参数：mutationList：一组 MutationRecord，表示“这一次批量投递”里收集到的所有变更。observer 为 MutationObserver 实例本身
 * mo.observe 参数： 
    1 childList: boolean
    监听子节点的增删（不含属性/文本变更）。

    2 attributes: boolean
    监听属性变更（如 class、id 等）。

    3 characterData: boolean
    监听文本节点内容变更（如 textNode.data 变化）。
 */

/**
 * 4 requestIdleCallback 是异步，但即不是宏任务，也不是微任务。
 *   属于：空闲回调 (Idle Callback) 队列。 由浏览器判断“空闲”。见缝插针式：
  *  浏览器通常以每秒 60 帧 (60 FPS) 的速率刷新屏幕，每帧大约 16.6 毫秒。如果浏览器在处理完所有关键任务（如输入、动画、渲染）后，在 16.6 毫秒内还有剩余时间，这段时间就被认为是空闲时间。
 */