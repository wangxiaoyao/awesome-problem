/*
- 1强制异步
*/
function myAjax(requestData) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    if (requestData.method.toLowerCase() === "get") {
      if (requestData.data == null) {
        xhr.open("get", requestData.url, true);
      } else {
        var jsonData = JSON.stringify(requestData.data);
        url = requestData.url + "?" + encodeURIComponent(jsonData, "utf-8");
        xhr.open("get", url, true);
      }
      xhr.send(null);
    } else if (requestData.method.toLowerCase() === "post") {
      xhr.open("post", requestData.url, true);
      // 表单让其自动设置
      if (Object.getPrototypeOf(requestData.data) !== FormData.prototype) {
        xhr.setRequestHeader("Content-Type", requestData.ContentType);
        data = JSON.stringify(requestData.data);
        xhr.send(data);
      } else {
        xhr.send(requestData.data);
      }
    }

    xhr.addEventListener(
      "readystatechange",
      () => {
        if (xhr.readyState === 4) {
          resolve(xhr.responseText);
        }
      },
      false
    );
  });
}
