// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
    document.querySelector(".content").style.visibility="visible";
    
 })
 
 document.querySelector(".pay_icon").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="hidden";
 })
 // end

// start partnyor slide
 let swiperPartnyor = new Swiper(".mySwiper4", {
  slidesPerView:6,
  spaceBetween:10,
  autoplay:true,
  loop:true
});
// end