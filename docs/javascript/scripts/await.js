{
    function fn2(){
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
    async function fn1(){
        console.time('out')
        const res2 = await fn2()
        const res3 = await fn3()
        console.log(res2,res3)
        console.timeEnd('out')
        const res4 = await Promise.all([fn2(),fn3()])
        console.log(res4)
        const res5 = await Promise.race([fn2(),fn3()])
        console.log(res5)
    }
    fn1()
}