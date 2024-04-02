const input =document.querySelector(".input")

function inputHandler(e){
    console.log(e.target.value);
}

function debounce(callback,delay){
    let timerId ;
    return function(...args){
        clearTimeout(timerId)
      timerId =  setTimeout(()=>{
            callback(...args)
        },1000)
    }
}

const debounceInputHandler = debounce(inputHandler,500);
input.addEventListener("keyup",debounceInputHandler)