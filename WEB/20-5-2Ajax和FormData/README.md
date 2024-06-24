## 原生实现ajax和Node的FormData

> 供大家学习使用

原生实现：ajax以及node后端http服务器。 打开文件后，运行http服务

```
node server.js
```

### 一：get请求情况

>  文件《1indexGet.html》 来运行get请求情况

#### 1 简单点击获取数据：

1 有data的情况：get请求带一个对象。发送给服务器，服务器返回这个对象

重点：

- 1 客户端：ajax使用JSON封装data，url 使用encodeURIComponent处理

- 2 服务端：url.parse 这个库来获取URL，并使用decodeURIComponent解压处理。解压JSON

2 没有data的情况。get请求没有带对象。返回服务器的一个json数据

重点：本地读取数据，利用管道返回

3 获取图片(二进制)：

获取 图片的 data:base64的URI , （注意发送的对象中：key===2）

重点：

- 1 服务器需要将Buffer转base64字符串
- 2 将此字符串添加到对象，转JSON返回

### 二：post发送情况

>  文件《1indexPost.html》 来运行post请求情况

1 非表单数据：

首先设置发送的文件类型：

```
ContentType: "application/x-www-form-urlencoded",
```

重点：

- 1 Buffer.concat(data).toString() ， 需要把String分割为对象。除去{}，除去",否则使用JSON包裹会多出引号。对象转JSON服务器返回


2 表单数据

- 1 首先表单自带文件类型：

```
ContentType: "multipart/form-data",
```

- 2 表单不论有没有二进制文件，都设置请求编码为二进制

```
request.setEncoding("binary");
```

- 3 因为是二进制，data接收需要用字符串，不能使用数组

- 4 依据http的相关字段，判断二进制类型，分别处理: 一般表单数据， file类型的图片数据，file类型的文件类型数据，file类型的视频数据等等

- 5 由于在请求request中定义了二进制。所以接收时，Buffer必须将其转为二进制接收。然后写入服务器本地。否则中文会乱码，图片会无法打开

```
Buffer.from(data).toString("base64")
```

## 注：get和post区别

1. Get是不安全的，传输数据放在请求的URL中；传送的数据量较小，这主要是因为受URL长度限制的所有操作对用户来说都是不可见的。

2 Post传送的数据，封装在请求体中：除非后端做限制。

3 Get限制Form表单的数据集的值必须为ASCII字符；而Post支持整个ISO10646字符集。

4  Get执行效率却比Post方法好。Get是form提交的默认方法。



