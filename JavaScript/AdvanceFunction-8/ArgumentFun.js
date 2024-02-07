// function total(){
//     let sum =0;
//     console.log(arguments);
//     for(let value of arguments){
//         sum +=value;
//     }
//     // console.log(sum);
//     let arr =[...arguments];
//     console.log(arguments);
//     console.log(arr);
// }

// total(4,5,2,6,7,9,1)

function calculate(a=10){
    console.log(a);
    console.log(arguments);
    arguments[0] =9;
    console.log(arguments);

    console.log(a);
}

calculate(4)