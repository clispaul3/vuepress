{
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
}

