// example
let obj2 = {
  name: "xiaoyao",
  sorts: [1, 2, 3],
  objItem: {
    age: 5,
  },
  fun1() {
    console.log(1);
  },
};

let obj1 = {};

// obj2 拷贝进 obj1
function deepCopy(obj1, obj2) {
  for (var key in obj2) {
    var item = obj2[key];
    if (item instanceof Array) {
      var arr = [];
      deepCopy(arr, item);
      obj1[key] = arr;
    } else if (item instanceof Object) {
      var obj = {};
      deepCopy(obj, item);
      obj1[key] = obj;
    } else if (item instanceof Function) {
      obj1[key] = new Function("return " + item.toString())();
    } else {
      obj1[key] = obj2[key];
    }
  }
}

deepCopy(obj1, obj2);
console.log(obj1);
