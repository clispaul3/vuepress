# state

## setState:合并 state
  - `setState(object nextState[, function callback])`
  - 参数说明
    - nextState，将要设置的新状态，该状态会和当前的state合并
    - callback，可选参数，回调函数。该函数会在setState设置成功，<font color="#e96900">且组件重新渲染后调用`</font>
  - 注意事项
    1. 不能通过this.state的方式直接修改state
    2. setState是异步的
    3. 每次调用setState都会触发组件重新渲染，除非在shoulComponentUpdate中做了处理
  - 基本使用
  ```js
  // 推荐使用这种方式
  handleChange(){
      this.setState((state,props)=>{
          count:++state.count
      },()=>{
          console.log(this.state)
      })
  }
  // 这种方式不推荐，因为state的修改是异步的，不能依赖state的值来setState
  handleChange(){
      let { count } = this.state
      count++
      this.setState({
          count
      },()=>{
          console.log(this.state)
      })
  }
  ```

## 状态提升
  - 通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去
  - 示例
  ```js
    const container = document.getElementById('container')
    class InputOne extends React.Component {
      constructor(props){
        super(props)
      }
      render(){
        return(
          <div>
            <input value={this.props.content} onChange={this.props.handleChange}/>
            <p>{this.props.content}</p>
          </div>
        )
      }
    }
    function InputTwo(props) {
      return(
        <div>
          <input value={props.content} onChange={props.handleChange}/>
          <p>{props.content}</p>
        </div>
      )
    }
    class MyContainer extends React.Component{
      constructor(props){
        super(props)
        this.state = {
          content:'1'
        }
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(ev){
        this.setState({
          content:ev.target.value
        })
      }
      render(){
        return(
          <div>
            <InputOne content={this.state.content} handleChange={this.handleChange}/>
            <br/>
            <InputTwo content={this.state.content} handleChange={this.handleChange}/>
          </div>
        )
      }

    }
    ReactDOM.render(<MyContainer />,container)
  ```