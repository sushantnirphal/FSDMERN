const str = "sus";

// const rever = str.split().reverse().join("");
// const arrOdChar = str.split("");
// const reverseChar = arrOdChar.reverse();
// const reverseString = reverseChar.join("");
// console.log(reverseString);

// if(str === rever){
//     console.log("is Palindrome");
// }else{
//     console.log("is Not palindrome");
// }

function reversSting(str){
    let reversedStr =""

    for(let i =str.length-1;i>=0;i--){
        reversedStr = reversedStr + str[i]; 
    }

    return reversedStr;
}

let res = reversSting(str);
console.log(res);

if(str === res){
    console.log("String is palindrome");
}else{
    console.log("String is not palindrome");
}