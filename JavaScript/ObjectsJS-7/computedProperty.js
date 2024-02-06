 const readlineSync = require("readline-sync");
 const key = readlineSync.question("what do you want ")
 const course = readlineSync.question("Whic course do you want to learn ")
 const obj ={
    name:"Sushant",
    age:44,
    [course]:"Not avaliable"

 }

 obj.city="Pune"
 obj.state="MH"
 console.log(obj);