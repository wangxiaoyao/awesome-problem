// 合成函数
const compose = (...fns) => {
  return (arg) => {
    return fns.reduce((pre, cur) => cur(pre), arg);
  };
};

// 获取时间
const getCurTime = () => new Date();
// 控制台
const clear = () => console.clear();
const log = (mes) => console.log(mes);
const display = (target) => (time) => target(time);

// data对象序列化
const serializeClockTime = (date) => {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

// 小时的处理
const civilianHours = (time) => ({
  ...time,
  hours: time.hours >= 12 ? time.hours - 12 : time.hours,
});
// 上午还是下午
const appendAMPM = (time) => ({
  ...time,
  ampm: time.hours >= 12 ? "PM" : "AM",
});
// 转换小时
const convertToTime = (time) => compose(appendAMPM, civilianHours)(time);

// 补0操作
const prependZero = (key) => (time) => ({
  ...time,
  [key]: time[key] < 10 ? "0" + time[key] : time[key],
});

const doubleShow = (time) =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(time);

// 格式化
const formatClockTime = (format) => (time) =>
  format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

const startTicking = () => {
  setInterval(() => {
    compose(
      clear,
      getCurTime,
      serializeClockTime,
      convertToTime,
      doubleShow,
      formatClockTime("hh:mm:ss tt"),
      display(log)
    )();
  }, 1000);
};
startTicking();
