const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'src', req.url === '/' ? 'index.html' : req.url);
    // 判断扩展名
    let extname = path.extname(filePath);
    let contentType = 'text/html';
    // 处理静态资源
    switch (extname) {
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                res.writeHead(404);
                res.end('404 - Not Found');
            } else {
                res.writeHead(500);
                res.end('500 - Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});


let port = 3001;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})