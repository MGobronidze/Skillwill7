// ლექცია 7
// then catch
function makeToys(){
    return new Promise((resolve, reject)=>{
        if(Math.random()>0.1){
            resolve("Undefected")
        }else{
            reject('Defected')
        }
    })
}


function sellToys(status){
    return new Promise((resolve, reject)=>{
        if(status === 'Undefected'){
            if(Math.random()>0.7){
                resolve('Toy has been sold')
            }else{
                reject('Toy was unseccessful')
            }
        }
    })
}

makeToys()
    .then((status)=>sellToys(status))
    .then((res)=>console.log(res))
    .catch((error)=> console.log(error))


// async awayt
async function makeToysVol2(){
        if(Math.random()>0.1){
            return "Undefected"
        }else{
            return 'Defected'
        }
}
async function sellToysVol2(status){
        if(status === 'Undefected'){
            if(Math.random()>0.7){
                return 'Toy has been sold'
            }else{
                return 'Toy was unseccessful'
            }
        }
}
async function promisify(){
    try{
        const status = await makeToysVol2()
        const result = await sellToysVol2(status)
        console.log(result)
    }catch(error){
        console.log(error)
    }
}