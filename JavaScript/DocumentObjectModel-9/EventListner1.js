let startButton =document.querySelector("#btn-start") ;

let countButton = document.querySelector("#btn-count");

let stopButton = document.querySelector("#btn-stop");

let bodyButton = document.querySelector("#body");

let  input = document.querySelector(".input");

let value =0;



startButton.addEventListener('click',()=>{
   if( startButton.innerText === 'Start'){
        startButton.innerText ="Begin";
        startButton.innerHTML ="<span>Lets Start</span>"
   }else{
         startButton.innerText ="Start"
   }
});

countButton.addEventListener('click',()=>{
    value++;
    console.log(value);
})

stopButton.addEventListener('click',()=>{
    // stopButton.classList.add("btn-red");
    stopButton.classList.toggle("btn-red")
})

bodyButton.addEventListener('click',()=>{
    bodyButton.classList.toggle("body-color");
    console.log(bodyButton);
})





// input.addEventListener("change" , ()=>{
//     console.log(input.value);
// })

// input.addEventListener("input",()=>{
//     console.log(input.value);
// })

// input.addEventListener("focus",()=>{
//     console.log(input.value);
// })

// input.addEventListener("keyup",()=>{
//     console.log(input.value);
// })

// input.addEventListener("keydown",()=>{
//     console.log(input.value);
// })
// input.addEventListener("mousedown", (event)=>{
//     console.log(event.button);
// })

// input.addEventListener("mousedown",(event)=>{
//     let xcor =event.pageX;
//     let ycor =event.pageY;
//     let cors =`X cors ${xcor} , Y cor ${ycor}`
//     console.log(cors);
// })
// input.addEventListener("mousedown",(event)=>{
//     let xcor =event.clientX;
//     let ycor =event.clientY;
//     let cors =`X cors ${xcor} , Y cor ${ycor}`
//     console.log(cors);
// })

let form = document.querySelector("#form");
let div  = document.querySelector("#div");
let para = document.querySelector("#para");

form.addEventListener("click",()=>{
    alert("form tag");
})

div.addEventListener("click",()=>{
    alert("div tag");
})

para.addEventListener("click",()=>{
    alert("para tag");
})

form.addEventListener("click",()=>{
    alert("form tag");
}, true)

div.addEventListener("click",()=>{
    alert("div tag");
}, true)

para.addEventListener("click",()=>{
    alert("para tag");
},true)