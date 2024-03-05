const arr =[1,2,3,4,1,2,4,3,6,7,8,6,8,2,3,]

function  getNumWithMaxFre(arr){
    let maxCount =0;
    let maxKey =0;
    let arrOfMaxFreqKeyes = [];
    let  obj = arr.reduce((acc,cur)=> cur in acc ? {...acc,[cur]: acc[cur]+1}:{...acc , [cur]:1} ,{})


    const arrOfkeyValue = Object.entries(obj);

   for(let [ ,value] of arrOfkeyValue){
    if(maxCount <value){
        maxCount = value;
    }
   }

    for(let [key,value] of arrOfkeyValue){
        if(value === maxCount){
            arrOfMaxFreqKeyes = [...arrOfMaxFreqKeyes,key];
        }
    }

   for(let key of arrOfMaxFreqKeyes){
        if(maxKey<key){
            maxKey = key;
        }
   }
    return maxKey;
}

let res = getNumWithMaxFre(arr)

console.log(res);