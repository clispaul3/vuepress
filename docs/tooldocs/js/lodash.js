const _ = require('lodash')
{
   const arr = [1,2,3,4,5,6,7] 
   const result = _.chunk(arr,3)
}
{
    const arr = [1,0,true,null,NaN,'',undefined,false]
    const result = _.compact(arr)
}
{
    const arr = [1,2]
    const result = _.concat(arr,11,[22],[[33],[333,3333]],{name:'laoxie'})

}
{
    const arr1 = [1,2,4]
    const arr2 = [1,1,5]
    const result = _.difference(arr1,arr2)
    const arr3 = [{name:'laoxie',age:18},1,true,[2,3]]
    const arr4 = [{name:'laoxie',age:18},1,true,[2,3]]
    const dif = _.difference(arr3,arr4)
}
{
    const arr1 = [{nickname:'sunwukong',targetId:5}]
    const arr2 = [{name:'sunwukong',targetId:500},{name:'zhubajie',targetId:5}]
    const dif = _.differenceBy(arr1,arr2,'targetId')
    console.log(dif)
}