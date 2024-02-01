/* function greet(name,city){
    console.log(`Hello, Good Morning ${name}`);
    console.log(`Thanks for joing from ${city}`);
}

greet("Sushant","pune");
greet("Jay","Thane");
greet("Sumit","Kolhapur"); */



function Sum(min,max){
    let sum =0;
    for(let i=min;i<=max;i++){
        sum = sum +i;
    }
    console.log(`sum of ${min} to ${max} is : ${sum}`);
}

Sum(1,10);
Sum(20,100);
Sum(1,100);