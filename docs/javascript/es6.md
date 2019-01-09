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