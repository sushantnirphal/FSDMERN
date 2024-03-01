 const obj = {
    name : "Sushant",
    city:"mumbai",
   
 }

 function displayUserInfo(state){
    console.log(`Hi i am ${this.name} from ${this.city},${state}
    `)
 }


 Function.prototype.myCall = function(context, ...args){
   context.showMessage = this;
   context.showMessage(...args);
   delete context.showMessage;
 }


 Function.prototype.myApply = function(context,args){
    if(typeof context == Object){
        console.log("context is not object");
    }
    context.showMessage = this;
    context.showMessage(...args);
    delete context.showMessage;
 }
//  displayUserInfo.myCall(obj,"Maharashtra");
displayUserInfo.myApply(obj,["Maharashtra"]);
console.log(obj);