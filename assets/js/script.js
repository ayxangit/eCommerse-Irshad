
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

document.querySelector(".pay_icon").addEventListener("click",()=>{
 document.querySelector(".videoCard").style.visibility="hidden";
})
// end

