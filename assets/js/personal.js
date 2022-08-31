// post
document.querySelector("#btn").addEventListener("click",(e)=>{
    let password = document.querySelector("#password").value
    let email = document.querySelector("#email").value

    fetch("http://localhost:9000/create-data",{
        method:"POST",
        body:JSON.stringify({
            password:password,
            email:email
        })
    })
    .then(res=>res.json())
    .then(res=>{
        if((password=="")&(email=="")){
            document.querySelector(".message").style.display = "block"
            document.querySelector(".parol").style.display = "block"
            document.querySelector("#email").classList.add("red");
            document.querySelector("#password").classList.add("red");
            document.querySelector("#mexc").style.display = "block"
            document.querySelector("#exc").style.display = "block"
        }else{
            document.querySelector(".message").style.display = "none"
            document.querySelector(".parol").style.display = "none"
            document.querySelector("#email").classList.add("green");
            document.querySelector("#password").classList.add("green");
            document.querySelector("#email").classList.remove("red");
            document.querySelector("#password").classList.remove("red");
            document.querySelector("#mcheck").style.display = "block"
            document.querySelector("#check").style.display = "block"
            document.querySelector("#mexc").style.display = "none"
            document.querySelector("#exc").style.display = "none"
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
        }
    })
    e.preventDefault();
})
// end