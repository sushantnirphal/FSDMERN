  
//   const greetMsg = function(){
//     console.log("Hello Sushant Welcome to GFG !!!");
//   }

//   greetMsg();

// function wrapper(){
//     return "Welcome to gfg"
// }

// function greetMsg(inner,name){
//     let message = inner()
//     console.log(name,message);
// }

// greetMsg(wrapper,"Sushant")


// --------> 03

function  greetMsg(){
    function wrapper(){
        let name = "Sushant"
        console.log(name,"Welcome to GFG!!!");
    }
    return wrapper;
}

// const output = greetMsg();
// output();

greetMsg()();