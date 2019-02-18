# express框架 
## 文档
   [文档](http://www.expressjs.com.cn/)
## 基本使用
```
const express = require('express')
const path = require('path')

const app = express()
// 配置web容器，提供静态文件服务
app.use(express.static(path.resolve(__dirname,'../client')))
app.get('/',(ree,res)=>{
    res.send('hello express 框架')
})
// 配置虚拟主机
app.listen("3000","www.nodejs.com",()=>{
    console.log('listen port at 3000...')
})
```
## 静态资源服务
   1. app.use(path.resolve(__dirname,'../client'))
   2. app.use('/static',path.resolve(__dirname,'../client'))
   3. 托管多个文件夹：
      app.use(express.static('public')); app.use(express.static('files'))
   4. 存放静态文件的目录名不会出现在 URL 中，下面的代码不会生效
   ```
      app.use('/static/js/index.js',(req,resp)=>{
          resp.send('hello nodejs')
      })
   ```
## 路由
   1. app.METHOD(PATH, HANDLER)
   2. 例子
   ```
    app.get('/', function (req, res) {
        res.send('Hello World!')
    })
    app.post('/', function (req, res) {
        res.send('Got a POST request')
    })
    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user')
    })
    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user')
    })
   ```
   3. querystring不是路由的一部分
   4. 路由的模糊匹配
   5. 动态参数
   ```
   客户端请求地址：/user/laoxie/city/guangzhou
   服务端匹配: app.use('/user/:username/city/:city',(req,resp)=>{
       const params = req.params
   })
   ```
   6. 路由回调
   ```
   单个回调：
      app.get('/example/a', function (req, res) {
          res.send('Hello from A!')
      })
   多个回调：
      app.get('/example/b', function (req, res, next) {
          console.log('the response will be sent by the next function ...')
          next()
      }, function (req, res) {
            res.send('Hello from B!')
      })


      var cb0 = function (req, res, next) {
          console.log('CB0')
          next()
      }
      var cb1 = function (req, res, next) {
          console.log('CB1')
          next()
      }
      var cb2 = function (req, res) {
          res.send('Hello from C!')
      }
      app.get('/example/c', [cb0, cb1, cb2])
   ```
   7. app.route()
   ```
   app.route('/book')
       .get(function (req, res) {
          res.send('Get a random book')
       })
       .post(function (req, res) {
          res.send('Add a book')
       })
       .put(function (req, res) {
          res.send('Update the book')
       })
   ```
   8. express.Router: 路由模块
   ```
   文件：bird.js

   var express = require('express')
   var router = express.Router()
   // 当前模块的所有请求都会调用这个回调
   router.use(function timeLog (req, res, next) {
       console.log('Time: ', Date.now())
       next()
   })
   // define the home page route
   router.get('/', function (req, res) {
      res.send('Birds home page')
   })
   // define the about route
   router.get('/about', function (req, res) {
      res.send('About birds')
   })
   module.exports = router

   文件：app.js
   cosnt router = require('./router/bird')
   app.use('/bird',router)
   ```
   9. 处理404响应
   ```
    app.use(function (req, res, next) {
        res.status(404).send("Sorry can't find that!")
    })
   ```
## 中间件
   1. 内置中间件：express.static()，express唯一内置的中间件
   2. 自定义中间件：app.use([url]，function(req,resp,next)) ->响应路由的中间件
   ```
var express = require('express');
var app = express();
  
app.use(function(request,response,next){
 if(request.url === '/'){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.end("This is home\n");
 } else {
  next();
 }
})
app.use(function(request,response,next){
 if(request.url === '/about'){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.end("This is about\n");
 } else {
  next();
 }
})
app.use(function(request,response,next){
 response.writeHead(404,{"Content-Type":"text/plain"});
 response.end("404 not found!\n");
})
app.listen(1234,'localhost');
   ```
   3. 第三方中间件
   ```
   body-parser ：解析请求体中的数据，并将其保存为Request对象的body属性。

   cookie-parser ：解析客户端cookie中的数据，并将其保存为Request对象的cookie属性

   express-session ：解析服务端生成的sessionid对应的session数据，并将其保存为Request对象的session属性
   ```
## request对象
## response对象
## RESTful设计规范
   [文档](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)