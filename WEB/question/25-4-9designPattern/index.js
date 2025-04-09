// singleton： 一个类仅有一个实例
class Modal {
    static instance = null
    constructor(content) {
        if (Modal.instance) return Modal.instance;
        this.content = content;
        Modal.instance = this;
    }
}
let a = new Modal('first');
let a1 = new Modal('second');
console.log(a === a1);
console.log(a1.content);


// Observer Pattern（Subject - Observers）：1 对 多的关系
class Subject {
    constructor() {
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer) {
        this.subscribers.filter((item) => observer !== item)
    }

    emit(info) {
        this.subscribers.forEach((item) => item.update(info));
    }
}

class Observer {
    constructor(name) {
        this.name = name
    }
    update(info) {
        console.log(`${this.name} received ${info}`);
    }
}

const newsLetter = new Subject();

const sub1 = new Observer('sub1');
const sub2 = new Observer('sub2');
newsLetter.subscribe(sub1);
newsLetter.subscribe(sub2);

newsLetter.emit('message send!')


// Pub-Sub Pattern

class EventBus {
    constructor() {
        this.events = {}
    }
    subscribe(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = [];
        this.events[eventName].push(callback)
    }
    publish(eventName, info) {
        this.events[eventName].forEach(item => item(info))
    }
}

const bus = new EventBus();

// k1/k2 is subscriber to 'login'
const k1 = bus.subscribe('login', (info) => {
    console.log('k1: login event, receive info', info.user);
})
const k2 = bus.subscribe('login', (info) => {
    console.log('k2: login event, receive info', info.user);
})

bus.publish('login', { user: 'xiaoyao' })

