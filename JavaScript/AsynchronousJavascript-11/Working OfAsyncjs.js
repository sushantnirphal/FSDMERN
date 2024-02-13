// console.log("lets begin");
// setTimeout(function(){
//     console.log("Wait for a sec");
// },4000)

// console.log("Bye bye");

console.log("Let's Start");
const promise = new Promise((resolve,reject)=>{
    resolve("done");
});

promise.then((res)=> console.log(res));
console.log("Bye Bye .....");