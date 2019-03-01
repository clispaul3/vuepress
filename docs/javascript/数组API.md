# 数组API
## Array构造器
   1. 创建指定长度的空数组
   ```javascript
    let arr = Array(8)
    let arr = new Array(8)
    let arr = []
    arr.length = 8
   ```
   2. 初始化数组
   ```javascript
    let arr = new Array(1, 'a', true, {})
    let arr = [1, 'a', true, {}]
   ```
   3. Array.of
      + 单个数字参数：Array.of(Number val)，会自动将 val 转为数组的第一个元素
      + 多个参数时，和 Array 构造器一样
   4. Array.from
      + 基于某个对象创建数组
      + 第一个为类似数组的对象，必选。第二个为加工函数，新生成的数组会经过该函数的加工再返回。第三个为this作用域，表示加工函数
        执行时this的值。后两个参数都是可选的。
      + 第一个参数不能是 undefined 和 null，其他都可以
      + 如果传了第三个参数，则第二个参数不能使用箭头函数，否则 this 指向会出现问题
      + Array.from(1)   => []
      + Array.from('abc')   => ['a','b','c']
      + Array.from(true)  => []
      + Array.from([1,2,3])  => [1,2,3] (可用于数组的拷贝)
      + Array.from({name:'php', age:18})  => []
      + Array.from({len,3},(val,idx) => idx)  => [1,2,3]
      + Array.from({0:'a',1:'b',2:'c',length:3})  => ['a','b','c']
    ```javascript
     let arr = [1,2,3]
     let newArr = Array.from(arr,(val,idx)=>{
         return val+1
     },arr)
     console.log(newArr) // => [2,3,4]

     let obj = {
         name:'php',
         age:18
     }
     let arr = Array.from(obj,(key,val) => {
         return key + '=' + val
     })
     console.log(arr)  // => ['name=php', 'age=18']
    ```
   5. Array.isArray()
      + Array.isArray([])  => true
      + Array.isArray({name:'php'})  => false
## 变异方法
   + 会改变原数组的方法
   + <span style="color:#e96900">push()</span>
      - 添加一个或者多个元素到数组末尾，并且返回数组新的长度
      ```javascript
        // 添加一个元素
        let arr = [1,2,3]
        arr.push(4)

        // 添加多个元素
        let arr = [1,2,3]
        arr.push(4,5,6)

        // 数组合并
        let arr = [1,2,3]
        Array.prototype.pop.apply(arr,[4,5])
        console.log(arr)  // => [1,2,3,4,5]
      ```
   + <span style="color:#e96900">pop()</span>
      - 删除一个数组中的最后的一个元素，并且返回这个元素
      ```javascript
        // 普通数组
        var array = ["cat", "dog", "cow", "chicken", "mouse"];
        var item = array.pop();
        console.log(array); // ["cat", "dog", "cow", "chicken"]
        console.log(item); // mouse

        // 类数组: 借助Array.prototype
        var o = {0:"cat", 1:"dog", 2:"cow", 3:"chicken", 4:"mouse", length:5}
        var item = Array.prototype.pop.call(o);
        console.log(o); // Object {0: "cat", 1: "dog", 2: "cow", 3: "chicken", length: 4}
        console.log(item); // mouse
      ```
   + <span style="color:#e96900">unshift()</span>
      - 方法用于在数组开始处插入一些元素，并返回数组新的长度
      ```javascript
        var array = ["red", "green", "blue"];
        var length = array.unshift("yellow");
        console.log(array); // ["yellow", "red", "green", "blue"]
        console.log(length); // 4
      ```
   + <span style="color:#e96900">shift()</span>
      - 方法删除数组的第一个元素，并返回这个元素
      - 如果第一个元素不存在，则返回undefined
   + <span style="color:#e96900">splice()</span>
      - arr.splice(start,deleteCount[, item1[, item2[, …]]])
      - start 指定从哪一位开始修改内容。如果超过了数组长度，则从数组末尾开始添加内容；如果是负值，则其指定的索引位置等同于   
        length+start (length为数组的长度)，表示从数组末尾开始的第 -start 位
      - deleteCount 指定要删除的元素个数，若等于0，则不删除。这种情况下，至少应该添加一位新元素，若大于start之后的元素总
        和，则start及之后的元素都将被删除
      - itemN 指定新增的元素，如果缺省，则该方法只删除数组元素
      - 返回值 由原数组中被删除元素组成的数组，如果没有删除，则返回一个空数组
      ```javascript
        array = ["apple","boy"];
        splices = array.splice(-3,1,"cat");
        console.log(array); // ["cat", "boy"]
        console.log(splices); // ["apple"], 可见即使-start超出数组长度,数组默认从首位开始删除
      ```
   + <span style="color:#e96900">reverse()</span>
      - 翻转数组，该方法返回对数组的引用
      ```javascript
        var array = [1,2,3,4,5];
        var array2 = array.reverse();
        console.log(array); // [5,4,3,2,1]
        console.log(array2===array); // true
      ```
   + <span style="color:#e96900">sort()</span>
      - arr.sort([comparefn])
   + <span style="color:#e96900">fill()</span>
   + <span style="color:#e96900">copyWithin()</span>
