const obj = {}
if(obj){
    console.log('我不是空对象')
}else{
    console.log('我是空对象')
}
const keys = Object.keys(obj)
console.log(keys)
const str = JSON.stringify(obj)
console.log(str=='{}')
const map = new Map([obj])
console.log(map.keys())