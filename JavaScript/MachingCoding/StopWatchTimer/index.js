const currentTime = document.querySelector(".para");
const buttonParent = document.querySelector(".btn-container");

let sec =0;
let min =0;
let hrs =0;
function handleClickBtn(e) {
    const btn = e.target.name;
   if(btn === "start"){
    setInterval(() => {
        sec++
        if(second>58){
            second =0;
            min++;
        }
        currentTime.innerText = ` ${hrs} : ${min} : ${sec}`
    }, 1000);
   }
}

buttonParent.addEventListener("click",handleClickBtn)

