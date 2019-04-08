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