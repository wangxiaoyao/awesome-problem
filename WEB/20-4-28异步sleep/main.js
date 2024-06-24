// 一般做法
// function sleep(delay) {
//   setTimeout(() => {
//     console.log("====================================");
//     console.log(1);
//     console.log("====================================");
//   }, delay);
// }

// Promise做法
// function sleep(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// }

// sleep(1000).then(() => {
//   console.log("1000秒后执行");
// });

// Generator做法
// function* sleep(delay) {
//   yield new Promise((resolve, reject) => {
//     setTimeout(resolve, delay);
//   });
// }

// sleep(1000)
//   .next()
//   .value.then(() => {
//     console.log("1000秒后执行");
//   });

// async/await实现
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function output() {
  let out = await sleep(2000);
  console.log("等上面执行结束后执行");
  return out;
}
output();
