const tmark = 74;
// if(tmark<40){
//     console.log("You need to work hard");
// }else{
//     console.log("You cleared the exam");
// }

// (tmark<40) ? console.log("You need to work hard"): console.log("You cleared exam");
// const result = tmark<40 ? "You need to work hard" : "You cleared  exam";
// console.log(result);


        // Part 2 

// const avg = 85;

// if(avg<40){
//     console.log("You need to work hard");
// } else if(avg <60){
//     console.log("A Grade");
// }else if(avg <75){
//     console.log("A+ Grade");
// }else {
//     console.log("Genius");
// }

const Result  = tmark < 40 ? "You need work hard": tmark <60 ? "B grade" : tmark <75 ? "A+ grade" :  "Genius";
 console.log(Result);