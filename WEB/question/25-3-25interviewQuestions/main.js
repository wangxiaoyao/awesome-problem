
/** Q1: data：[1, 2, 3], code为true. 值为？
 * */
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
console.log('Q1:', replicaConfigFun4([1, 2, 3], true));



/**
 * 面试题：A是一个react组件：下面5种click的写法区别是什么？
<A onClick1={handleFun} />

<A onClick2={() =>handleFun()} />

<A onClick3={() =>handleFun(val)} />

<A onClick4={(val) =>handleFun(val)} />

<A onClick5={(val) =>handleFun(val,param)} />

 */


/**
 * 简单实现一个事件订阅机制，具有监听on 和 触发emit方法。class EventEmitter{ }
 */