## 非变异方法
   + 不会改变原来的数组
   + <span style="color:#e96900">concat()</span>
      - 方法将传入的数组或者元素与原数组合并，组成一个新的数组并返回
      ```javascript
        var array = [1, 2, 3];
        var array2 = array.concat(4,[5,6],[7,8,9]);
        console.log(array2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
        console.log(array); // [1, 2, 3], 可见原数组并未被修改
      ```
      - 若concat方法中不传入参数，那么将基于原数组浅复制生成一个一模一样的新数组（指向新的地址空间）
      ```javascript
        var array = [{a: 1}];
        var array3 = array.concat();
        console.log(array3); // [{a: 1}]
        console.log(array3 === array); // false
        console.log(array[0] === array3[0]); // true，新旧数组第一个元素依旧共用一个同一个对象的引用
      ```
   + <span style="color:#e96900">join()</span>
      - join() 方法将数组中的所有元素连接成一个字符串
      ```javascript
        var array = ['We', 'are', 'Chinese'];
        console.log(array.join()); // "We,are,Chinese"
        console.log(array.join('+')); // "We+are+Chinese"
        console.log(array.join('')); // "WeareChinese"
      ```
   + <span style="color:#e96900">slice()</span>  
      - arr.slice([start[, end]])(不包括 end 的位置)
      - slice() 方法将数组中一部分元素浅复制存入新的数组对象，并且返回这个数组对象。
      - slice 方法参数为空时，同 concat 方法一样，都是浅复制生成一个新数组
      ```javascript
        var array = ["one", "two", "three","four", "five"];
        console.log(array.slice()); // ["one", "two", "three","four", "five"]
        console.log(array.slice(2,3)); // ["three"]
      ```
   + <span style="color:#e96900">slice()</span> 
      - 自动用','拼接成字符串
        ```javascript
            var array = ['Jan', 'Feb', 'Mar', 'Apr'];
            var str = array.toString();
            console.log(str); // Jan,Feb,Mar,Apr

            var array = ['Jan', 'Feb', 'Mar', 'Apr'];
            var str = array.toString();
            console.log(str); // Jan,Feb,Mar,Apr
        ```
   + <span style="color:#e96900">indexOf()</span> 
      - indexOf() 方法用于查找元素在数组中第一次出现时的索引，如果没有，则返回-1
      - indexOf使用严格相等（即使用 === 去匹配数组中的元素）
   + <span style="color:#e96900">lastIndexOf()</span> 
      - lastIndexOf() 方法用于查找元素在数组中最后一次出现时的索引，如果没有，则返回-1。并且它是indexOf的逆向查找，即从数
        组最后一个往前查找
      - lastIndexOf使用严格相等（即使用 === 去匹配数组中的元素）
   + <span style="color:#e96900">includes()</span>
      - includes() 方法基于ECMAScript 2016（ES7）规范，它用来判断当前数组是否包含某个指定的值，如果是，则返回 true，否则
        返回 false
      - includes能够发现NaN，而indexOf不能
      ```javascript
        var array = [NaN];
        console.log(array.includes(NaN)); // true
        console.log(arra.indexOf(NaN)>-1); // false
      ```
## 遍历方法
## 类数组对象
   + 有索引值和 length 属性
   + var o = {0:"cat", 1:"dog", 2:"cow", 3:"chicken", 4:"mouse", length:5}
   + var item = Array.prototype.pop.call(o)
