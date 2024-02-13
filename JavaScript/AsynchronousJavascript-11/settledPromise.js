let  promise1 = new Promise((resolve)=>{
        setTimeout(()=> resolve("Promise 1 resolved") ,1000)
    })
    let  promise2 = new Promise((resolve)=>{
        setTimeout(()=> resolve("Promise 2 resolved") ,1000)
    })
    let  promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=> reject("Promise 3 rejected") ,1000)
    })
    
    let arrOfPromise = [promise1,promise2,promise3];
    
    // let  promise = Promise.all(arrOfPromise);
    
//    let promise = Promise.allSettled(arrOfPromise);
//    promise.then((response)=> response.forEach((data)=> console.log(data)))

// Promise.race 

let promiseAny = Promise.race(arrOfPromise);
promiseAny.then((res) => console.log(res))