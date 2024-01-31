//  let readLineSync = require("readline-sync");

//  let number = readLineSync.question("Enter a number less than 50. ");

//  console.log(number);

//  while(number>=50){
//     console.log("Number is greater than 50");
//  }

//  console.log("Number is accepted");

let data =7;

while(data>=0){
    if(data<=5){
        data--;
        continue;
    }

    console.log(data);
    data--;
}