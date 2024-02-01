let msg = "I am Sushant Nirphal"
console.log(msg.toLowerCase());
console.log(msg);
console.log(msg.toUpperCase());

let flag = false;
 let vowels ="aeiou";

for(let char of msg){
    if(vowels.includes(char.toLowerCase())){
        flag = true;
        break;
    }else {
        flag = false;
    }
}

if(flag){
    console.log("Voel is present");
}else{
    console.log("not present");
}