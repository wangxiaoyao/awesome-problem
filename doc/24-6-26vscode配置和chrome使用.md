如何调试API 接口





增加 script：



  "adjust": "NODE_OPTIONS='--inspect' next dev",





1 配置 “” .vscode中



{

 "version": "0.2.0",

 "configurations": [

  {

   "type": "node",

   "request": "attach",

   "name": "Attach to Next.js Router Server",

   "port": 9230, // 使用 Next.js 路由调试器的端口

   "restart": true,

   "skipFiles": ["<node_internals>/**"],

   "sourceMaps": true,

   "outFiles": ["${workspaceFolder}/.next/**/*.js"],

   "cwd": "${workspaceFolder}"

  }

 ]

}



在源码中设置：debugger （点击行，设置断点无效）





2 运行 npm run adjust





3 点击运行 vscode的调试按钮：Debugger attached.





4 调试

1 curl http://localhost:3000/api/earthwork\?limit\=10\&offset\=0



或者浏览器





5 如果跳到其他文件。则断掉连接，重新连接
