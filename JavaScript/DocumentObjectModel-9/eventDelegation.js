let colorButton = document.querySelector(".btn");



colorButton.addEventListener('click',(event)=>{
    let btnText = event.target.innerText;
    if(btnText === "Red"){
        event.target.classList.toggle("btn-red");
    }

    
    if(btnText === "Green"){
        event.target.classList.toggle("btn-green");
    }
    if(btnText === "Yellow"){
        event.target.classList.toggle("btn-yellow");
    }
    if(btnText === "Blue"){
        event.target.classList.toggle("btn-blue");
    }

   
})