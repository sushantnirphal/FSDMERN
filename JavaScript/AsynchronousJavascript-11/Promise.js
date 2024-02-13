const URL ="https:";

let promise = fetch(URL);

promise.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("Error Ocurred",error);
})