export default function getProducts(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(id){
                resolve();
            }
            else{
                reject();
            }
    
        },1000)
    })
}