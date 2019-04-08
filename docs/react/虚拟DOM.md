## 虚拟DOM
  1. 用js对象模拟真实DOM的层次关系和基本属性，构造出来的对象树就是虚拟DOM
  2. 虚拟DOM的本质就是js对象

## 虚拟DOM的实现步骤
  1. 通过虚拟DOM模拟出真实DOM的对象树，然后利用这个对象树构建真实的DOM树插入到文档中
  2. 当状态变更的时候，重新构建一棵虚拟DOM树，并且通过diff算法比较前后虚拟DOM树的差异
  3. 将这种差异反映到真实的DOM树中，只更新有差异的部分，可以极大的提高渲染速度

## 创建虚拟DOM
  - React
    1. React.createElement
    ```js
    const element = React.createElement('h1', {}, "Hello World!")
    ReactDOM.render(element,document.getElementById('container'))
    ```
    2. JSX
    ```js
    const element = <h1>Hello World!</h1>
    ReactDOM.render(element,document.getElementById('container'))
    ```
  - Vue
    1. 在Vue中不需要单独创建虚拟DOM，只需要通过给组件传入模板，就会自动编译生成虚拟DOM

## 渲染虚拟DOM
  - React
    - ReactDOM.render 这个方法只能用于渲染react元素，不能用于渲染真实DOM
    - ReactDOM.render 返回值是一个真实的DOM
  - Vue

## 编译JSX
  1. script标签引入
  ```js
  <script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
  ```
  2. 声明babe处理
  ```js
  <script type="text/babel">

  </script>
  ```
