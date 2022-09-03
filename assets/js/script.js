
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
  loop:true,
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    375: {
      slidesPerView: 1,
    },
}
});
// end

// start more slide
let swiperMoreSlide = new Swiper(".mySwipers", {
  slidesPerView:4,
  speed:500,
  autoplay:true,
  loop:true,
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    375: {
      slidesPerView: 1,
    },
}
});
// end

// start partnyor slide
let swiperPartnyor = new Swiper(".mySwiper4", {
  slidesPerView:6,
  spaceBetween:10,
  autoplay:true,
  loop:true,

  breakpoints: {
    1500: {
      slidesPerView: 6,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 10
    },
}
});
// end

// start mini slayd section
let swiperSlide = new Swiper(".mySwiper5", {
  slidesPerView:2,
  spaceBetween:25,
  breakpoints: {
    1500: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 25,
      autoplay:true,
      loop:true,
    },
}
});
// end

// start video slayd section
let swiperVideo = new Swiper(".mySwiper6", {
    slidesPerView:3,
    spaceBetween:20,
    breakpoints: {
      1500: {
        slidesPerView: 3,
        spaceBetween:20
      },
      768: {
        slidesPerView: 3,
        spaceBetween:20
      },
      375: {
        slidesPerView: 1,
        spaceBetween:20,
        loop:true,
        autoplay:true
      },
  }
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


document.querySelector(".videoSlayd4").addEventListener("click",()=>{
  document.querySelector(".videoCard4").style.visibility="visible";
  
})

document.querySelector(".video_icon4").addEventListener("click",()=>{
 document.querySelector(".videoCard4").style.visibility="hidden";
})

document.querySelector(".videoSlayd5").addEventListener("click",()=>{
  document.querySelector(".videoCard5").style.visibility="visible";
  
})

document.querySelector(".video_icon5").addEventListener("click",()=>{
 document.querySelector(".videoCard5").style.visibility="hidden";
})

document.querySelector(".videoSlayd6").addEventListener("click",()=>{
  document.querySelector(".videoCard6").style.visibility="visible";
  
})

document.querySelector(".video_icon6").addEventListener("click",()=>{
 document.querySelector(".videoCard6").style.visibility="hidden";
})
// end

// start countdown reason section
const dayy = document.querySelector("#dayy");
const hourr = document.querySelector("#hourr");
const minutee = document.querySelector("#minutee");
const secondd = document.querySelector("#secondd");

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

const saleYear = new Date(`September 31 ${currentYear+3} 00:00:00`);

function saleTime() {
    const currentTime = new Date();
    const diff = saleYear-currentTime;

    const d = Math.floor(diff/1000/60/60/24)%30;
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;

    dayy.innerHTML=d + " " + "Gün";
    hourr.innerHTML= h<10 ? '0' +  h  + ':' : h;
    minutee.innerHTML= m<10 ? '0' +  m + ":"  : m ;
    secondd.innerHTML= s<10 ?  '0' +  s  : s;

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


//  start tab js
let tabs = document.querySelectorAll(".tab_toggle");
let  text = document.querySelectorAll(".tabText");
tabs.forEach(( tab, index)=>{
        tab.addEventListener("click",()=>{
           text.forEach((texts)=>{
            texts.classList.remove("is-active")
           });
           tabs.forEach((tab)=>{
            tab.classList.remove("opacity")
           });
           text[index].classList.add("is-active");
           tabs[index].classList.add("opacity");
        })
})

let tab = document.querySelectorAll(".tab_toggles");
let  texts = document.querySelectorAll(".tabTexts");
tab.forEach(( tabs, index)=>{
        tabs.addEventListener("click",()=>{
           texts.forEach((text)=>{
            text.classList.remove("is-actives")
           });
           tab.forEach((tabss)=>{
            tabss.classList.remove("opacitys")
           });
           texts[index].classList.add("is-actives");
           tab[index].classList.add("opacitys");
        })
})

let toggle = document.querySelectorAll(".toggle");
let  textt = document.querySelectorAll(".text");
toggle.forEach(( tab, index)=>{
        tab.addEventListener("click",()=>{
           textt.forEach((texts)=>{
            texts.classList.remove("is-active")
           });
           toggle.forEach((tab)=>{
            tab.classList.remove("colors")
           });
           textt[index].classList.add("is-active");
           toggle[index].classList.add("colors");
        })
})

// // end

