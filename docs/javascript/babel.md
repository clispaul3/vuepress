# babel
## 基本介绍
   + babel是javascript转义器：将ECMA的语法转成浏览器能识别的语法
   + ECMA2015年起，每年会发布一个版本，每个版本都向前兼容
## babel编译器版本
   - babel-preset-es2015  将es6编译成es5
   - babel-preset-es2016  将es7编译成es5
   - babel-preset-es2017  将es8编译成es5
   + 在转译过程中遇到更高版本的js语法，babel是会直接忽略的，所以必须安装更高版本的babel编译器
## js规范制作阶段
   1. stage0: 个人草案    preset-stage-0
   2. stage1: 正式提案    preset-stage-1
   3. stage2: 初始规范    preset-stage-2
   4. stage3: 候选规范    preset-stage-3
   5. stage4: 验收阶段    preset-stage-4
   + 不同阶段的转译器之间是包含的关系，preset-stage-0转译器除了包含了preset-stage-1的所有功能还增加了
     transform-do-expressions插件和transform-function-bind插件，同样preset-stage-1转译器除了包含preset-stage-2的全部功能外还增加了一些额外的功能……
## babel编译器
   1. 转译插件，转译插件是用来转译单一功能的插件，比如transform-es2015-arrow-functions，这个插件只负责转译es2015新增的
      箭头函数
   2. 转译器，转译器是一系列转译插件的集合。比如babel-preset-es2015就包含了es2015新增语法的所有转译插件，比如包含
      transform-es2015-arrow-functions（es2015箭头函数转译插件）、transform-es2015-classes(es2015 class类转译插件)等
   + 转译器分类
      1. 语法转译器，这些转译器只负责转译js最新的语法，并不负责转译js新增的api和全局对象。这类转译器包括babel-preset-env、
         babel-preset-es2015、babel-preset-es2016、babel-preset-es2017、babel-preset-latest等，以后肯定还会有新的转译器加入，不过你只要理解转译器就是一堆转译插件的集合就可以了
      2. 补丁转译器，这些转译器只负责转译js最新的api和全局对象。比如浏览器不支持String新增的String.padStart方法和Promise
         全局对象。通过babel-profill转译，我们可以通过其他代码来让浏览器实现类似String.padStart和Promise的功能。
      3. jsx和flow插件，这类转译器用来转译JSX语法和移除类型声明的，使用Rect的时候你将用到它，转译器名称为
         babel-preset-react
## 使用方式
   1. 浏览器中使用
   2. 命令行中使用
   3. 构建工具中使用，如：webpack
## 命令行中使用
   1. 安装babel-cli: npm install babel-cli -D
   2. 配置脚本: "babel":"babel src -d lib"
      - babel src -d lib: 将 src 目录中的代码编译到 lib 目录
      - [命令行语法](https://babeljs.io/docs/en/babel-cli/)
   3. npm run babel
   + babel命令行工具（babel-cli）跟babel转译器是两个不同的东西，命令行工具并不具有转译代码的功能，只是为了在命令行中使用
     babel，要转码必须安装转译器
## 在webpack中配置
   ```javascript
    module: { 
        loaders: [{ 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader',
            query:{
                presets:["env"]
            } 
        }] 
    } 
   ```
## .babelrc
   + babel src -d lib --presets=env 等价于在.babelrc中配置 "presets":["env"]
   + babel在转译代码的过程中会自动读取当前目录.babelrc配置文件
   + .babelrc中的配置跟命令行中使用的配置冲突的时候，以.babelrc中的配置为准
   + 基本配置
   ```json
      // .babelrc
      {
          "presets":["es2015","react"],
          "plugins":[]
      }

      // 或者在package.json中配置
      "babel":{
          "presets":["es2015"],
          "comments":false
      }
   ```
## 常用转译器和插件
   + babel-preset-env: 最常用的转译器。通过在.babelrc中配置env选项，可以让代码兼容不同版本的浏览器或者node
   + babel-preset-es2015: 将es2015版本的js代码转译为es5代码，对于es2016版本的代码或者es2017版本的代码不转译
   + babel-preset-react: 剥离流类型并将JSX转换为createElement调用，主要在转译react代码的时候使用