// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
    document.querySelector(".content").style.visibility="visible";
    
 })
 
 document.querySelector(".pay_icon").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="hidden";
 })
// end


// tab js
let visit = document.querySelectorAll(".visit");
let  shop = document.querySelectorAll(".shopping");
visit.forEach(( tabs, index)=>{
        tabs.addEventListener("click",()=>{
           shop.forEach((text)=>{
            text.classList.remove("is-active")
           });
           visit.forEach((tabss)=>{
            tabss.classList.remove("color")
           });
           shop[index].classList.add("is-active");
           visit[index].classList.add("color");
        })
})
// end