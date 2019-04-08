# props类型检查
  - 对组件的输入props进行类型检查
  - 依赖库 prop-types
  - [npm地址](https://www.npmjs.com/package/prop-types)
  >`特别注意：按照官网的提示，引入正确的version，否则可能会造成没有任何提示的效果`

## 基本使用
  - 示例
  ```js
  class MyComponent extends React.Component{
      constructor(props){
          super(props)
      }
      static defaultProps = {
          content:'default-content'
      }
      static propTypes = {
          content:PropTypes.string
      }
      render(){
          return(
              <div>{this.props.content}</div>
          )
      }
  }
  ```

## 支持的类型检测
### 原生类型
  - optionalArray: PropTypes.array
  - optionalBool: PropTypes.bool
  - optionalFunc: PropTypes.func
  - optionalNumber: PropTypes.number
  - optionalObject: PropTypes.object
  - optionalString: PropTypes.string
  - optionalSymbol: PropTypes.symbol
### 特殊类型
  >`任意类型`
  - optionalAny: PropTypes.any
  >`任何可被渲染的元素（包括数字、字符串、子元素或数组）`
  - optionalNode: PropTypes.node
  >`一个 React 元素`
  - optionalElement: PropTypes.element
  >`某个类的实例`
  - ptionalMessage: PropTypes.instanceOf(Message)
  >`属性值是某个特定值之一`
  - optionalEnum: PropTypes.oneOf(['News', 'Photos'])
  >`限制它为列举类型之一`
  - optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ])
  >`一个指定元素类型的数组`
  - optionalArrayOf: PropTypes.arrayOf(PropTypes.number)
  >` 一个指定类型的对象`
  - optionalObjectOf: PropTypes.objectOf(PropTypes.number)
  - `指定属性及其类型的对象`
  ```js
     optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    })
  ```

## 是否必须
  - `PropTypes.string.isRequired`

## 自定义验证器
```js
  // 你也可以指定一个自定义验证器。它应该在验证失败时返回
  // 一个 Error 对象而不是 `console.warn` 或抛出异常。
  // 不过在 `oneOfType` 中它不起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 不过你可以提供一个自定义的 `arrayOf` 或 `objectOf` 
  // 验证器，它应该在验证失败时返回一个 Error 对象。 它被用
  // 于验证数组或对象的每个值。验证器前两个参数的第一个是数组
  // 或对象本身，第二个是它们对应的键。
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```
