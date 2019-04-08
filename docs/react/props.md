# props

## 基本使用
  >`一般用于父子组件通信，可传值，也可传方法`
  1. 可以在函数方式定义的组件中使用
  ```js
  function MyButton(props){
      return <h1>{props.name}</h1>
  }
  ```
  2. 可以在通过ES6的类定义的组件中使用
  ```js
  class MyButton extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          return(
              <div>
                {this.props.name}
              </div>
          )
      }
  }
  ```

## defaultProps
  - 通过defaultProps可以设置组件的初始props
  ```js
    const container = document.getElementById('container')
    function MySelect(props) {
      return(
        <div>
          {props.name}
        </div>
      )
    }
    MySelect.defaultProps = {
      name:'test'
    }
    ReactDOM.render(<MySelect/>,container)
  ```

## 响应式
  1. 将父组件的state通过props的方式传给子组件，此时子组件的props是响应式的
  2. 通过defaultProps定义的props不是响应式的

## 对比state
  1. props是指组件间传递的一种方式，props自然也可以传递state。由于React的数据流是自上而下的，所以
  是从父组件向子组件进行传递；另外组件内部的this.props属性是只读的不可修改！
  
  2. state是组件内部的状态（数据），不能够直接修改，必须要通过setState来改变值的状态，从而达到更新组件内部数据的作用

