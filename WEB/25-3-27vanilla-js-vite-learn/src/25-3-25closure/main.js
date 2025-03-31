/**
 * Q1: 考察闭包，函数作用域，块作用域，改造下面的代码，使之输出 0-9。方式越多越好。
 */
// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

/**
 * Q2 实现函数 实现一个add函数，使得add(1)(2)(3)的值为6。 infinite chaining，implicit type coercion
 */

const createAddFun = (val) => {
    // 闭包存储
    let arrStorage = [];
    arrStorage.push(val);

    let addresultFun = function (newVal) {
        arrStorage.push(newVal);
        return addresultFun;
    };
    addresultFun.toString = () => {
        return arrStorage.reduce((acc, cur) => acc += cur, 0);
    }
    return addresultFun;
}
console.log("Q2: ", createAddFun(1)(2)(3).toString());

function add(x) {
    let sum = x;
    function inner(y) {
        sum += y;
        return inner;
    }
    inner.toString = function () {
        return sum;
    };
    return inner;
}

/**
 * Q3 实现 (5).add(4).minus(3)的值为：6。 this问题，prototype,class封装作用域库
 */

// const prototypeFun = () => {
        // 不能使用箭头函数。
//     Number.prototype.add = function (val) {
//         if (typeof this === "number" && typeof val === "number") {
//             return Number(this + val)
//         }
//     }
//     Number.prototype.minus = function (val) {
//         if (typeof this === "number" && typeof val === "number") {
//             return Number(this - val)
//         }
//     }
//     console.log((5).add(4).minus(3).add(4));
// }


class Calculator {
    constructor(initialValue) {
        this.result = initialValue;
    }
    // 不等于箭头函数写法。而是ES6写法
    update(val, operator) {
        if (typeof val !== 'number') throw new TypeError('Argument must be a number');

        switch (operator) {
            case 'add':
                this.result += val;
                break;
            case 'minus':
                this.result -= val;
                break;
        }
        return this;
    }

    add(val) {
        return this.update(val, 'add');
    }

    minus(val) {
        return this.update(val, 'minus');
    }

    toResult() {
        return this.result;
    }

    valueOf() {
        return this.result;
    }

    toString() {
        return String(this.result);
    }
}

let calc = new Calculator(5);

// calc.add(4).minus(3) 返回的是一个对象。
console.log("Q3:",calc.add(4).minus(3).toResult());




