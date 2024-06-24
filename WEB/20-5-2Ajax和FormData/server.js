let http = require("http");
let fs = require("fs");
let url = require("url");
const querystring = require("querystring");

function getFileName(str, locationStr) {
  let posStartName = str.indexOf(locationStr) + locationStr.length + 1;
  let fileNamelength = str.slice(posStartName).indexOf('"');
  let fileName = str.slice(posStartName, posStartName + fileNamelength);
  return fileName;
}
function getFileVal(str) {
  let posStartVal = str.indexOf("\r\n\r\n") + 4;
  fileVal = str.slice(posStartVal, str.length - 2);
  return fileVal;
}

function testFun(request, response) {
  console.log("请求来了");
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 域名之后所有url:request.url
  console.log(decodeURIComponent(request.url));
  // 路径
  let pathname = url.parse(request.url).pathname;

  // get的逻辑是：1 有请求数据，返回请求数据 2 没有请求数据，返回一个json 3 请求key为2，返回图像的base64值
  if (pathname === "/get") {
    // ？后的参数:仅针对get的处理
    let params = decodeURIComponent(url.parse(request.url).query);
    let paramsObj = JSON.parse(params);
    if (params === "null") {
      response.writeHead(200, {
        "Content-Type": "application/json,charset:utf-8",
      });
      let readStr = fs.ReadStream("./statics/data.json");
      readStr.pipe(response);
    } else {
      if (paramsObj.key === 2) {
        var stream = fs.ReadStream("./statics/7.jpeg");
        var responseData = [];
        if (stream) {
          stream.on("data", function (chunk) {
            responseData.push(chunk);
          });
          stream.on("end", function () {
            var finalData64 = Buffer.concat(responseData).toString("base64");
            let jsonData = {};
            jsonData.data = finalData64;
            jsonData.success = true;
            response.write(JSON.stringify(jsonData));
            response.end();
          });
        }
      } else {
        response.writeHead(200, {
          "Content-Type": "application/json,charset:utf-8",
        });
        response.end(params);
      }
    }
  } else if (pathname === "/post") {
    // 二进制文件一定要将将请求编码设置为binary
    request.setEncoding("binary");
    // 获取formdata表单的边界。
    const boundary = request.headers["content-type"]
      .split("; ")[1]
      .replace("boundary=", "--");
    // 不要使用官方推荐的数组，会导致图片模糊
    let data = "";
    // let data = [];
    request.on("error", (err) => {
      console.log(err);
    });
    request.on("data", (chunk) => {
      data += chunk;
      // data.push(chunk);
    });
    request.on("end", () => {
      // 普通表单的返回对象
      let simpleObj = {};
      // 除掉尾部的边界
      let pos = data.indexOf(boundary + "--");
      let newdata = data.slice(0, pos);
      let arr = newdata.split(boundary + "\r\n");
      //除掉首个数组
      arr.shift();
      // console.log(arr);
      for (let i = 0; i < arr.length; i++) {
        // 处理file之图片
        if (arr[i].indexOf("Content-Type: image") !== -1) {
          // 获取文件名
          let filePicName = "";
          let filePicVal = "";
          if (arr[i].indexOf("filename=") !== -1) {
            filePicName = getFileName(arr[i], "filename=");
          }
          // 获取值
          if (arr[i].indexOf("\r\n\r\n") !== -1) {
            filePicVal = getFileVal(arr[i]);
          }
          // 一定要转为二进制进行保存
          const bufferFileData = new Buffer.from(filePicVal, "binary");
          fs.writeFile(filePicName, bufferFileData, function (err) {
            response.end("success");
          });
        }
        // 处理file之文本文件
        if (arr[i].indexOf("Content-Type: text") !== -1) {
          // 获取文件名
          let fileTextName = "";
          let fileTextVal = "";
          if (arr[i].indexOf("filename=") !== -1) {
            fileTextName = getFileName(arr[i], "filename=");
          }
          // 获取值
          if (arr[i].indexOf("\r\n\r\n") !== -1) {
            fileTextVal = getFileVal(arr[i]);
          }
          // 文本文件也需要转为二进制
          const bufferFileData = Buffer.from(fileTextVal, "binary");
          fs.writeFile(fileTextName, bufferFileData, function (err) {
            response.end("success");
          });
        }
        // 普通表单
        if (arr[i].indexOf("Content-Type") == -1) {
          let fileFormKey = "";
          let fileFormVal = "";
          // key
          if (arr[i].indexOf("name=") !== -1) {
            fileFormKey = getFileName(arr[i], "name=");
          }
          // 获取值
          if (arr[i].indexOf("\r\n\r\n") !== -1) {
            fileFormVal = getFileVal(arr[i]);
          }
          // 由于我们已经设置请求为：二进制。所以需要将其转为Buffer的二进制后再转字符串(为了让大家看的更明白就不合并了)
          const StrFileFormKey = Buffer.from(fileFormKey, "binary").toString();
          const StrFileFormVal = Buffer.from(fileFormVal, "binary").toString();
          simpleObj[StrFileFormKey] = StrFileFormVal;
        }
      }
      // 返回普通表单的数据
      response.end(JSON.stringify(simpleObj));
    });
  }
}

let server = http.createServer(testFun);

server.listen("7777", "127.0.0.1");
console.log("7777端口运行");
