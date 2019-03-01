# 改变this指向
   + 相同点 
      + 用于改变this指向
      + 第一个参数都是this要指向的对象
         1. 不传，或者传null,undefined， 函数中的this指向window对象
         2. 传递另一个函数的函数名，函数中的this指向这个函数的引用
         3. 传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean
         4. 传递一个对象，函数中的this指向这个对象
   + 不同点
      + bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用
      + apply的第二个参数是一个数组
```javascript
function say(params){
    console.log(params)
}
let obj = {name:'js'}
say.apply(obj,[obj.name])
say.call(obj,'666')
let newFn = say.bind(obj)
newFn(obj.name)
```