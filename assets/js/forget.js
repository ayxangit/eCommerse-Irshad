
 
document.querySelector("#btns").addEventListener("click",(e)=>{
    
    let emails = document.querySelector("#emails").value;
    fetch("http://localhost:9000/create-data",{
        method:"POST",
        body:JSON.stringify({
            emails:emails
        })
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        if(emails==""){
            document.querySelector(".content").textContent = "E-mail ünvanınızı daxil edin";
            document.querySelector("#emails").classList.add("color")
        }else{
            document.querySelector(".content").textContent = " ";
            document.querySelector("#emails").classList.remove("color")
            document.querySelector("#emails").value = " "
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
        }
    })
     e.preventDefault();
})