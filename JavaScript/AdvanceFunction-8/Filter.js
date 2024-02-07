const arr = [1,2,3,4,5,6,7,8]

const res = arr.filter(number => {
    return number%2 ===0 });

console.log(res);



// function filterNum(arr){
//     const tempArr =[];
//     for(let number of arr){
//         if(number %2 ===0){
//          tempArr.push(number);
//         }
//     }

//     return tempArr;
// }

// const output = filterNum(arr);
// console.log(output);