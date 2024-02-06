let arr1 =[1,2,3];
let arr2 =arr1;

console.log("arr1-",arr1);
console.log("arr2-",arr2);

arr2.push(4);

console.log("updatedarr1-",arr2);
console.log("udeated arr1-" ,arr1);


/* Spread Operator*/ 

let arr3 = [...arr1];
console.log("Arr3",arr3);

arr3.push(5);
console.log("updated Arr1-",arr1);
console.log("Udated Arr3", arr3 );

// for loop

let arr4 = [1,2,3,4];

let arr5 =[];

for(let number of arr4){
    arr5.push(number)
}

console.log("arr4",arr4);
console.log("arr5-",arr5);

arr5.push(5);
console.log("Udated arr4-",arr4);

console.log("Updated arr5 -",arr5);

let nm = "Sushant";

let arr =[...nm];
console.log(arr);