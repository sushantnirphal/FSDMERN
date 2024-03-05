let str ="I am  Developer , freelancer , selfGrowth05 "

function strNoVowels(str){
    let vowels =["a","e","i","o","u"];
    let num = ['0','1','2','3','4','5','6','7','8','9'];
    let updatedStr =""
    for(let char of str){
        if(!vowels.includes(char.toLowerCase()) && !num.includes(char)){
            updatedStr +=char
        }
    }
    return updatedStr;
}

let res = strNoVowels(str);
console.log(res);