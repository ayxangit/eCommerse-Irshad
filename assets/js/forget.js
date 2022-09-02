
 
document.querySelector("#btn").addEventListener("clikc",(e)=>{
    
    let email = document.querySelector("#email").value


    fetch("http://localhost:9000/create-data",{
        method:"POST",
        body:JSON.stringify({
            email:email
        })
    })
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        // if(email==""){
        //     document.querySelector(".content").textContent = "E-mail ünvanınızı daxil edin";
        //     document.querySelector("#email").classList.toggle("red")
        // }else{
        //     document.querySelector(".content").textContent = " ";
        //     document.querySelector("#email").classList.remove("red")
        //     // Swal.fire(
        //     //     'Good job!',
        //     //     'You clicked the button!',
        //     //     'success'
        //     //   )
        // }
    })
    e.preventDefault();
})