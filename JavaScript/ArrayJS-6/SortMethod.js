// const fruits =["Apple","Cherry","Banana","Orange"];

// fruits.sort();
// console.log(fruits);

let num =[1,3,2,4,6,5,7,9,10];
// let number= num.sort();

// console.log(number);

function sortAscendingOrder(a,b){
    return a-b;

}

num.sort(sortAscendingOrder);
console.log(num);