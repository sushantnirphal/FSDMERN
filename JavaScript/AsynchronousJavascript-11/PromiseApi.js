// let  promise1 = new Promise((resolve)=>{
//     setTimeout(()=> resolve("Promise 1 resolved") ,1000)
// })
// let  promise2 = new Promise((resolve)=>{
//     setTimeout(()=> resolve("Promise 2 resolved") ,1000)
// })
// let  promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=> reject("Promise 3 rejected") ,1000)
// })

// let arrOfPromise = [promise1,promise2,promise3];

// let  promise = Promise.all(arrOfPromise);

// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=> console.log(err));


let users = ["sushantnirphal","Sanket-Gawande"];

let arrOfPromise =users.map((user)=>
  fetch('https://api.github.com/users/${user}')
);

let promise = Promise.all(arrOfPromise);

promise
.then((response)=> response.forEach((data) => console.log(data.url)))
.catch((err) => console.log(err.message));
