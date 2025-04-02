/**
 * Q1: 实现一个sleep函数，意思是1000毫秒后执行下一步。
 */

function sleepCallback() {
    console.log('next');
}

// const sleep = (time, callback) => {
//     setTimeout(() => {
//         callback();
//     }, time)
// }
// sleep(1000, sleepCallback);


// Promise version: 不要在 sleep 中添加callback，从而将sleep和其他逻辑分离
// const sleep = (time) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, time)
//     })
// }
// sleep(1000).then(() => sleepCallback());


// async-await version
// const sleep = (time) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, time)
//     })
// }
// const outerFn = async (time) => {
//     await sleep(time);
//     sleepCallback();
// }
// outerFn(1000)


// Generator version
function* sleepGenerator(callback) {
    yield;
    callback();
}
const sleepbyGenerator = (time, callback) => {
    const sleepInstance = sleepGenerator(callback);
    sleepInstance.next();
    setTimeout(() => {
        sleepInstance.next();
    }, time)
}
sleepbyGenerator(1000, sleepCallback)
