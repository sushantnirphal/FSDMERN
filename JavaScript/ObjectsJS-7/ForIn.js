const obj ={
    name:"Sushant",
    city:"pune"
}

const isProperty = "name" in obj;
// console.log(isProperty);

for(let key in obj){
    console.log(key ,obj[key]);
}
