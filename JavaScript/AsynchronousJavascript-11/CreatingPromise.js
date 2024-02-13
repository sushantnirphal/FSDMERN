const isRequestSuccessful = true;

let promise = new Promise((resolve,reject)=>{
    if(isRequestSuccessful){
        setTimeout(()=> resolve("promise Successful"),3000);
    }else{
        const error = new Error("Sometning wwent wrong");
        reject(error.message);
    }
})

promise.then((response)=> console.log(response))
.catch(function (err){
    console.log(err);
})

