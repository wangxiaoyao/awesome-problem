function searchMaxPrefix(arr) {
  for (let i = 0; i < arr[0].length; i++) {
    let char = arr[0][i];
    let str = "";
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].startsWith(char)) {
        let str = arr[0].split(0, i - 1);
        return str;
      } else {
        return "";
      }
    }
  }
}

// let arr = ["dog", "racecar", "car"];
let arr1 = ["flower", "flow", "flight"];

console.log(searchMaxPrefix(arr1));
