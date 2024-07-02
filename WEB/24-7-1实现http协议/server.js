// node.js 分别创建http的请求和http服务器
// 一：创建http服务器
let http = require('node:http');

const port = 50000;

const options = {
    // keepAlive: true,
    // requestTimeout: 400000,
};

let server = http.createServer(options, (req, res) => {
    console.log(req.method, req.url);

    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // 处理预检请求
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method == 'GET' && req.url == '/') {
        res.end('hello world')
    }
    if (req.method == 'GET' && req.url == '/home') {
        res.end('hello home')
    }
})


server.listen(port, () => {
    console.log('端口50000正在被监听');
})