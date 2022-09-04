// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
    document.querySelector(".content").style.visibility="visible";
    
 })
 
 document.querySelector(".pay_icon").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="hidden";
 })
 // end


 document.querySelector("#btn").addEventListener("click",(e)=>{
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let tel = document.querySelector("#tel").value;
    let text = document.querySelector("#text").value;
    let message = document.querySelector("#message").value;
    let select = document.querySelector("#select").value;

    fetch("http://localhost:9000/create-data",{
      method:"POST",
      body:JSON.stringify({
        name:name,
        email:email,
        tel:tel,
        select:select,
        text:text,
        message:message
      })
    })
    .then(res=>res.json())
    .then(res=>{
      if((name==""),(email==""),(tel==""),(text=="")&&(message=="")){
         document.querySelector("#name").classList.add("color");
         document.querySelector("#email").classList.add("color");
         document.querySelector("#tel").classList.add("color");
         document.querySelector("#text").classList.add("color");
         document.querySelector("#message").classList.add("color");
         document.querySelector("#select").classList.add("color");
      }else{
        document.querySelector("#name").classList.remove("color");
        document.querySelector("#email").classList.remove("color");
        document.querySelector("#tel").classList.remove("color");
        document.querySelector("#text").classList.remove("color");
        document.querySelector("#message").classList.remove("color");
        document.querySelector("#select").classList.remove("color");


          document.querySelector("#name").value=" "
          document.querySelector("#email").value=" "
          document.querySelector("#tel").value=" "
          document.querySelector("#text").value=" "
          document.querySelector("#message").value=" "
         document.querySelector("#select").value=" "

         document.querySelector("#name").classList.add("colors");
         document.querySelector("#email").classList.add("colors");
         document.querySelector("#tel").classList.add("colors");
         document.querySelector("#text").classList.add("colors");
         document.querySelector("#message").classList.add("colors");
         document.querySelector("#select").classList.add("colors");


         Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      }
    })
    e.preventDefault();

 })