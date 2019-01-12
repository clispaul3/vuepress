# ES6
## Set & Map
### Set 
   + ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值   
   + new Set(params) params可选，且必须是array 
   + Set实例的本质是一个数组，可以调用数组的方法  
   + Set方法最大的方便就是可以去重基本数据类型组成的数组
```
const arr = new Set([1,2,3,4,5,1,2])
console.log(arr) // => [1,2,3,4,5]
const friends = new Set([
        {name:"sunwukong",age:500},
        {name:"zhubajie",age:600},
        {name:"shaheshang",age:700},
        {name:"sunwukong",age:500}
    ])
console.log(friends.length) // => 4 引用数据类型无法去重  
```
   + Set实例方法
      1. add(value) ->添加某个值，返回Set结构本身
      2. delete(value) ->删除某个值，返回一个布尔值，表示删除是否成功
      3. has(value) ->返回一个布尔值，表示该值是否为Set的成员
      4. clear() ->清除所有成员，没有返回值
```
注意：has & delete 无法操作引用数据类型
```
### Map
  * ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型   的值（包括对象）都可以当作键
  * Map构造函数接受数组作为参数
  ```
  const items = [
    ['name', '张三'],
    ['title', 'Author']
  ]
  const map = new Map();
  items.forEach(
    ([key, value]) => map.set(key, value)
  )
  ```
## async/await
   + async 
```
async function fn1(){
    return 'res'
}
const result = fn1()
result.then(arg=>{
    console.log(arg)  // 'res'
})
总结：1. async修饰的函数，返回值会被包装成一个Promise对象
     2. async修饰函数，相当于 return new Promise((resolve,reject)=>{}) 的语法糖
```
```
async function fn1(){
    return 'fn1'
}
async function fn2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('fn2')
        },2000)
    })
}
function fn3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('fn3')
        },1000)
    })
}
const result = fn1()
result.then(res=>{
    console.log(res)
    return fn2()
}).then(res=>{
    console.log(res)
    return fn3()
}).then(res=>{
    console.log(res)
})
执行结果:fn1->fn2->fn3
```
   + await
```
function fn2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('fn2')
        },2000)
    })
}
function fn3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('fn3')
        },1000)
    })
}
async function fn1(){
    console.time('out')
    const res2 = await fn2()
    const res3 = await fn3()
    console.log(res2,res3) // 3s后输出 => fn2 fn3
    console.timeEnd('out')
    const res4 = await Promise.all([fn2(),fn3()])
    console.log(res4) // 6s后输出 => ['fn2','fn3']
    const res5 = await Promise.race([fn2(),fn3()])
    console.log(res5) // 7s后输出 => fn3
}
fn1() 
总结: 1. await必须在async内部定义
     2. await 等待的必须是实例化Promise对象，得到的结果是resolve接收的值
     3. Promise.all等待最后一个Promise执行完成，把所有执行结果放在数组里
     4. Promise.race 将最先执行完成的结果输出,其他的Promisea仍然在执行，但执行结果不会放到res5
```