

function showHide(){
    let x = document.querySelector("#password");
    let hide1 = document.querySelector("#hide1");
    let hide2 = document.querySelector("#hide2");

    if(x.type === 'password'){
        x.type = "text";
        hide1.style.display = "none";
        hide2.style.display = "block"
    }else{
        x.type = "password";
        hide1.style.display = "block";
        hide2.style.display = "none"
    }
}

function hideShow(){
    let y = document.querySelector("#restart");
    let hide3 = document.querySelector("#hide3");
    let hide4 = document.querySelector("#hide4");

    if(y.type === 'password'){
        y.type = "text";
        hide3.style.display = "none";
        hide4.style.display = "block"
    }else{
        y.type = "password";
        hide3.style.display = "block";
        hide4.style.display = "none"
    }
}


document.querySelector("#btn").addEventListener("click",(e)=>{
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let restart = document.querySelector("#restart").value
    let text = document.querySelector("#text").value
    let text1 = document.querySelector("#text1").value
    let tel = document.querySelector("#tel").value
    fetch("http://localhost:9000/create-data",{
        method:"POST",
        body: JSON.stringify({
             name:name,
             email:email,
             password:password,
             tel:tel,
             text1:text1,
             text:text,
             restart:restart           
        })
    })
    .then((res)=>res.json())
    .then((res)=>{
          if((name==""),(email==""),(password==""),(tel==""),(text==""),(text1=="")&(restart=="")){
              document.querySelector("#name").classList.add("colorRestart")
              document.querySelector("#email").classList.add("colorRestart")
              document.querySelector("#password").classList.add("colorRestart")
              document.querySelector("#restart").classList.add("colorRestart")
              document.querySelector("#text").classList.add("colorRestart")
              document.querySelector("#text1").classList.add("colorRestart")
              document.querySelector("#tel").classList.add("colorRestart")
            }else{
                document.querySelector("#name").classList.remove("colorRestart")
                document.querySelector("#email").classList.remove("colorRestart")
                document.querySelector("#password").classList.remove("colorRestart")
                document.querySelector("#restart").classList.remove("colorRestart")
                document.querySelector("#text").classList.remove("colorRestart")
                document.querySelector("#text1").classList.remove("colorRestart")
                document.querySelector("#tel").classList.remove("colorRestart")
                if(password == restart){
                    document.querySelector("#name").value = " "
                    document.querySelector("#email").value = " "
                    document.querySelector("#password").value =  " "
                    document.querySelector("#restart").value = " "
                    document.querySelector("#text").value = " "
                    document.querySelector("#text1").valu = " "
                    document.querySelector("#tel").value = " "
                    document.querySelector("#restart").classList.remove("colorRestart1")
                    document.querySelector(".textContent").textContent = " ";
                    Swal.fire(
                      'Good job!',
                      'You clicked the button!',
                      'success'
                    )
                }else{
                    document.querySelector("#restart").classList.toggle("colorRestart1")
                    document.querySelector(".textContent").textContent = "Şifrəni düzgün qeydin"
                }
            }
})
    e.preventDefault();
})
