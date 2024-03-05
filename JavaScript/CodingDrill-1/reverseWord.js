const str = "react is a library"

function reverseWords(str){
    let arrWords = str.split(" ");

    let reversedwords = arrWords.map((word)=>
        word.split("").reverse().join("")
    );
    return reversedwords.join(" ");
}

const res = reverseWords(str);

console.log(res);