{
    function fn1(){
        console.log(this)
        console.log(typeof this)
        if(typeof this == 'function'){
            this()
        }
    }
    const obj = {}
    const fn = ()=>{console.log('function')}
    // fn1.apply(undefined)
}
{
    function fn1(){
        console.log(this)
        console.log(typeof this)
    }
    const fn = fn1.bind(0)
    // fn()
}
{
    function say(params){
        console.log(params)
    }
    let obj = {name:'js'}
    say.apply(obj,[obj.name])
    say.call(obj,'666')
    let newFn = say.bind(obj)
    newFn(obj.name)
}