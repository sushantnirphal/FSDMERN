const arr =[1,2,3,4,[5,6],[[[7,8]]]];

Array.prototype.myFlat= function(depth=1){
    let tempArr =[];
    function getFlatArr(array,depth){
        for(let element of array){
            if(Array.isArray(element) && depth){
                getFlatArr(element,depth-1);
            }else{
                tempArr.push(element);
            }
        }
    }

    getFlatArr(this,depth)
    return tempArr;
};

const res = arr.myFlat(2);

console.log(res);