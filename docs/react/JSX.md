# JSX

## 本质
  - 本质上来讲，JSX只是为<font color="#e96900">React.createElement(component, props, ...children)</font>方法提供的语法糖
  ```js
  <MyButton color="blue" shadowSize={2}>
    Click Me
  </MyButton>
  // 编译为：
  React.createElement(
    MyButton,
    {color: 'blue', shadowSize: 2},
    'Click Me'
  )
  ---------------------------------------------------
  // 如果没有子代，可以使用自闭标签
  <div className="sidebar" />
  React.createElement(
    'div',
    {className: 'sidebar'},
    null
  )
  ```

## 大写字母
  - `用户自定义组件必须以大写字母开头`，小写字母默认是内置组件，如：`<div>、<span>`
  - `首字母大写表示JSX标签引用到了一个React组件`
  - `JSX 标签名可以为大写开头的变量`
  - `JSX 标签名不能为一个表达式`

## 动态组件
  - <font color="red">通过变量标签名(组件名)实现动态组件加载</font>
  - 错误示范
  ```js
    import React from 'react';
    import { PhotoStory, VideoStory } from './stories';

    const components = {
    photo: PhotoStory,
    video: VideoStory
    };

    function Story(props) {
    // 错误！JSX 标签名不能为一个表达式。
    return <components[props.storyType] story={props.story} />;
    }
  ```
  - 正确示范
  ```js
    import React from 'react';
    import { PhotoStory, VideoStory } from './stories';

    const components = {
    photo: PhotoStory,
    video: VideoStory
    };

    function Story(props) {
    // 正确！JSX 标签名可以为大写开头的变量。
    const SpecificStory = components[props.storyType];
    return <SpecificStory story={props.story} />;
    }
  ```

## 点表示法
```js
const MyComponents = {
    MyInputTwo:function (props) {
        return (
            <div>
                <input type="text" value={props.value}/>
            </div>
        )
    }
}
ReactDOM.render(<MyComponents.MyInputTwo value="test" />,document.querySelector('#app'))
```

## JSX的属性
### 表达式
```js
   <MyComponent content={props.count+1}/>
```
### 字符串常量
```js
   <MyComponent description={"this is my component"}/>
```
### 三元运算符
```js
   {props.show ? <MyComponent /> : ''}
```
### 展开属性
```js
    function App1() {
      return <Greeting firstName="Ben" lastName="Hector" />
    }
    function App2() {
      const props = {firstName: 'Ben', lastName: 'Hector'}
      return <Greeting {...props} />
    }
```

## JSX中的子代
  - 在既包含开始标签又包含结束标签的 JSX 表达式中，这两个标签之间的内容被传递为专门的属性：props.children

## 返回数组
  - React 组件也可以返回包含多个元素的一个数组
  - 不需要使用额外的元素包裹数组中的元素
  - 示例
  ```js
  const { Component } = React
  class MyInputOne extends Component{
    render(){
      return [
        // 不要忘记 key :)
        <li key="A">First item</li>,
        <li key="B">Second item</li>,
        <li key="C">Third item</li>,
      ]
    }
  }
  ```