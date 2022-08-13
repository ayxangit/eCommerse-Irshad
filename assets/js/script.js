
// start sale slide 
      let swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        autoplay:true,
        loop:true,
        speed:500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    // end

// start time slide
let swiperTime = new Swiper(".mySwiper2", {
    autoplay:true,
    loop:true,
    speed:300
});
// end

// start producy slide
let swiperProduct = new Swiper(".mySwiper3", {
  slidesPerView:4,
  speed:500,
  autoplay:true,
  loop:true
 
});
// end

// start partnyor slide
let swiperPartnyor = new Swiper(".mySwiper4", {
  slidesPerView:6,
  spaceBetween:10,
  autoplay:true,
  loop:true
});
// end

// start mini slayd section
let swiperSlide = new Swiper(".mySwiper5", {
  slidesPerView:2,
  spaceBetween:25
});
// end

// start video slayd section
let swiperVideo = new Swiper(".mySwiper6", {
    slidesPerView:3,
    spaceBetween:20
});
// end

// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="visible";
   
})

document.querySelector(".pay_icon").addEventListener("click",()=>{
  document.querySelector(".content").style.visibility="hidden";
})
// end

// vide0 card
document.querySelector(".videoSlayd").addEventListener("click",()=>{
  document.querySelector(".videoCard").style.visibility="visible";
  
})

document.querySelector(".video_icon").addEventListener("click",()=>{
 document.querySelector(".videoCard").style.visibility="hidden";
})

document.querySelector(".videoSlayd2").addEventListener("click",()=>{
  document.querySelector(".videoCard2").style.visibility="visible";
  
})

document.querySelector(".video_icon2").addEventListener("click",()=>{
 document.querySelector(".videoCard2").style.visibility="hidden";
})

document.querySelector(".videoSlayd3").addEventListener("click",()=>{
  document.querySelector(".videoCard3").style.visibility="visible";
  
})

document.querySelector(".video_icon3").addEventListener("click",()=>{
 document.querySelector(".videoCard3").style.visibility="hidden";
})
// end

// start countdown reason section



const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")


const currentDate = new Date().getFullYear();

const saleDate = new Date(` January 01 ${currentDate+1} 00:00:00`);

function saleTimeReason() {
    const currentTime = new Date();
    const diffrent = saleDate-currentTime;

    
    const d = Math.floor(diffrent/1000/60/60/24)%30;
    const h = Math.floor(diffrent/1000/60/60)%24;
    const m = Math.floor(diffrent/1000/60)%60;
    const s = Math.floor(diffrent/1000)%60;

   days.innerHTML=d;
}

setInterval(saleTimeReason,1000)