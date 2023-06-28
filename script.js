const carousel = document.querySelector(".carousel");
// firstImg = carousel.querySelectorAll("img")[0];

let isDragStart = false,
  prevPageX,
  prevScrollLeft;
// let firstImgWidth = firstImg.clientWidth + 14;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
  
};

const dragStart_t = (e) => {
  isDragStart = true;
  touch = e.touches[0];
  prevPageX_t = touch.pageX;
  prevScrollLeft_t = carousel.scrollLeft;
};



const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragging_t = (e) => {
  if (!isDragStart) return;
  carousel.classList.add("dragging");
  let positionDiff_t = e.touches[0].pageX - prevPageX_t;
  carousel.scrollLeft = prevScrollLeft_t - positionDiff_t;
  // let positionDiff_ty = e.touches[0].pageY - prevPageY_t;
  // carousel.scrollTo = prevScrollTop_t - positionDiff_ty;
  // console.log(prevScrollTop_t - positionDiff_ty)
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart_t);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging_t);

carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


const questions = document.querySelectorAll(".questions-container");
// console.log(questions)

// const showAnswer =(e)=>{
//     console.log(element)
// }
let i = 0;

questions.forEach((element) => {
  element.addEventListener("mousedown", () => {
    const answer = element.querySelector(".answer");
    const icon = element.querySelector(".icon");
    if (i == 0) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.classList.add("icon-visible");
      element.classList.add('question-border')
      i = 1;
    } else {
      answer.style.maxHeight = null;
      icon.classList.remove("icon-visible");
      element.classList.remove('question-border')
      i = 0;
    }
  });
});


const hamburger = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".ham-menu");
const navBar = document.querySelector(".nav-bar");
console.log(hamMenu.scrollHeight)

let ini = 0;
hamburger.addEventListener("click", ()=>{
    if(ini==0){
        hamburger.classList.add("showham");
        hamMenu.style.maxHeight = hamMenu.scrollHeight + 'px';
        hamburger.style.rotate = 90 + 'deg';
        ini = 1;
    }
    else{
        hamburger.classList.remove("showham");
        hamMenu.style.maxHeight = null;
        hamburger.style.rotate = -0 + 'deg';
        ini = 0;
    }
})
