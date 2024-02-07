function doubleValue (number){
    return number * 2;
}

const result = doubleValue(4);
console.log(result);

function appendNumber(arr){
    let newArr = [];
    newArr.push(...arr,5,6);
    return newArr;
}

const res = appendNumber([1,2,3,4,]);
console.log(res);