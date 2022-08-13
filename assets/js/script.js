
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
    // loop:true,
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
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

const dayss = document.querySelector("#dayss");
const hourss = document.querySelector("#hourss");
const minutess = document.querySelector("#minutess");
const secondss = document.querySelector("#secondss");

const dy = document.querySelector("#dy");
const hr = document.querySelector("#hr");
const mt = document.querySelector("#mt");
const sd = document.querySelector("#sd");

const currentYear = new Date().getFullYear();

const saleYear = new Date(`September 01 ${currentYear+1} 00:00:00`);

function saleTime() {
    const currentTime = new Date();
    const diff = saleYear-currentTime;

    const d = Math.floor(diff/1000/60/60/24)%30;
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;

    days.innerHTML=d + " " + "Gün";
    hours.innerHTML= h<10 ? '0' +  h + ":" : h;
    minutes.innerHTML= m<10 ? '0' +  m + ":"  : m ;
    seconds.innerHTML= s<10 ?  '0' +  s  : s;

    day.innerHTML=d + " " + "Gün";
    hour.innerHTML= h<10 ? '0' +  h + ":" : h;
    minute.innerHTML= m<10 ? '0' + m + ":" : m ;
    second.innerHTML= s<10 ?  '0' +  s  : s;

    dayss.innerHTML=d + " " + "Gün";
    hourss.innerHTML= h<10 ? '0' +  h + ":" : h;
    minutess.innerHTML= m<10 ? '0' + m + ":" : m ;
    secondss.innerHTML= s<10 ?  '0' +  s  : s;

    dy.innerHTML=d + " " + "Gün";
    hr.innerHTML= h<10 ? '0' +  h + ":" : h;
    mt.innerHTML= m<10 ? '0' + m + ":" : m ;
    sd.innerHTML= s<10 ?  '0' +  s  : s;
    
}

setInterval(saleTime,1000)

// end