const slider=document.querySelector(".slider");
const afterImg=document.querySelector(".img-after");
const wrapper=document.querySelector(".wrapper");
let isPressed=false;
wrapper.addEventListener("mousedown",()=>{
    isPressed=true;
});
window.addEventListener("mouseup",()=>{
    isPressed=false;
});
wrapper.addEventListener("mousemove",(e)=>{
    if (!isPressed)return;
const bounds=wrapper.getBoundingClientRect();
const x=e.clientX-bounds.left;
const percent=(x/bounds.width)*100;
    slider.style.left=`${percent}%`;
    afterImg.style.clipPath=`inset(0${100-percent}%0 0)`;
});
