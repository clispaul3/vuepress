function sortBy(arr,sortA,sortB){
    let arr1 = arr.sort(function(itemA,itemB){
        return (itemA[sortA] > itemB[sortA])
    })
    let arrSortA = []
    for(let item of arr1){
        arrSortA.push(item[sortA])
    }
    let result = []
    for(let item of new Set(arrSortA)){
        let newArr = []
        for(let m of arr1){
            if(item==m[sortA]){
                newArr.push(m)
            }
        }
        newArr = newArr.sort(function(itemA,itemB){
            return (itemA[sortB] > itemB[sortB])
        })
        result.push(newArr)
    }
    for(let item of result){
        for(let m of item){
            console.log(m)
        }
    }
}
const friends = [
    {id:'AB',age:20},
    {id:'C',age:18},
    {id:'B',age:33},
    {id:'AB',age:16},
    {id:'B',age:17}
]
sortBy(friends,'id','age')