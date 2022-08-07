
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