# vue
  [文档](https://cn.vuejs.org)
## 核心思想
   + 数据驱动  
    ![MVVM](/img/vue.webp)
   + 组件化  
    ![组件树](/img/vue-components.png)
## 调试工具
### Vue Devtools
   1. git clone https://github.com/vuejs/vue-devtools
   2. cd vue-devtools 
   3. npm install
   4. npm run build
   6. cd shells/chrome
   7. cat manifest.json => "persistent":true
   8. chrome://extensions
   9. 加载已解压的扩张程序，添加shells/chrome文件
   10. webpack.config.js => mode:'development'
## 指令
   - <span style="color:#e96900">v-bind</span>
   - <span style="color:#e96900">v-for</span>
   - <span style="color:#e96900">v-if</span>
   - <span style="color:#e96900">v-else</span>
   - <span style="color:#e96900">v-show</span>
   - <span style="color:#e96900">v-click</span>
   - <span style="color:#e96900">v-style</span>
   - <span style="color:#e96900">v-text</span>
   - <span style="color:#e96900">v-html</span>
## 数组更新检测
   + **遍历数组**
   ```javascript
    <li v-for="(item,id) of todos">
       {{id}}:{{item}}
    </li>
   ```
   + **splice()**
      + <span style="color:#e96900">splice(idx,count,item1,item2,...)</span>
         + idx: 从何处开始添加/删除
         + count: 删除的元素个数
         + item1，item2: 要添加的新元素
         + 返回删除元素组成的数组
         + 会改变原来的数组
      ```javascript
       let arr = [1,2,3,4,5,6]
       arr.splice(1,0,7,8) => [1,7,8,2,3,4,5,6]
       arr.splice(1,1,7,8) => [1,7,8,3,4,5,6]
      ```
   + 变异方法: 会改变原来的数组
      - <span style="color:#e96900">push()</span>
      - <span style="color:#e96900">pop()</span>
      - <span style="color:#e96900">shift()</span>
      - <span style="color:#e96900">unshift()</span>
      - <span style="color:#e96900">splice()</span>
      - <span style="color:#e96900">sort()</span>
      - <span style="color:#e96900">reverse()</span>
   + 替换数组: 不会改变原来的数组，会返回一个新数组
      - <span style="color:#e96900">filter()</span>
      - <span style="color:#e96900">map()</span>
      - <span style="color:#e96900">concat()</span>
      ```javascript
         let arr = [1,2]
         arr = arr.concat(3) => [1,2,3]
         arr = arr.concat([3,4]) => [1,2,3,3,4]
      ```
      - <span style="color:#e96900">slice()</span>
   + 注意事项
      1. 通过索引值[修改/删除/增加]元素，视图可能会更新
      ```javascript
       Vue.set(this.todos,1,{text:'index 111'})
       this.todos.splice(1,1,{text:'index 111'})
      ```
      2. 直接修改数组的长度，视图可能会更新
      ```javascript
       let arr = [1,3,4]
       arr.length = 2 => [1,3]
       arr.length = 6 => [1,3,4,undefined,undefined,undefined]
       arr[6] = 6 => [1,3,4,undefined,undefined,undefined]
      ```
## 对象更新检测
   + **遍历对象**
   ```javascript
    <li v-for="(key,value) in obj">
       {{key}}:{{value}}
    </li>
   ```
   + <span style="color:red">Vue 可以响应对象属性的修改</span>
   + <span style="color:red">Vue 不能检测对象属性的添加或删除</span>
   ```javascript
    new Vue({
       el:'#app',
       data:{
          conversation:{
             name:'vue'
          }
       }
       methods:{
          add(){
             this.conversation.type = 'PRIVATE' // 不能响应
             Object.assign(this.conversation,{city:'guangzhou'}) // 可能响应
             delete this.conversation.name // 可能响应
             this.conversation = Object.assign({},this.conversation,{city:'guangzhou'}) // 可以响应，官方推荐
             Vue.set(this.conversation,'type','private') // 可以响应，官方推荐
          }
       }
    })
   ```
## 双向绑定
   + 输入表单和应用状态中间的双向绑定
   + 实现原理
   ```javascript
    let state = {} // 应用状态
    let input // 输入表单的值
    input = 'content'
    Object.defineProperty(state,'name',{
      get(){
         return input
      },
      set(newVal){
         input = newVal
      }
    })
    console.log(state.value) => 'content'(view=>model)
    state.name = 'state-value'
    console.log(input) => 'state-value'(model=>view)
   ```
## Vue实例
   + **data**
   + **methods**
   + **computed**
   + **watch**
   + **生命周期钩子**
