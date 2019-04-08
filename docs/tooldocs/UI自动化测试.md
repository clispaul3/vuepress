# UI自动化测试

## 技术选型

## Selenium
  - 浏览器自动化测试框架
    1. 测试兼容性：不同浏览器、不同操作系统
    2. 自动化回归测试
    3. 支持自动录制和自动生成不同语言的测试脚本

### 参考文档
  - [文档1](https://www.cnblogs.com/fnng/p/5854875.html)
  - [文档2](http://www.51testing.com/zhuanti/selenium.html)
  - [官方文档](http://seleniumhq.github.io/selenium/docs/api/javascript/index.html)

### 环境搭建
  1. npm install selenium -S
  2. 下载浏览器驱动(浏览器版本和驱动版本对应)  
  [驱动下载](https://seleniumhq.github.io/selenium/docs/api/javascript/index.html)
  3. 配置环境变量

## Testcafe

### 参考文档
  - [官方文档](https://devexpress.github.io/testcafe/documentation/test-api/actions/)
  - [文档1](https://www.jianshu.com/p/94181abe5e9a)
  - [文档2](https://blog.csdn.net/huazhongkejidaxuezpp/article/details/85245035)

### 环境搭建
  1. npm install testcafe test-reporter-html -D
  2. package.json中添加脚本："dev":"testcafe chrome index.js --skip-js-errors --reporter html:reporter/result.html"

### 基本使用
```js
import { Selector } from 'testcafe'
const url = "http://192.168.8.85:9000/FlowHYS/"
fixture `FlowHYS demo`
    .page `${url}`

test('login', async t=>{
    const loginBtn = Selector('#loginBtn')
    await t.click(loginBtn)
    await t.resizeWindow(100,200)
    await t.wait(3000)
})
```
### API
#### 前置条件
#### 元素定位
#### 操作
#### 执行速度
#### 设备模拟
#### PageObject
#### 参数化/数据驱动
#### 运行方式Runner


### 测试用例



