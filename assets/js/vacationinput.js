// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
    document.querySelector(".content").style.visibility="visible";
    
 })
 
 document.querySelector(".pay_icon").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="hidden";
 })
 // end


 document.querySelector("#btn").addEventListener("click",(e)=>{
    let name = document.querySelector("#name").value
    let name2 = document.querySelector("#name2").value
    let name3 = document.querySelector("#name3").value

    let text = document.querySelector("#text").value
    let text2 = document.querySelector("#text2").value
    let text3 = document.querySelector("#text3").value
    let text4 = document.querySelector("#text4").value
    let text5 = document.querySelector("#text5").value
    let text6 = document.querySelector("#text6").value
    let text7 = document.querySelector("#text7").value

    let rd1 = document.querySelector("#rd1").value
    let rd2 = document.querySelector("#rd2").value
    let rd3 = document.querySelector("#rd3").value
    let rd4 = document.querySelector("#rd4").value
    let rd5 = document.querySelector("#rd5").value
    let rd6 = document.querySelector("#rd6").value
    let rd7 = document.querySelector("#rd7").value
    let rd8 = document.querySelector("#rd8").value

    let select = document.querySelector("#select").value
    let select2 = document.querySelector("#select2").value
    let select3 = document.querySelector("#select3").value
    let select4 = document.querySelector("#select4").value
    let select5 = document.querySelector("#select5").value
    let select6 = document.querySelector("#select6").value
    let select7 = document.querySelector("#select7").value

    let check = document.querySelector("#check").value
    let check2 = document.querySelector("#check2").value
    let check3 = document.querySelector("#check3").value
    let check4 = document.querySelector("#check4").value
    let check5 = document.querySelector("#check5").value
    let check6 = document.querySelector("#check6").value

    let file = document.querySelector("#file").value
    let file2 = document.querySelector("#file2").value

    let tel = document.querySelector("#tel").value

    let date = document.querySelector("#date").value

    let email = document.querySelector("#email").value

    fetch("http://localhost:9000/create-data",{
      method:"POST",
      body:JSON.stringify({
          name : name,
          name2 : name2,
          name3 : name3,
          tel:tel,
          email:email,
          date:date,
          file:file,
          file2:file2,
          check:check,
          check2:check2,
          check3:check3,
          check4:check4,
          check5:check5,
          check6:check6,
          select:select,
          select2:select2,
          select3:select3,
          select4:select4,
          select5:select5,
          select6:select6,
          select7:select7,
          text:text,
          text2:text2,
          text3:text3,
          text4:text4,
          text5:text5,
          text6:text6,
          text7:text7,
          rd1:rd1,
          rd2:rd2,
          rd3:rd3,
          rd4:rd4,
          rd5:rd5,
          rd6:rd6,
          rd7:rd7,
          rd8:rd8,
      })
    })
    .then((res)=>res.json())
    .then((res)=>{
      if((name==""),(name2==""),(name3==""),(text==""),(text2==""),(text3==""),(text4==""),(text5==""),(text6==""),(text7==""),(tel==""),
      (select==""),(select2==""),(select3==""),(select4==""),(select5==""),(select6==""),(select7==""),(rd1==""),(rd2==""),(rd3==""),
      (rd4==""),(rd5==""),(rd6==""),(rd7==""),(check==""),(check2==""),(check3==""),(check4==""),(check5==""),(check6==""),(file==""),(file2==""),
      (email=="")&&(date=="")){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }else{
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
      }
    })
    e.preventDefault();
 })