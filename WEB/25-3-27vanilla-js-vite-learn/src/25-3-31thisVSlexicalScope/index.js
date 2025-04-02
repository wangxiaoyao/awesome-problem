// this:函数运行时产生的对象(Function’s context object)，regular function由运行时决定。at call time. !!! arrow function is determined by lexical scope

/**
 * Q1
 */

// const objQ1 = {
//     name: 'Alice',
//     greet: function () {
//         console.log('Q1:',this.name);
//     }
// };
const objQ1 = {
    name: 'Alice',
    greet: () => {
        console.log(this.name);
    }
};
// objQ1.greet();
// const greetFunc = objQ1.greet;
// greetFunc();



/**
 * Q2: setTimeout问题
 */

// const personQ2 = {
//     age: 30,
//     growOld: function () {
//         setTimeout(function () {
//             this.age++;
//             console.log(this.age);
//         }, 1000);
//     }
// };

const personQ2 = {
    age: 30,
    growOld: function () {
        setTimeout(() => {
            this.age++;
            console.log('Q2:', this.age);
        }, 1000);
    }
};

// const personQ2 = {
//     age: 30,
//     growOld: () => {
//         setTimeout(() => {
//             this.age++;
//             console.log(this.age);
//         }, 1000);
//     }
// };
personQ2.growOld();


/**
 * Q3 : new： this永远指向构造的实例
 */

function PersonQ3(name) {
    this.name = name;
    this.sayHi = () => {
        console.log(`Q3:Hi, I'm ${this.name}`);
    };
    // this.sayHi = function () {
    //     console.log(`Q3:Hi, I'm ${this.name}`);
    // }
}

const pQ3 = new PersonQ3('Charlie');
// pQ3.sayHi(); 
const hiFunc = pQ3.sayHi;
hiFunc();

// /**
//  * Q4 DOM click handler:  在regular function中，addEventListener 的调用者是 DOM元素，而不是class的instance的实例。
//  */

class Counter {
    constructor() {
        this.count = 0;
    }

    // handleClick() {
    //     this.count++;
    //     console.log('Q4:', this.count);
    // }
    handleClick = () => {
        this.count++;
        console.log('Q4:', this.count);
    }
}

const counter = new Counter();
// counter.handleClick();
// const detaChed = counter.handleClick;
// detaChed();
// document.querySelector('button').addEventListener('click', counter.handleClick);

/**
 * Q4 JS/python use lexical scope. other‘language dynamic scope
 */

let x = "global";
function printX() {
    console.log('Q4', x);
}
function run() {
    let x = "local";
    printX(); // what does this print?
}

run();


