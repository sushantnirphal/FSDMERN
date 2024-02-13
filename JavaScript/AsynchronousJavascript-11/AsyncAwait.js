

async function showResponse(){
    try{
        let promise= new Promise((res,rej)=> rej("promise rejected"));
        let result = await promise;
        console.log(result);
    }catch(err){
        console.log("Error Occured",err);
    }
}

showResponse();


