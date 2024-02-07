//  function wrapper(){
//     return "Welcome to GFG !!!"
//  }

// //  HOF
//  function  greetMsg(wrapper){
//     console.log("Sushant",wrapper());
//  }

//  greetMsg(wrapper)


//  function displayMsg(){
//     return function(){
//         console.log("Hello from GFG");
//     }
//  }

//  const output = displayMsg();

//  output();



// const arr = [1,2,3,4,5];

// function sqareOfNum(arr){
//     let squaredNum =[];

//     for(let number of arr){
//         squaredNum.push(number **2);
//     }

//     return squaredNum;
// }

// const output = sqareOfNum(arr);

// function cubeOfNum(){
//     let cubedNum =[];
//     for(number of arr){
//         cubedNum.push(number **3);
//     }

//     return cubedNum;
// }

// const result = cubeOfNum(arr);
// console.log(result);
// console.log(output);


const arr = [1,2,3,4,5];
function square (number){
    return number**2
}
function cube (number){
    return number**3
}

function calculatePower(wrapper,arr){
   let newarr =[];
   for(let number of arr){
    newarr.push(wrapper(number))
   }

   return  newarr;
}

const  squareOfNumbers = calculatePower(square,arr);
console.log(squareOfNumbers);
const cubeOfNumbers = calculatePower(cube,arr);
console.log(cubeOfNumbers);