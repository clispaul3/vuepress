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
## 生命周期
   ![生命周期](/img/lifecycle.png)
   + beforeCreate()
   + created()
   + beforeMount()
   + mounted()
   + beforeUpdate()
   + updated()
   + beforeDestroy()
   + destroyed()
## 计算属性
   + <span style="color:#e96900">计算属性依赖于响应数据，当响应数据发生改变时，计算属性也会发生改变</span>
   + <span style="color:#e96900">当强行设置计算属性时，需调用set钩子，修改计算属性的依赖</span>
   + <span style="color:#e96900">计算属性的作用在于对响应数据做复杂处理，从而得到处理后的结果</span>
   ```javascript
    computed:{
       fullName:{
          get(){
             return this.firstName + 'computed...'
          },
          set(newVal){
             this.firstName = newVal
          }
       }
    },
    methods:{
       updateFullName(val){
          this.fullName = val
       }
    }
   ```
## 侦听器
   + 是否在初始绑定的时候监听 => immediate:true
      - 初始值都为 undefined
   + 是否深度监听 => deep:true
   + 执行钩子 => handler(newVal,oldval){}
## key
   + 循环列表时，key作为元素的标识符，和元素唯一绑定
   + 一般不用索引值作为key，因为索引值不能和元素进行唯一绑定
   ```javascript
    let arr = [1,2,3,4]
    arr[0] = 1
    arr.unshift(11)
    arr[0] = 11
    // 相同索引值不能指向的元素发生了变化
   ```
   + Diff算法
      + 如果没有绑定key，Diff算法默认依次替换 
   ![without-key](/img/without-key.webp)
   ![with-key](/img/with-keys.webp)
## 类名绑定
   + 对象方式
   ```javascript
    <p :class="{active|'active':Boolean isShow}"></p>
   ```
   + 数组方式
   ```javascript
    <p :class="['btn-primary','btn-large']"></p>
   ```
   + 混合方式
   ```javascript
    <div v-bind:class="[{ active: isActive }, errorClass]"></div>
   ```
   + 组件中使用
   ```javascript
    <my-component v-bind:class="{ active: isActive }"></my-component>
   ```
   > 所有绑定的类名可以和普通的类名共存
## 内联样式绑定
   + 对象方式
   ```javascript
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
   ```
   + 数组语法
      - 绑定多个样式对象
   ```javascript
    <div v-bind:style="[baseStyles, overridingStyles]"></div>
   ```
   > CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名
   > Vuejs 会自动添加浏览器前缀
   + 多重绑定
      - 只会渲染数组中最后一个被浏览器支持的值
   ```javascript
    <p :style="{display:['flex','block','none','block']}">v-style</p>
   ```
## 条件渲染
   + 永远不要把 v-if 和 v-for 同时用在同一个元素上
      - 可以把v-if放在v-for的父级元素
      - 通过计算属性过滤元素
## 双向绑定
   + 输入表单和响应数据之间的双向绑定
   + v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源
   + v-model 在内部使用不同的属性为不同的输入元素并抛出不同的事件：
      + text 和 textarea 元素使用 value 属性和 input 事件
      + checkbox 和 radio 使用 checked 属性和 change 事件
      + select 字段将 value 作为 prop 并将 change 作为事件
   + 复选框会自动添加到数组中
   ```javascript
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    data:{
       checkedNames:[]
    }
   ```
   + 修饰符
      - .lazy
      ```javascript
       <!-- 在“change”时而非“input”时更新 -->
       <input v-model.lazy="msg" >
      ```
      - .number
      ```javascript
       <!-- 自动转为数值类型 -->
       <input v-model.number="age" type="number">
      ```
      - .trim
      ```javascript
       <!-- 自动去除首尾空格 -->
       <input v-model.trim="msg">
      ```
   + 组件中使用
   ```javascript
    <my-component v-model="content"></my-component>
   ```
## 组件
## props
   + 大小写
   ```javascript
    props:['lastName']
    // 在模板中使用 lastName
    // 在html中传值时使用 last-name
   ```
   + 数组形式
   ```javascript
    props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
   ```
   + 对象形式
   ```javascript
    props: {
      title: String,
      likes: Number,
      isPublished: Boolean,
      commentIds: Array,
      author: Object
    }
   ```
   + 传值
      - v-bind
      ```javascript
       <blog-post :title="content"></blog-post>
       // content 是 data 数据
      ```
      - propsName
      ```javascript
       <blog-post title="My journey with Vue"></blog-post>
      ```
   + 单向数据流
      - 父组件 --> 子组件
   + 方法传递
   ```javascript
    <!-- 子组件传入自己的数据作为参数，去调用父组件的方法 -->
    // 子组件
    Vue.component('btn-son',{
      template:'<button @click="clickMethod(name)">{{content}}</button>',
      props:{
         content:String,
         clickMethod:{
               type:Function,
               required:true
         }
      },
      data(){
         return {
               name:'btn-component'
         }
      }
    })

    // 父组件
    Vue.component('btn-father',{
       template:`
         <div>
           <btn-son :content="" :click-method='clickCount'></btn-son
         </div>
       `
       data:{
          content:'点击'
       },
       methods:{
          clickCount(str){
             console.log(str) // => 'btn-component'
          }
       }
    })
   ```
   + 子传父
      - 子组件在父组件传过来的方法传入自己的数据，在父组件中通过方法的参数可以接收到子组件传过来的数据
