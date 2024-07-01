// node.js 分别创建http的请求和http服务器
// 一：创建http服务器
let http = require('node:http');

const ports = 50000;

let server = http.createServer({
    // keepAlive: true,
    // requestTimeout: 400000,
}, (req, res) => {
    console.log(req);
    if (req.method == 'GET' && req.url == '/') {
        console.log('res',res);
        res.end('hello world')
    }
    if (req.method == 'GET' && req.url == '/home') {
        res.end('hello home')
    }
})


server.listen(ports, () => {
    console.log('端口7000，被请求');
})






// 二：创建http请求



// 
