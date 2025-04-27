// Q: 写一个深拷贝的函数。注意：function，RegExp，Date ：  原生：structuredClone

const deepCopy = (obj, cacheTemp = new WeakMap()) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 其他引用类型
  if (typeof obj === "function") return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);

  // 防止内循环 .self
  if (cacheTemp.has(obj)) return cacheTemp.get(obj);

  const result = Array.isArray(obj) ? [] : {};
  cacheTemp.set(obj, result);

  for (let key in obj) {
    // if (obj.hasOwnProperty(key)) {
    //   result[key] = deepCopy(obj[key], cacheTemp);
    // }
    // es2022
    if (Object.hasOwn(obj, key)) {
      result[key] = deepCopy(obj[key], cacheTemp);
    }
  }
  return result;
};

let testVal = {
  a: 1,
  b: function () {
    console.log(1);
  },
  c: [1, 2, { c1: 3 }],
};
testVal.self = testVal;

let testValCopy = deepCopy(testVal);

testValCopy.b();
console.log(testValCopy.self);


