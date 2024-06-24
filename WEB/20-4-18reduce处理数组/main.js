// 1 数组的值简单叠加： 此时循环第一次 pre = 1   cur = 2
var arr1 = [1,2,3];

let result1 = arr1.reduce((pre,cur,index,arr)=>{
  pre = pre+cur;
  return pre;
})
console.log(result1);


// 2 设置pre的初始值为{}, 那么循环第一次 pre = {}   cur = a
var arrString = 'abcdaabc';

var result2 = arrString.split('').reduce(function(res, cur) {
    res[cur] ? res[cur] ++ : res[cur] = 1
    return res;
}, {} )

console.log(result2)


function resolve(combiner, cur,index,arr) {
  combiner[cur] = combiner[cur] ? combiner[cur]+1 : 1;
  return combiner;
}
var result3 = arrString.split('').reduce(resolve, {});
console.log(result3);