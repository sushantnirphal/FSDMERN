const person1 ={
    name:"Sushant",
    age:35,
    adress:{
        city:"Pune",
        state:"MH"
    }
}


const person2 =Object.assign({},person1); 
console.log(person2);

person2.name ="Sumit"
person1.age=111

person1.adress.city="Nagpur"
person2.adress.city="Yavataml"

console.log(person1);
console.log(person2);





// console.log(person1);

// const person2 = person1;

// person2.name ="Sumit"

// console.log(person2);
// console.log(person1);
