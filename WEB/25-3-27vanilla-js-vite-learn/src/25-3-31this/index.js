// this是指函数运行时产生的对象，词法作用域（定义时决定，包裹的环境） VS 运行时决定

/**
 * 
 */

const obj = {
    name: 'Alice',
    greet: function () {
        console.log(this.name);
    }
};

obj.greet();
// const greetFunc = obj.greet;
// greetFunc();


/**
 * Q2: setTimeout问题
 */

const person1 = {
    age: 30,
    growOld: function () {
        setTimeout(function () {
            this.age++;
            console.log(this.age);
        }, 1000);
    }
};

const person2 = {
    age: 30,
    growOld: function () {
        setTimeout(() => {
            this.age++;
            console.log(this.age);
        }, 1000);
    }
};

const person3 = {
    age: 30,
    growOld: () => {
        setTimeout(() => {
            this.age++;
            console.log(this.age);
        }, 1000);
    }
};
person1.growOld();
// person2.growOld();
// person3.growOld();

/**
 * Q3 : new： this永远指向构造的实例
 */

function Person(name) {
    this.name = name;
    this.sayHi = () => {
        console.log(`Hi, I'm ${this.name}`);
    };
    this.sayHi1 = function () {
        console.log('sayHi1');
    }
}

const p1 = new Person('Charlie');
const hiFunc = p1.sayHi;
hiFunc();

/**
 * DOM click handler
 */

class Counter {
    constructor() {
        this.count = 0;
    }

    handleClick() {
        this.count++;
        console.log(this.count);
    }
}

const counter = new Counter();
counter.handleClick();
const detaChed = counter.handleClick;
detaChed();
// document.querySelector('button').addEventListener('click', counter.handleClick);

