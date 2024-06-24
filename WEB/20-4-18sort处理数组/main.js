// ## 数值类型从小到大。 a2-a1 就是从大到小
function sortName(a1,a2){
  return a1-a2
}
var arr1= [11,2,23,4,5];
console.log(arr1);


// ## 随机排序数组
var arr2 = [1,2,3,4,5];
arr2.sort(function(){
  return Math.random() - 0.5;
});
console.log(arr2);



// ##  对象属性排序

var a = [
    {"value": "1" , "name": "xiaoyao1"},
    {"value": "3" , "name": "xiaoyao3"},
    {"value": "2" , "name": "xiaoyao2"}
];

function compara(property){
    return function(obj1,obj2){
        val1 = obj1[property];
        val2 = obj2[property];
        if (val1 < val2) {
            return -1;
        }else if(val1 >val2){
            return 1;
        }else{
            return 0;
        }
    };
}
console.log(a.sort(compara('value')));