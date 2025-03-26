// checkData && checkData?.length !== 0 和 checkData?.length !== 0区别



/**
 * 面试题：
这里有四个函数，请说出执行他们的值。data是Array类型。code是一个boolean类型。
const replicaConfigFun1 = (data, code) => {
  if (code) {
    let result = '';
    return data.map(item => {
      result = item + 1
    });
  }
  return 1;
};

const replicaConfigFun2 = (data, code) => {
  if (code) {
    let result = '';
    return data.map(item => {
      return result = item + 1
    });
  }
  return 1;
};

const replicaConfigFun3 = (data, code) => {
  if (code) {
    let result = '';
    data.map(item => {
      return result = item + 1
    });
  }
  return 1;
};

const replicaConfigFun4 = (data, code) => {
  if (code) {
    let result = '';
    data.map(item => {
      return result = item + 1
    });
  }
};
 */


/**
 * 面试题：A是一个react组件：下面5种click的写法区别是什么？
<A onClick1={handleFun} />

<A onClick2={() =>handleFun()} />

<A onClick3={() =>handleFun(val)} />

<A onClick4={(val) =>handleFun(val)} />

<A onClick5={(val) =>handleFun(val,param)} />

 */

/**
 * 请实现一个 Promise.all 方法，要求能够处理多个异步任务并返回它们的结果。
 */


/**
 * 简单实现一个事件订阅机制，具有监听on 和 触发emit方法。class EventEmitter{ }
 */

/**
 * 区别：
let a = k || 1;
let a = k ?? 1; 
 */