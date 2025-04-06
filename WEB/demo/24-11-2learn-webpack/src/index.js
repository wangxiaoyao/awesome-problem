import { hello } from './hello';
import { moduleA } from './moduleA';
import { greet } from './moduleB';
import { greetTs } from './moduleC/index.ts';

import './style.css'

document.getElementById('root').innerHTML = hello();

moduleA()
greet('World');
console.log(greetTs('TypeScript'));