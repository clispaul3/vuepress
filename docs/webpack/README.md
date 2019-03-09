# webpack
## 基本介绍
  + 定义：将所有的脚本、样式、图片、资源等进行打包压缩
  + 默认只能打包压缩 js 文件，如果需要压缩其他的文件，需要配置第三方的 loader 或 plugin
  + [文档](https://www.webpackjs.com/)
  + 作用
    1. <span style="color:red;font-weight:bold">代码打包</span>
    2. <span style="color:red;font-weight:bold">代码压缩</span>
    3. <span style="color:red;font-weight:bold">语法转换</span>
    4. <span style="color:red;font-weight:bold">热更新</span>
    5. <span style="font-weight:bold">代码分割</span>
    6. <span style="font-weight:bold">代码校验</span>
    7. <span style="font-weight:bold">自动发布</span>
## 语法转换
  + 可以将 commonJS 的模块语法转换成被浏览器识别的语法
  + 可以将 ES6 的模块化语法转换成被浏览器识别的语法
  + webpack 在编译时，不会检测 js 文件中的变量是否定义过，但编译后的代码在执行时会报错
  + webpack 在编译时，会严格检测 webpack.config.js 中的变量是否定义过
  ```javascript
  //   src/index.js
   const React = require('react')
   window.React = React // 这种语法在 webpack.config.js 中会报错，window is not defined，在非配置文件中可以使用window对象
   //   index.html
  <script src='dist/index.js'></script>
  <script>
      console.log(React)   //  可以拿到React，如果没有 window.React = React 则拿不到，在node环境下是没有window对象的，所以 src/index.js 在node 环境下是跑不起来的，必须通过webpack编译之后丢到浏览器环境下才能跑起来
  </script>
  ```
## 0配置用法
  + 默认将 src/index.js  输出到 dist/main.js，而且默认是压缩的
  + 如果没有 src/index.js 这个文件，将会报入口文件的错误
  ```javascript
   //  不配置任何脚本
   npx webpack
   //  配置 package.json
   "webpack":"webpack [--mode=development]"
   npm run webpack
   npm 和 npx 的目的在于优先查找 node_modules 中的 webpack 命令
  ```
## 基本配置
  - 默认配置文件 webpack.config.js
  - 配置执行脚本1：webpack --config webpack.config.js
  - 配置执行脚本2：webpack --config ./webpack.config.js
  ```javascript
  const  path  =  require('path')
  
  module.exports  = {
     entry:  './src/index.js',
     output:{
        filename:'bundle.js',
        path:path.resolve('dist') // 这里必须是一个绝对路径
     }
  }
  ```
## 入口 & 出口
  + 单入口 --> 单出口
  ```javascript
  module.exports = {
    entry: './src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('dist')  // 这里必须是一个绝对路径
    }
  }
  // 默认打包到 dist 目录下
  module.exports = {
    entry: {
        'bundle':'./src/index.js'  // 打包到 dist/bundle.js
    }
  }
  ```
  + 多入口 --> 单出口
  ```javascript
  module.exports = {
    entry: ['./src/index.js','./src/home.js'],  // 以数组形式接收多入口文件
    output:{
        filename:'bundle.js',
        path:path.resolve('dist')  // 这里必须是一个绝对路径
    }
  }

  module.exports = {
    entry: {
        'bundle':['./src/index.js','./src/home.js']  
        // 以数组形式接收多入口文件,打包到 dist/bundle.js
    }  
  }

  ```
  + 多入口 --> 多出口
  ```javascript
  // 可灵活设置每一个输出文件的目录
  module.exports = {
      entry:{
          'index':['./src/index.js','./src/home.js'],   // 打包到 dist/index.js
          'js/home':['./src/index.js','./src/home.js']  // 打包到 dist/js/home.js
      }
  }
  // 所有的输出文件均在同一个目录下
  module.exports = {
      entry:{
          index:['./src/index.js','./src/home.js'],
          home:['./src/index.js','./src/home.js']
      },
      output:{
          filename:'[name].js',
          output:path.resolve('dist')
      }
  }

  ```
## html插件
  + html-webpack-plugin
  + 作用：
    1. 自动将打包压缩后的脚本文件通过script标签引入到html文件中
    2. 自动将打包压缩后的样式文件通过link标签引入到html文件中
    3. 如果没有配置html模板文件，将自动生成一个index.html模板文件
  + 配置项：
    1. template:[String path]
    2. filename:[String path]
    3. chunks:[Array]
    4. minify:[Object]    // 压缩 html 文件
    5. favicon:[String path]
    6. inject:[true | false | body | head]
  + 使用：
  ```javascript
    const htmlWepackPlugin = require('html-webpack-plugin')
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            chunks:['index']  // 只引入 dist/index.js
        }),
        new htmlWebpackPlugin({
            template:'./src/html/home.html',
            filename:'html/home.html',
            chunks:['js/home'] // 只引入 dist/js/home.js
        })
    ]
  ```
## 清除dist目录
  + clean-webpack-plugin
  + 使用
  + 不论 src 中的文件是否发生改变，都会重新打包压缩
  ```javascript
  const cleanWebpackPlugin = require('clean-webpack-plugin')

  plugins:[
      new cleanWebpackPlugin()  // 默认自动清除 dist 目录
  ]
  ```
## 热更新
  + 依赖于 webpack-dev-server 模块
    1. 热更新
    2. 服务端代理
  + 热更新过程
    1. 保存后自动执行 webpack 的打包压缩命令，并将整个项目目录放在内存中
    2. 通过 express 提供 web 服务，可通过 devServer 配置相应的参数
  + webpack-dev-server 是 express 来实现的
  + npx webpack-dev-server: 不做任何配置，默认监听的整个项目目录
  + 开发服务配置: npm run dev
    - "dev":"webpack-dev-server --config webpack.config.js"
    - "dev":"webpack-dev-server"  如果没有指定配置文件，默认是根目录下的 webpack.config.js
  ```javascript
  // package.json 中添加脚本
  "dev":"webpack-dev-server"
  // webpack.config.js
  devServer:{
      port:3000,  // 监听的端口号
      progress:true  // 显示打包进度条
      contentBase:'./dist'  // 静态服务的目录
  }
  ```
## hash戳
  + 当 src 中的文件发生改变时，打包压缩时会生一个 hash 戳
  + 当 src 中的文件没有发生改变时，不会打包生成新的文件
  + 使用场景
  ```javascript
  // webpack.config.js
  output：{
    filename:'[name][hash:8].js',  // 保留8位hash戳
    ouput:__dirname + '/dist'
  }
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      hash:true   // 引入 js 文件时，自动添加一个 hash 戳，防止缓存
    })
  ]
  ```
## loader
  + loader 用于对模块的源代码进行转换，转换成浏览器能够识别的语法
  + webpack 默认只能对 js 文件进行打包压缩，如果需要处理其他的文件类型，需要配置相应的 loader
  + use:['loader1','loader2']  // 注意 loader 的顺序
  + loader 的使用顺序默认是从右往左
  + use 也可以使用对象的方式
  ```javascript
  use:[
    {
      loader:'style-loader',
      options:{
        insertAt:'top'   // 渲染的时候将 style 标签插入到 head 标签的顶部
      }
    },
    'css-loader'
  ]
  ```
## 样式loader
  + css-loader：主要用于解析 @import 这种导入样式的语法
  + style-loader：主要用于将样式文件插入到 html 的 head 标签中
  + 在 js 文件中，通过 require('./index.css') 的方式导入样式，会将样式文件全部打包压缩到 js 模块中
  + 一条 require 语句会生成一个 style 标签，一个css样式文件会生成一个 style 标签
  + scss 文件会自动合并
  ```javasctript
  // index.css
  h1 { color: red; }

  // index.scss
  h1 { color: yellow; }

  // main.css
  @import 'index.css';
  @import 'indes.csss';
  h1 { color: blue; }

  // index.js
  require('main.csss') // 最终会生成两个 style 标签，一个是 index.css 的样式，一个是 main.css 和 index.scss 合并的样式
  ```
  + 渲染的时候以内联样式的方式加载样式
  + .css 文件
  ```javascript
  // 先解析样式文件，再插入到 html 中
  use:['style-loader','css-loader']  
  ```
  + .scss 文件
    - npm install node-sass sass-loader -D
    - 在 sass-loader 中需要依赖 node-sass，但 sass-loader 的依赖中并没有加上 node-sass
    - 配置
    ```javascript
    {
      test:/.css$|.scss$/,
      use:['style-loader','css-loader','sass-loader']
    }
    ```
## 图片loader
## plugin
  + 插件的目的在于解决 loader 无法实现的其他事
