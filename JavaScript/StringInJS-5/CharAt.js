// const displayMessage =" Hi I am sushant and I am full StackDeveloper "

// const index =12;

// const char = displayMessage.charAt(index);

// console.log(char);

//  let code  =displayMessage.charCodeAt(index);

//  console.log(code);

//  console.log(`The ASCII code of ${char} is ${code}`);

function Code (name){
    let n = name.length;
    console.log(n);
    for(let i=0;i<n;i++){
        let chr = name.charAt(i)
       let cod = name.charCodeAt(i);
    
       console.log(` latter:${chr} and code ${cod} `);
    }
    
}


Code("Sushant")


 
