const arr=[1,2,3,4,5];

function getSqure(number){
    return number**2;
}

// const output = arr.map(getSqure);
// console.log(output);

const squareofNum = arr.map((number)=>{
    return number **2;
})

console.log(squareofNum);

// function squareofNum(arr){
//     let newarr = [];
//     for(let number of arr){
//         newarr.push(number **2);
//     }

//     return newarr;
// }

// let res = squareofNum(arr)
// console.log(res);