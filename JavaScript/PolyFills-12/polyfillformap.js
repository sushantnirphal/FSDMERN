const arr = [1,2,3,4,5];

// const squaredArr =arr.map(number=> number**2)

// console.log(squaredArr); 

function getSquredNum(num){
    return num *2;
}

Array.prototype.myMap = function (callback){
    let tempArr =[];
    for(let i=0;i<this.length;i++){
        tempArr.push(callback(this[i],i,this));
    }
    return tempArr;
}


const squaredArr = arr.myMap(getSquredNum);
console.log(squaredArr);