// const slider = document.querySelector(".carousel");
// const nextBtn = document.querySelector(".btn-next");
// const prevtBtn = document.querySelector(".btn-pre");

// let currentSlide =0;
// let maxSlide =slider.length-1;

// slider.forEach(
//     (image,index)=>(image.style.transform = `translateX(${index * 100}%)`)
//     )

// function nextButtonClickHandler(){
//     if(currentSlide === maxSlide){
//         currentSlide =0;
//     }else{
//         currentSlide++;
//     }  

//     slider.forEach((image,index)=>image.style.trasform =`translateX(${(index-currentSlide)*100}%)`)
// }

// function prevButtonClickHandler(){
//     if(currentSlide === maxSlide){
//         currentSlide =maxSlide;
//     }else{
//         currentSlide--;
//     }  
//     slider.forEach(
//         (image,index)=>image.style.trasform =`translateX(${(index-currentSlide)*100}%)`
//         )
// }




const slider = document.querySelectorAll(".carousel");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");


nextBtn.addEventListener("click",nextButtonClickHandler);
prevBtn.addEventListener("click",prevButtonClickHandler);
let currentSlide = 0;
let maxSlide = slider.length - 1;

slider.forEach(
  (image, index) => (image.style.transform = `translateX(${index * 100}%)`)
);

function nextButtonClickHandler() {
  if (currentSlide === maxSlide) {
    currentSlide = 0; // going back to the first image
  } else {
    currentSlide++;
  }

  slider.forEach(
    (image, index) =>
      (image.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
  console.log(currentSlide);
}

function prevButtonClickHandler() {
  if (currentSlide === 0) {
    currentSlide = maxSlide; // going back to the last image
  } else {
    currentSlide--;
  }
  slider.forEach(
    (image, index) =>
      (image.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
  console.log(currentSlide);
}

nextBtn.addEventListener("click", nextButtonClickHandler);
prevBtn.addEventListener("click", prevButtonClickHandler);
