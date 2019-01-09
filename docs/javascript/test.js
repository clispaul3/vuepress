const westTeam = ['tansheng','sunwukong','zhubajie','shaheshang','bailongma']
function test(item){
    if(item=='sunwukong' || item=='zhubajie'){
        console.log('in')
    }else{
        console.log('out')
    }
}
test('sunwukong')
{
    function test(name,age = 500){
        console.log('my nama is ' + name,'my age is ' + age)
    }
    test('sunwukong')
    test('zhubajie',800)
}
{
    function test({ name } = { }){
        console.log('my name is ' + (name || 'unknow'))
    }
    test('sunwukong')
    test()
    test({name:'sunwukong',age:500})
}
{
    const teamers = [
        {name:'tansheng',age:24},
        {name:'sunwukong',age:500},
        {name:'zhubajie',age:600},
        {name:'shashidi',age:700}
    ]
    function test(name = 'tansheng'){
        switch(name){
            case 'sunwukong':
                return 500
            case 'zhubajie':
                return 600
            case 'shashidi':
                return 700
            default:
                return 24
        }
    }
    test('sunwukong')
}
{
    const teamers = [
        {name:'tansheng',age:24},
        {name:'sunwukong',age:500},
        {name:'zhubajie',age:600},
        {name:'shashidi',age:700}
    ]
    function test(name = 'tansheng'){
        for(let item of teamers){
            if(item.name==name){
                console.log(item['age'])
            }
        }
    }
    test('sunwukong')
    test()
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
{
    function test(name){
        const westTeam = ['tansheng','sunwukong','zhubajie','shaheshang','bailongma']
        const has = westTeam.some(item => item==name)
        const all = westTeam.every(item => item==name)
        console.log(has, all)
    }
    test('')
    test('sunwukong') 
}