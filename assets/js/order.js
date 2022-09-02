// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
    document.querySelector(".content").style.visibility="visible";
    
 })
 
 document.querySelector(".pay_icon").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="hidden";
 })
 // end

 document.querySelector("#send").addEventListener("click",()=>{
    let name = document.querySelector("#name").value
    let tel = document.querySelector("#tel").value
    let message = document.querySelector("#message").value

    fetch("http://localhost:9000/create-data",{
      method:"POST",
      body:JSON.stringify({
        name:name,
        tel:tel,
        message:message
      })
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
    })
 })