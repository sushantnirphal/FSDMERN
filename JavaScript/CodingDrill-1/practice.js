// function calc(a,b){
//     arguments[2] = 8
//     console.log(arguments);
//     return a+ b;
// }

// const total = calc(1,3,4,5,6,7);
// console.log(total);

function calculate(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}

calculate(2,3,4,5,6,7,8,11.4,10)