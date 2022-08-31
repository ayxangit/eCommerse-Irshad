// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
    document.querySelector(".content").style.visibility="visible";
    
 })
 
 document.querySelector(".pay_icon").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="hidden";
 })
 // end

// start tab js
 let square = document.querySelectorAll(".square_box");
let  box = document.querySelectorAll(".condisioner_box");
square.forEach(( tab, index)=>{
        tab.addEventListener("click",()=>{
           box.forEach((texts)=>{
            texts.classList.remove("is-active")
           });
           square.forEach((tab)=>{
            tab.classList.remove("color")
           });
           box[index].classList.add("is-active");
           square[index].classList.add("color");
        })
})
// end


// let carts = document.querySelectorAll(".add-cart");

// let products = [
//    {
//      name: "Lenovo IP3 15IIL05 (81WE017GRK)",
//      tag:"Notbuk",
//      price:2099.99,
//      inCart:1
//    },
//    {
//      name: "Apple iPad 10.2 Wi-Fi 32 GB (2020) (8th generation) Space Gray",
//      tag:"Planşet",
//      price:799.99,
//      inCart:1
//    },
//    {
//      name: "Xiaomi Mi TV Stick EU HDMI (MDZ-24-AA)",
//      tag:"TV box",
//      price:109.99,
//      inCart:1
//    },
//    {
//      name:"Honor Earbuds 2 Lite T0005 Glacier White",
//      tag:"Qulaqcıqlar",
//      price:169.99,
//      inCart:1
//    },
//    {
//      name: "Panasonic KX-TG1611UAH Dark Gr",
//      tag:"Ev telefonu",
//      price:69.99,
//      inCart:1
//    },
//    {
//      name: "Samsung RT35K5440S8/WT",
//      tag:"Soyuducu",
//      price:16099.99,
//      inCart:1
//    },
//    {
//      name: "Fakir Lucina Red",
//      tag:"Blender",
//      price:159.99,
//      inCart:1
//    },
//    {
//      name: "Fakir Torque 1800 Meat  Frinde ",
//      tag:"Ət çəkən",
//      price:349.99,
//      inCart:1
//    },
//    {
//      name: "Taube TB4802GG Silver",
//      tag:"Soba",
//      price:260.99,
//      inCart:1
//    },
//    // {
//    //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
//    //   tag:"Notbuk",
//    //   price:"2099.99"
//    // },
//    // {
//    //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
//    //   tag:"Notbuk",
//    //   price:"2099.99"
//    // },
//    // {
//    //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
//    //   tag:"Notbuk",
//    //   price:"2099.99"
//    // },
//    // {
//    //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
//    //   tag:"Notbuk",
//    //   price:"2099.99"
//    // },
//    // {
//    //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
//    //   tag:"Notbuk",
//    //   price:"2099.99"
//    // },
//    // {
//    //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
//    //   tag:"Notbuk",
//    //   price:"2099.99"
//    // },
//    // {
//    //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
//    //   tag:"Notbuk",
//    //   price:"2099.99"
//    // },
//    // {
//    //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
//    //   tag:"Notbuk",
//    //   price:"2099.99"
//    // },
//  ]

// for(let i=0; i<carts.length;i++){
//    carts[i].addEventListener("click",(e)=>{
//      cartNumbers(products[i]);
//      totalCost(products[i])
//      e.preventDefault();
//    })
// }

// function onLoadCartNumbers(){
//  let productNumbers= localStorage.getItem("cartNumbers");
//  if(productNumbers){
//    document.querySelector(".cart small").textContent=productNumbers;
//  }
// }

// function cartNumbers(product){
//  let productNumbers= localStorage.getItem("cartNumbers");
//  productNumbers= parseInt(productNumbers);

//  if(productNumbers){
//    localStorage.setItem("cartNumbers",productNumbers+1);
//    document.querySelector(".cart small").textContent= productNumbers+1
//  }else{
//    localStorage.setItem("cartNumbers",1);
//    document.querySelector(".cart small").textContent=1
//  }
//  setItems(product);
// }

// function setItems(product){
//  let cartItems = localStorage.getItem("productsInCart");
//   cartItems = JSON.parse(cartItems);
 
//  if(cartItems != null){
//    if(cartItems[product.tag]==undefined){
//       cartItems ={
//        ...cartItems,
//        [product.tag] : product
//       }
//    }
//    cartItems[product.tag].inCart += 1
//  }else{
//      product.inCart = 1
//          cartItems = {
//             [product.tag] : product
//         }
//  }
//     localStorage.setItem("productsInCart",JSON.stringify(cartItems))
// }

// function totalCost(product) {
//  let cartCost = localStorage.getItem("totalCost")

//  if(cartCost != null){
//    cartCost = parseInt(cartCost)
//    localStorage.setItem("totalCost",cartCost + product.price)
//  }else{
//    localStorage.setItem("totalCost",product.price)
//  }
// }

// onLoadCartNumbers();