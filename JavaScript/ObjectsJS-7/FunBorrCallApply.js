const user1={
    name : "Sushant",
    age :30,
};

const user2={
    name:"Lakhan",
    age:100,
};
const user3={
    name:"Sumit",
    age:140,
};

function sayHi(degree, year){
    console.log(this.name,degree,year);
}

// sayHi.call(user1, "CSE",2023);
// sayHi.call(user2,"ECE",2022);

/*  Bind  */  

const result = sayHi.bind(user3,"B-Tech - cs",2022);
result();