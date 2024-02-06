const avaliableSize =["S","M","XL","XXL","XXXL"];

const readlineSync = require("readline-sync");

const userSize = readlineSync.question("Which size of shirt do you want to");

const isSizeAvaliable = avaliableSize.includes(userSize);

console.log(isSizeAvaliable);

if(isSizeAvaliable){
    console.log("Is available");
}else {
    console.log("Not available");
}

