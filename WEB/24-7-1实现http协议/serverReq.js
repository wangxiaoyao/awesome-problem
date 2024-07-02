let http = require('node:http');

// 创建类: http.clientRequest实例。

// Authorization：Basic验证
const username = 'wangxiaoyao';
const password = '123';
const credentials = Buffer.from(`${username}:${password}`).toString('base64');

const options = {
    hostname: '127.0.0.1',
    port: 50000,
    path: '/home',
    method: 'GET',
    // headers: {
    //     'Host': '127.0.0.1:50001', // 让hostname成为代理服务器
    //     'Authorization': `Basic ${credentials}`
    // }
}

let req = http.request(options, (res) => {
    console.log('状态码：node有默认值',res.statusCode);

    let data = '';
    // .on监听函数：data，end，error 事件。
    res.on('data', (chunk) => {
        console.log('chunk', chunk);
        data += chunk
    })

    res.on('end', () => {
        console.log(data);
    })

    res.on('error', (error) => {
        console.log('接收响应出错', error);
    })
})

// 必须表达一个请求结束。
req.end();