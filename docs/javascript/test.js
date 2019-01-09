const arr = new Set([1,2,3,4,5,1,2])
console.log(arr)
{
    const friends = new Set([
        {name:"sunwukong",age:500},
        {name:"zhubajie",age:600},
        {name:"shaheshang",age:700},
        {name:"sunwukong",age:500}
    ])
    console.log(friends) 
    const result = friends.delete({name:'sunwukong',age:500})
    console.log(result)
    console.log('-------------')
    console.log(friends.entries())
    console.log('-------------')
}
{
    let obj = new Set([{
        name:'swk',
        age:500
    }])
    console.log(obj)
}