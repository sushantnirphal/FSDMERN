 const loggedInStatus ={
    isLoggedIn : true,
 };
 const admin ={
    isAdmin:true,
    __proto__:loggedInStatus,
    showMsg(){
        console.log("user is an admin");
    }
};

const user ={
    name:"Sushant",
    role:"SDE-I",
    __proto__ : admin,

    showMsg(){
        console.log("Hello user");
    }
};

console.log(user);
console.log(user.isLoggedIn);
user.showMsg();

console.log(user);

for(let key in user){
    console.log(key);
}