/*    Option Chain */

const user ={
    name:"Sushant",
    age:99,
    address:{
        street:"Kalina",
        
     },

    likes:"Eat sing Sleep repeat",
    getDisplayMsg:function(){
        console.log("Welcome");
    }
}


// sol1

// if(user.address !== undefined){
//     console.log(user.address.city);
// }else{
//     console.log("adress not found");
// }
// console.log(user.address.city);

// sol2

console.log(user.address?.city);
user.getDisplayMsg();
console.log(user.getDisplayMsg?.());
 console.log(user.hobbies);