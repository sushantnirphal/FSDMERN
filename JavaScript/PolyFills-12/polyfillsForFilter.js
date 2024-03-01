//Polyfills for filter

const arr = [1,2,3,4,5,6,7];

function getFilteredNum(num){
    return num>3;
}

Array.prototype.myFilter = function(callback){
    let temp =[];
    for(let i=0;i<this.length;i++){
        if(callback.call(this,this[i],i,this)){
            temp.push(this[i]);
        }
    }

    return temp;
}

const result1 = arr.myFilter(getFilteredNum)

console.log(result1);



// function getFilterNum(num){
//     return num >3;
// }

// const result = arr.filter(getFilterNum)

// console.log(result);