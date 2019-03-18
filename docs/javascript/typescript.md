# typescript
## 基本使用
  + npm install typescript -g
  + tsc index.ts
  + tsc --init: 初始化配置文件
## 数据类型
   + any: 任意数据类型
   ```typescript
    let params : any
    params = 1
    params = "str"
    params = undefined
    params = true
    params = {
        name:'typescript'
    }
   ```
   + number: 数值类型
   ```typescript
    let count : number
    count = 1
    count = true // 报错
   ```
   + string: 字符串类型
   ```typescript
    let str : string = 'hello typescript'
   ```
   + boolean: 布尔类型
   ```typescript
    let flag : boolean = true
   ```
   + []: 数组类型
   ```typescript
    let arr : Array<any> = [1,'hello',false,undefined,{name:'php'}]
    let arrNum : number[] = [1,2,3]
    let arrAny : any[] = [1,'helllo',true,[1,2]]
   ```
   + 元组: 元素类型和数量已知的数组
      + 各元素的类型不必相同，对应位置的类型需要相同
   ```typescript
    let arr : [number,string,boolean,undefined,object]
    arr = [1,'',false,undefined,{}]
   ```
   + 对象: object
   ```typescript
    let obj : object = {
        name:'php',
        age:18
    }
    function test(o : object | null) : void{

    }
    test(1) // 报错
   ```
   + null: 表示对象值缺失  
    `typeof null => object`
   + undefined: 表示一个未赋值的变量  
    `let a; typeof a => undefined`
   + void: 用于表示函数没有返回值
   ```
   function test() : void{
       console.log('test')
   }
   ```
   + 联合类型:  
   ```typescript
     let param : number | string
     param = 1
     param = 'php'
   ```
## 类型断言
   + 类似于类型转换
   ```typescript
    let someValue : any = "this is a string"
    let strLength : number = (<string>someValue).length

    let someValue : any = "this is a string"
    let strLength : number = (somevalue as string).length
   ```
## 接口
   + 接口可以定义属性和方法
   + 接口不能编译为 JavaScript, 它只是 TypeScript 的一部分
   + 接口中的属性和方法必须全部实现
   ```typescript
    // 定义一个接口
    interface TestInterface {
        name : string,
        age : number,
        say:()=>string
    }
    // 实现一个接口
    let obj : TestInterface= {
        name:'php',
        age:18,
        say(){
            return 'hello typescript'
        }
    }
   ```
   + 联合类型的接口
   ```typescript
    interface RunOptions { 
        program:string; 
        commandline:string[]|string|(()=>string); 
    } 
    
    // commandline 是字符串
    let options:RunOptions = {program:"test1",commandline:"Hello"}; 
    
    // commandline 是字符串数组
    options = {program:"test1",commandline:["Hello","World"]}; 
    
    // commandline 是一个函数表达式
    options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
    
    let fn:any = options.commandline; 
    console.log(fn());
   ```
   + 继承
      1. 单继承
      ```typescript
        interface Person { 
        age:number 
        } 
        
        interface Musician extends Person { 
        instrument:string 
        } 
        
        var drummer = <Musician>{}; 
        drummer.age = 27 
        drummer.instrument = "Drums" 
        console.log("年龄:  "+drummer.age)
        console.log("喜欢的乐器:  "+drummer.instrument)
      ```
      2. 多继承
      ```typescript
        interface IParent1 { 
            v1:number 
        } 
        
        interface IParent2 { 
            v2:number 
        } 
        
        interface Child extends IParent1, IParent2 { } 
        var Iobj:Child = { v1:12, v2:23} 
        console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)
      ```
## tab切换标签
```ts
// html 结构
    <div class="container">
        <p>
            <span class="tab-btn1">tab1</span>
            <span class="tab-btn2 current">tab2</span>
            <span class="tab-btn3">tab3</span>
            <span class="tab-btn4">tab4</span>
        </p>
        <div class="content">

        </div>
    </div>
    
interface ParamConfig {
    container:string,
    tablist:Array<TabItem>
    content:string,
    current:number
}
interface TabItem {
    className:string,
    text:string
}
class Tab {
    config:ParamConfig
    constructor(config:ParamConfig){
        this.config = config
        this.init()
        this.bindEvent()
    }
    init():void{
        this.toggleTab(this.config.current)
    }
    toggleTab(current:number):void{
        let { tablist,content } = this.config
        const divContent = document.querySelector(content)
        if(!divContent) throw new Error('divContent is null')
        divContent.innerHTML = tablist[current].text
        for(let i=0;i<tablist.length;i++){
            const tabBtn = document.querySelector('.'+tablist[i].className)
            if(!tabBtn) throw new Error('tabBtn is null')
            tabBtn.classList.remove('current')
        }
        const tabBtn = document.querySelector('.'+tablist[current].className)
        if(!tabBtn) throw new Error('tabBtn is null')
        tabBtn.classList.add('current')
    }
    bindEvent():void{
        for(let i=0;i<this.config.tablist.length;i++){
            const item = this.config.tablist[i]
            const tabBtn = document.querySelector('.'+item.className)
            if(!tabBtn) throw new Error('tabBtn is null')
            tabBtn.addEventListener('click',()=>{
                if(this.config.current == i) return
                this.config.current = i
                this.toggleTab(i)
            })
        }
    }
}
const config:ParamConfig= {
    container:'.container',
    content:'.content',
    current:1,
    tablist:[
        {
            className:'tab-btn1',
            text:'我是第一个tab标签的内容'
        },
        {
            className:'tab-btn2',
            text:'我是第二个tab标签的内容'
        },{
            className:'tab-btn3',
            text:'我是第三个tab标签的内容'
        },{
            className:'tab-btn4',
            text:'我是第四个tab标签的内容'
        }
    ]
}
new Tab(config)
```
## 自动化编译
  + 初始化配置文件: tsc --init
  + Ternimal->run task->tsc:watch