# ref
  >`Refs 提供了一种方式，用于访问在 render 方法中创建的 DOM 节点或 React 元素`

## 创建ref
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```
## 访问ref
```js
const node = this.myRef.current
```
  - 当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为它的 current 属性以创建 ref 
  - 当 ref 属性被用于一个自定义类组件时，ref 对象将接收该组件已挂载的实例作为它的 current
  - 你不能在函数式组件上使用 ref 属性，因为它们没有实例

## ref的挂载方式
### 挂载到DOM元素
```js
    // 在组件内部通过this.refs.content可以拿到真实的DOM
    class Clock extends React.Component {
      render(){
         return(
          <div ref="content">
            react-component
          </div>
        )
      }
    }
```
### 挂载到组件
```js
    // 在父组件中通过this.refs.clockCom可以拿到Clock的组件实例，从而可以修改子组件的数据
    class MyButton extends React.Component{
      change(){
        console.log(this.refs.clockCom)
      }
      render(){
        return <div className="my-button">
            <Clock ref="clockCom"/>
            <MyInput/>
            <button onClick={this.change.bind(this)}>my-button</button>
          </div>
      }
    }
```

## ref绑定内容
### ref绑定回调函数
  1. 组件被挂载后，回调函数被立即执行，回调函数的参数为该组件的具体实例
  2. 组件被卸载或者原有的ref属性本身发生变化时，回调也会被立即执行，此时回调函数参数为null，以确保内存泄露
```js
    class MyButton extends React.Component{
        mount(com){
            console.log(com)
        }
        render(){
            return(
                <div ref={this.mount.bind(this)}></div>
            )
        }
    }
```
### ref绑定字符串
  1. 通过这种方式可以拿到真实的DOM或者组件实例
```js
    // this.refs.element可以拿到真实的DOM
    class MyButton extends React.Component{
        render(){
            return(
                <div ref="element"></div>
            )
        }
    }
```

## ref转发

## 注意事项
  1. 函数方式定义的组件不能使用ref