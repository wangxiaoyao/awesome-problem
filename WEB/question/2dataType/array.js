// Q: 给定字符串'abcdaabc'， 请输出对象：{a: 3, b: 2, c: 2, d: 1}。 a字符的个数是3，b的为2

/**
 * 1 如何动态给对象添加属性。 obj[arr[i]] 和 obj.arr[i] 区别
 * 2 如何使用reduce, 注意reduce的返回值
 */

// M1
// const stringCountToObject = (str) => {
//     const arr = str.split("");
//     let result = {};
//     for (let i = 0; i < arr.length;i++) {
//         if (arr[i] in result) {
//             result[arr[i]] += 1
//         } else {
//             result[arr[i]] = 1;
//         }
//     }
//     return result;
// }

// M2
const stringCountToObject = (str) =>
  [...str].reduce((acc, cur) => {
    acc[cur] = (acc[cur] ? acc[cur] : 0) + 1;
    return acc;
  }, {});

const str = "abcdaabc";
console.log(stringCountToObject(str));

// Q:实现一个数组随机排序：等概率无偏的

/**
 *  M1:Fisher-Yates Shuffle
 */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // swap
  }
  return array;
}

// Q:实现数组的排序。详细理解 V8 的 Timesort算法（小数组插入式排序）。下列执行顺序是什么？ 如何实现sort的从大到小的排序

let arr = [5, 3, 8, 11, 7, 1, 0, 67, 89];
arr.sort((a, b) => {
  console.log(`Comparing ${a} to ${b}`);
  return a - b;
});

// 从小到大排序：常规
// let imitationSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let k = i + 1; k < arr.length; k++) {
//             if (arr[i] >= arr[k]) {
//                 let temp = arr[i];
//                 arr[i] = arr[k];
//                 arr[k] = temp;
//             }
//         }

//     }
//     return arr;
// }

// 二分法排序： 记住 newArr 是一个升序的数组。思考降序
const binarySearchIndex = (newArr, target) => {
  let left = 0;
  let right = newArr.length;
  let middlePostion;

  while (left < right) {
    middlePostion = Math.floor((left + right) / 2);
    if (target > newArr[middlePostion]) {
      left = middlePostion + 1;
    } else {
      right = middlePostion;
    }
  }
  return left;
};

const imitationSort = (arr) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    let leftVal = binarySearchIndex(newArr, arr[index]);
    newArr.splice(leftVal, 0, arr[index]);
  }
  return newArr;
};

console.log(imitationSort(arr));


