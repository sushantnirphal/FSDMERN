function calculate(number){
    let total=0;
    for(let i=0;i<=number;i++){
        total =total+i;
    }

    return total;
}

console.log(calculate(100));

function recursiveSum(number){
    if( number===1){
        return  number;
    }
    return number + recursiveSum(number-1);
}

console.log(recursiveSum(10)); 


function fact(number){
    if(number ===1){
        return number;
    }

    return number * fact(number-1);

}

let factorial = fact(5);
console.log(factorial);