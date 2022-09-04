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

let carts = document.querySelectorAll(".add-cart");
let product = [
   {
     name: "GREE GWH12AAB-K3NNA2A/I Bora R410 MK Gree",
     tag:"Kondisioner",
     img:"muherriki-temir-olunubasas",
     price:899.99,
     inCart:0
   },
   {
    name: "BOSCH KDN43VL20U (Outlet) 74909",
    tag:"Soyuducu",
    img:"75c02c983eef5b6f5b0351ca77c46571",
    price:1499.99,
    inCart:0
  },
  {
    name: "Samsung WW70AAS25AX/LP (Outlet) LWRB0005",
    tag:"Paltaryuyan",
    img:"1-0",
    price:949.99,
    inCart:0
  },
  {
    name: "Samsung WW65A4S21CX/LP (Outlet) LWR900152",
    tag:"Paltaryuyan",
    img:"1-0",
    price:849.99,
    inCart:0
  },
  {
    name: "Taube TB7002GG Silver (Outlet) 11032022-0420",
    tag:"Soba",
    img:"taube-tb7002gg-silver",
    price:199.99,
    inCart:0
  },
  {
    name: "Taube TB7002GG Silver (Outlet) 11032022-0420",
    tag:"Soba",
    img:"taube-tb7002gg-silver",
    price:259.99,
    inCart:0
  },
  {
    name: "Taube TB7002GG Silver (Outlet) 11032022-0420",
    tag:"Soba",
    img:"taube-tb7002gg-silver",
    price:399.99,
    inCart:0
  },
  {
    name: "Taube TB7002GG Silver (Outlet) 11032022-0420",
    tag:"Soba",
    img:"taube-tb7002gg-silver",
    price:289.99,
    inCart:0
  },
  {
    name: "Taube TB7002GG Silver (Outlet) 11032022-0420",
    tag:"Soba",
    img:"taube-tb7002gg-silver",
    price:199.99,
    inCart:0
  },
  {
    name: "GREE GWH12AAB-K3NNA2A/I Bora R410 MK Gree",
    tag:"Kondisioner",
    img:"muherriki-temir-olunubasas",
    price:899.99,
    inCart:0
  },
  {
   name: "BOSCH KDN43VL20U (Outlet) 74909",
   tag:"Soyuducu",
   img:"75c02c983eef5b6f5b0351ca77c46571",
   price:1499.99,
   inCart:0
 },
 {
   name: "Samsung WW70AAS25AX/LP (Outlet) LWRB0005",
   tag:"Paltaryuyan",
   img:"1-0",
   price:949.99,
   inCart:0
 },
 {
   name: "Samsung WW65A4S21CX/LP (Outlet) LWR900152",
   tag:"Paltaryuyan",
   img:"1-0",
   price:849.99,
   inCart:0
 },
 {
   name: "Taube TB7002GG Silver (Outlet) 11032022-0420",
   tag:"Soba",
   img:"taube-tb7002gg-silver",
   price:199.99,
   inCart:0
 },
 {
   name: "Taube TB7002GG Silver (Outlet) 11032022-0420",
   tag:"Soba",
   img:"taube-tb7002gg-silver",
   price:259.99,
   inCart:0
 },
  
]
 
 for(let i=0; i<carts.length;i++){
     carts[i].addEventListener("click",(e)=>{
       cartNumbers(product[i]);
       totalCost(product[i])
       e.preventDefault();
     })
 }
 
 function onLoadCartNumbers(){
   let productNumbers= localStorage.getItem("cartNumbers");
   if(productNumbers){
     document.querySelector(".cart small").textContent=productNumbers;
   }
 }
 
 function cartNumbers(product){
   let productNumbers= localStorage.getItem("cartNumbers");
   productNumbers= parseInt(productNumbers);
 
   if(productNumbers){
     localStorage.setItem("cartNumbers",productNumbers+1);
     document.querySelector(".cart small").textContent= productNumbers+1
   }else{
     localStorage.setItem("cartNumbers",1);
     document.querySelector(".cart small").textContent=1
   }
   setItems(product);
 }
 
 function setItems(product){
   let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
   
   if(cartItems != null){
     if(cartItems[product.img]==undefined){
        cartItems ={
         ...cartItems,
         [product.img] : product
        }
     }
     cartItems[product.img].inCart += 1
   }else{
       product.inCart = 1
           cartItems = {
              [product.img] : product
          }
   }
      localStorage.setItem("productsInCart",JSON.stringify(cartItems))
 }
 
 function totalCost(product) {
   let cartCost = localStorage.getItem("totalCost")
 
   if(cartCost != null){
     cartCost = parseInt(cartCost)
     localStorage.setItem("totalCost",cartCost + product.price)
   }else{
     localStorage.setItem("totalCost",product.price)
   }
 }
 
 function displayCart(){
     let cartItems = localStorage.getItem("productsInCart");
 
     cartItems = JSON.parse(cartItems);
     console.log(cartItems);
     let productCarts = document.querySelector(".carts");
     let cartCost = localStorage.getItem("totalCost")
 
     if(cartItems && productCarts){
       productCarts.innerHTML = "";
       Object.values(cartItems).map(item=>{
         productCarts.innerHTML += `
         <div class="container cartCon">
         <div class="product_cart">
             <div class="product_img">
                 <img src="/assets/image/imagess/${item.img}.jpg">
             </div>
             <div class="text_product">
                 <p>
                    ${item.tag}
                 </p>
                 <h3>
                   ${item.name}
                 </h3>
                 <div class="all_box">
                     <div class="count_box">
                         <div class="down">
                         <i class="fa-solid fa-minus"></i>
                         </div>
                         <div class="number">
                             ${item.inCart}
                         </div>
                         <div class="up">
                         <i class="fa-solid fa-plus"></i>
                         </div>
                     </div>
                     <div class="price">
                         <p>
                            ${item.price} AZN
                         </p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     
         `
         document.querySelector(".total_cart").innerHTML = `
         <p>
          Toplam qiyməti :
         </p>
         <span>${cartCost} AZN </span>
         
         `
       })
     }
 }
 
 onLoadCartNumbers();
 displayCart();