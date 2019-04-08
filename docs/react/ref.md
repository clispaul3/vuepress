# ref

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

## 注意事项
  1. 函数方式定义的组件不能使用ref