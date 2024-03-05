let str ="Sushant is a developer and he is upskilling yourself"

function arrangeWords(str){
    let arrOfWords = str.split(" ");

     arrOfWords.sort((a,b)=>a.length-b.length )

     return arrOfWords.join();
}

let res = arrangeWords(str);
console.log(res);