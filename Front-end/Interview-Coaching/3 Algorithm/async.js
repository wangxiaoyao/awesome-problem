/**
 * Q1: 实现一个sleep函数，1000毫秒后执行下一步。
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


/**
 * Q2: 请实现一个 Promise.all 方法，要求能够处理多个异步任务并返回它们的结果。
 */

const myPromiseAll = (promises) => {
    if (!Array.isArray(promises)) {
        throw new TypeError("Argument must be an array");
    }

    return new Promise((resolve, reject) => {
        let count = 0;
        let result = new Array(promises.length);
        // 确保第一个err
        let called = false;
        if (promises.length === 0) return resolve([])

        promises.forEach((p, i) => {
            // 内置对象的静态方法
            Promise.resolve(p)
                .then((res) => {
                    if (called) return;
                    result[i] = res;
                    count++
                    if (count === promises.length) {
                        resolve(result);
                    }
                })
                .catch((err) => {
                    if (called) return;
                    called = ture;
                    reject(err)
                })
        })

    })

}

myPromiseAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
]).then(res => {
    console.log(res) // [1, 2, 3]
})
