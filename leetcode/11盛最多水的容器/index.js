function moreWater(arr) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    let temp = [];
    let k = [];
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] > arr[i]) {
        k[j] = arr[i] * (j - i);
      } else {
        k[j] = arr[j] * (j - i);
      }
      temp.push(k[j]);
    }
    result[i] = Math.max(...temp);
  }
  return Math.max(...result);
}
let arr1 = [2, 3, 4, 5, 18, 17, 6];
console.log(moreWater(arr1));
