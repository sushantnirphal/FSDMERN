// const btn = document.getElementById("btn");
console.log("hello");
 setTimeout(function callback(){
    console.log("excuted after a delay");
 },4000)

 function outer(wrapper){
    console.log("outer function is called");
    wrapper();
 }

 function callback(){
    console.log("function b is called ");
 }


 outer(callback)
 