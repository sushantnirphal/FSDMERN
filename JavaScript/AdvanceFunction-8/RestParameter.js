// function calculate(a,b,c,...rest){
//     console.log(a,b);
//     console.log(rest);
// }

// calculate(4,5,6,1,7,2,8,3,9);


function calculate(...rest){
    let total =0;
    for(let number of rest){
        
        total +=number;
    }
    console.log(total);
}

calculate(4,5,6,1,7,2,8,3,9);