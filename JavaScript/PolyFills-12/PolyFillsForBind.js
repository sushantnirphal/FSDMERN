const obj ={
    name :"Sushant",
    city:"Pune"
    // ,state:"Maharashtra"

}

function displayUserInfo(state){
    console.log(`Hi I am ${this.name} from ${this.city}, ${this.state}`);
}

Function.prototype.myBind = function(context, ...args){
    context.wrapperFunc = this;
    return function(...rest){
        context.wrapperFunc(...args,...rest);
        delete context.wrapperFunc;
    }
}


const bindFun =displayUserInfo.myBind(obj);

bindFun("Maharashtra");