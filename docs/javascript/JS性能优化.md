# JS性能优化
## 避免全局查找
   ```javascript
    const globalObj = {
        name:'global',
        type:'javascript'
    }
    function afn(){
        console.time('timeA:')
        console.log(globalObj.name + '::::' + globalObj.type)
        console.timeEnd('timeA:') // 13ms
    }
    afn()
    function bfn(){
        console.time('timeB:')
        const obj = globalObj
        console.log(obj.name + '::::' + obj.type)
        console.timeEnd('timeB:') // 0.05ms
    }
    bfn()
   ```
## 字符串连接
    ```javascript
        let str = ''
        function afn(){
            console.time('timeA:')
            str += 'a'
            str += 'b'
            str += 'c'
            console.timeEnd('timeA:') // => 0.012ms
        }
        afn()
        function bfn(){
            console.time('timeB:')
            str += 'a' + 'b' + 'c' // => 0.004ms
            str = ['a','b','c'].join('') // => 0.7ms
            console.timeEnd('timeB:') 
        }
        bfn()
    ```