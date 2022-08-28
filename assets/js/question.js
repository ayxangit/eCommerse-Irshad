// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
    document.querySelector(".content").style.visibility="visible";
    
 })
 
 document.querySelector(".pay_icon").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="hidden";
 })
 // end


// question
document.querySelector("#click").addEventListener("click",()=>{
     document.querySelector(".text_question").classList.toggle("list");
     document.querySelector(".questionBoxs").classList.toggle("height");
     document.querySelector(".questionBoxs").classList.toggle("colorBorder")
     document.querySelector(".iconQuestion").classList.toggle("iconMg")
     document.querySelector("#click").classList.toggle("down"); 
})
document.querySelector("#add").addEventListener("click",()=>{
  document.querySelector(".text_question4").classList.toggle("list");
  document.querySelector(".questionBoxs4").classList.toggle("height");
  document.querySelector(".questionBoxs4").classList.toggle("colorBorder")
  document.querySelector(".iconQuestion4").classList.toggle("iconMg")
  document.querySelector("#add").classList.toggle("down"); 
})

document.querySelector("#clicks").addEventListener("click",()=>{
  document.querySelector(".text_question2").classList.toggle("list");
  document.querySelector(".questionBoxs2").classList.toggle("height2");
  document.querySelector(".questionBoxs2").classList.toggle("colorBorder")
  document.querySelector(".iconQuestion2").classList.toggle("iconMg")
  document.querySelector("#clicks").classList.toggle("down"); 
})

document.querySelector("#get").addEventListener("click",()=>{
  document.querySelector(".text_question6").classList.toggle("list");
  document.querySelector(".questionBoxs6").classList.toggle("height2");
  document.querySelector(".questionBoxs6").classList.toggle("colorBorder")
  document.querySelector(".iconQuestion6").classList.toggle("iconMg")
  document.querySelector("#get").classList.toggle("down"); 
})

document.querySelector("#gets").addEventListener("click",()=>{
  document.querySelector(".text_question7").classList.toggle("list");
  document.querySelector(".questionBoxs7").classList.toggle("height2");
  document.querySelector(".questionBoxs7").classList.toggle("colorBorder")
  document.querySelector(".iconQuestion7").classList.toggle("iconMg")
  document.querySelector("#gets").classList.toggle("down"); 
})

document.querySelector("#final").addEventListener("click",()=>{
  document.querySelector(".text_question8").classList.toggle("list");
  document.querySelector(".questionBoxs8").classList.toggle("height2");
  document.querySelector(".questionBoxs8").classList.toggle("colorBorder")
  document.querySelector(".iconQuestion8").classList.toggle("iconMg")
  document.querySelector("#final").classList.toggle("down"); 
})

document.querySelector("#clic").addEventListener("click",()=>{
  document.querySelector(".text_question3").classList.toggle("list");
  document.querySelector(".questionBoxs3").classList.toggle("height3");
  document.querySelector(".questionBoxs3").classList.toggle("colorBorder")
  document.querySelector(".iconQuestion3").classList.toggle("iconMg")
  document.querySelector("#clic").classList.toggle("down"); 
})

document.querySelector("#adds").addEventListener("click",()=>{
  document.querySelector(".text_question5").classList.toggle("list");
  document.querySelector(".questionBoxs5").classList.toggle("height3");
  document.querySelector(".questionBoxs5").classList.toggle("colorBorder")
  document.querySelector(".iconQuestion5").classList.toggle("iconMg")
  document.querySelector("#adds").classList.toggle("down"); 
})

// end


// tab js
let list = document.querySelectorAll(".question_list");
let  info = document.querySelectorAll(".info_question");
list.forEach(( tabs, index)=>{
        tabs.addEventListener("click",()=>{
           info.forEach((text)=>{
            text.classList.remove("is-active")
           });
           list.forEach((tabss)=>{
            tabss.classList.remove("color")
           });
           info[index].classList.add("is-active");
           list[index].classList.add("color");
        })
})

// end






