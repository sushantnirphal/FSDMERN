let post = "I am FullStack WebDeveloper";
console.log(post.includes("r"));

let vowels ="aeiouAEIOU";
for(let char of post){
    if(vowels.includes(char)){
        console.log(`${char} is a vowels`);
    }
}