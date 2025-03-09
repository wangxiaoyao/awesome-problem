const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const generateEchart = require('./public/generateEchart')

// 创建服务器
const server = http.createServer((req, res) => {
    // 处理静态资源
    const staticFilePath = path.join(__dirname, 'public', req.url);
    // 判断路径存在并存在文件
    if (fs.existsSync(staticFilePath) && fs.lstatSync(staticFilePath).isFile()) {
        const ext = path.extname(req.url);
        const contentType = {
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
        }[ext] || 'text/plain';

        fs.readFile(staticFilePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
        return;
    }

    if (req.url === '/') {
        // 读取 EJS 模板
        fs.readFile(path.join(__dirname, 'views', 'index.ejs'), 'utf8', (err, template) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Server Error');
                return;
            }

            // 方案二
            const echartJsonOption = {
                width: 800,
                height: 600,
                title: {
                    text: 'echart-SSR-html+json渲染图'
                },
                xAxis: {
                    data: ['A', 'B', 'C']
                },
                yAxis: {},
                series: {
                    name: 'series',
                    type: 'bar',
                    data: []
                }
            }

            // 传递数据给 EJS 模板进行渲染。第一种方案的：chartImage 方案二：echartJsonOption的值
            const data = {
                title: 'Native Node.js Server-Side Rendering',
                message: 'Hello from SSR!',
                chartImage: generateEchart(),
                echartJsonOption: echartJsonOption
            };
            const renderedHtml = ejs.render(template, data);
            // 返回渲染后的 HTML 页面
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(renderedHtml);
        });
        return;
    }

    if (req.url === '/api/chart-data' && req.method === 'GET') {
        const chartData = [40, 50, 60];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(chartData));
        return;
    }

    // 处理 404 错误
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found');

});

// 监听端口
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
