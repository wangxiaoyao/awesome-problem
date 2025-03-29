// Q: 给定字符串'abcdaabc'， 请输出对象：{a: 3, b: 2, c: 2, d: 1}。 a字符的个数是3，b的为2

/**
 * 1 如何动态给对象添加属性。 obj[arr[i]] 和 obj.arr[i] 区别
 * 2 如何使用reduce, 注意reduce的返回值
 */

// M1
// const stringCountToObject = (str) => {
//     const arr = str.split("");
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] in result) {
//             result[arr[i]] += 1
//         } else {
//             result[arr[i]] = 1;
//         }
//     }
//     return result;
// }

// M2
const stringCountToObject = (str) => [...str].reduce((acc, cur) => {
    acc[cur] = (acc[cur] ? acc[cur] : 0) + 1;
    return acc;
}, {})

const str = "abcdaabc";
console.log(stringCountToObject(str));



// Q:实现一个数组随机排序：等概率无偏的

/**
 *  M1:Fisher-Yates Shuffle 
 */




// Q:实现数组的排序。详细理解 V8 的 Timesort算法（小数组插入式排序）。下列执行顺序是什么？ 如何实现sort的从大到小的排序

let arr = [5, 3, 8, 11, 7,1,0,67,89];
// arr.sort((a, b) => {
//     console.log(`Comparing ${a} to ${b}`);
//     return a - b;
// });

// 从小到大排序
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
let imitationSort = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            newArr.push(arr[0]);
        } else {

            // 二分法
            console.log(newArr);
            let middlePosition = newArr.length % 2 === 0 ? newArr.length / 2 : (newArr.length - 1) / 2;
            console.log(middlePosition);

            if (arr[i] >= newArr[middlePosition]) {
                let newArrlength = newArr.length;

                for (let k = middlePosition; k <= newArrlength; k++) {
                    if (arr[i] < newArr[k]) {
                        newArr.splice(k, 0, arr[i]);
                        break;
                    }

                    if (k === newArrlength) {
                        newArr.splice(k + 1, 0, arr[i]);
                    }
                }

            } else {
                for (let k = middlePosition; k >= 0; k--) {
                    if (arr[i] > newArr[k]) {
                        newArr.splice(k + 1, 0, arr[i]);
                        break;
                    }
                    if (k === 0) {
                        newArr.splice(0, 0, arr[i]);
                    }
                }
            }
        }
    }
    return newArr;
}
console.log(imitationSort(arr));






