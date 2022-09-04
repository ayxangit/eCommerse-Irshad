// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
    document.querySelector(".content").style.visibility="visible";
    
 })
 
 document.querySelector(".pay_icon").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="hidden";
 })
 // end

 document.querySelector("#send").addEventListener("click",(e)=>{
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
        if((name==""),(tel=="")&&(message=="")){
           document.querySelector("#name").classList.add("color")
           document.querySelector("#tel").classList.add("color")
           document.querySelector("#message").classList.add("color")
        }else{
          document.querySelector("#name").classList.remove("color")
          document.querySelector("#tel").classList.remove("color")
          document.querySelector("#message").classList.remove("color")

            document.querySelector("#name").value = ""
            document.querySelector("#tel").value = ""
            document.querySelector("#message").value = ""

            Swal.fire(
              'Good job!',
              'You clicked the button!',
              'success'
            )
        }
    })
    e.preventDefault();
 })