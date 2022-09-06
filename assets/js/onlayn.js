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
      name: "ASUS ProArt StudioBook H5600Q (90NB0UZ1-M001D0)",
      tag:"Notbuk",
      img:"proart",
      price:5073.99,
      inCart:0
    },
    {
      name: "ASUS K513EA-L12236 (90NB0SG1-M00A50)",
      tag:"Notbuk",
      img:"90nb0we1-m00550",
      price:2191.99,
      inCart:0
    },
    {
      name: "ASUS TUF Gaming F15 FX506LHB-HN323",
      tag:"Notbuk",
      img:"90nr03u2-m007n0",
      price:2089.99,
      inCart:0
    },
    {
      name: "ASUS VivoBook S15 OLED M3205QA-MA117",
      tag:"Notbuk",
      img:"asusvivo",
      price:2036.99,
      inCart:0
    },
    {
      name: "ASUS VivoBook Pro 14  M3401QA-KM113",
      tag:"Notbuk",
      img:"asuusgreen",
      price:1850.99,
      inCart:0
    },
    {
      name: "ASUS VivoBook 15 K513EA-L12078",
      tag:"Notbuk",
      img:"dublasus",
      price:1742.99,
      inCart:0
    },
    {
      name: "ASUS VivoBook 15 X513EA-BQ686",
      tag:"Notbuk",
      img:"colorasus",
      price:1519.99,
      inCart:0
    },
    {
      name: "ASUS VivoBook 15 K513EA-L12875 ",
      tag:"Notbuk",
      img:"assuus",
      price:1419.99,
      inCart:0
    },
    {
      name: "Asus X515EA-BQ950 (90NB0TY2-M00M60)",
      tag:"Notbuk",
      img:"asusbalon",
      price:1177.99,
      inCart:0
    },
    {
      name: "ASUS ProArt StudioBook H5600Q (90NB0UZ1-M001D0)",
      tag:"Notbuk",
      img:"proart",
      price:5073.99,
      inCart:0
    },
    {
      name: "ASUS K513EA-L12236 (90NB0SG1-M00A50)",
      tag:"Notbuk",
      img:"90nb0we1-m00550",
      price:2191.99,
      inCart:0
    },
    {
      name: "ASUS TUF Gaming F15 FX506LHB-HN323",
      tag:"Notbuk",
      img:"90nr03u2-m007n0",
      price:2089.99,
      inCart:0
    },
    {
      name: "ASUS VivoBook S15 OLED M3205QA-MA117",
      tag:"Notbuk",
      img:"asusvivo",
      price:2036.99,
      inCart:0
    },
    {
      name: "ASUS VivoBook Pro 14  M3401QA-KM113",
      tag:"Notbuk",
      img:"asuusgreen",
      price:1850.99,
      inCart:0
    },
    {
      name: "ASUS VivoBook 15 K513EA-L12078",
      tag:"Notbuk",
      img:"dublasus",
      price:1742.99,
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



 let likes = document.querySelectorAll(".like")

 let products = [
  {
    name: "ASUS ProArt StudioBook H5600Q (90NB0UZ1-M001D0)",
    tag:"Notbuk",
    img:"proart",
    price:5073.99,
    inCart:0
  },
  {
    name: "ASUS K513EA-L12236 (90NB0SG1-M00A50)",
    tag:"Notbuk",
    img:"90nb0we1-m00550",
    price:2191.99,
    inCart:0
  },
  {
    name: "ASUS TUF Gaming F15 FX506LHB-HN323",
    tag:"Notbuk",
    img:"90nr03u2-m007n0",
    price:2089.99,
    inCart:0
  },
  {
    name: "ASUS VivoBook S15 OLED M3205QA-MA117",
    tag:"Notbuk",
    img:"asusvivo",
    price:2036.99,
    inCart:0
  },
  {
    name: "ASUS VivoBook Pro 14  M3401QA-KM113",
    tag:"Notbuk",
    img:"asuusgreen",
    price:1850.99,
    inCart:0
  },
  {
    name: "ASUS VivoBook 15 K513EA-L12078",
    tag:"Notbuk",
    img:"dublasus",
    price:1742.99,
    inCart:0
  },
  {
    name: "ASUS VivoBook 15 X513EA-BQ686",
    tag:"Notbuk",
    img:"colorasus",
    price:1519.99,
    inCart:0
  },
  {
    name: "ASUS VivoBook 15 K513EA-L12875 ",
    tag:"Notbuk",
    img:"assuus",
    price:1419.99,
    inCart:0
  },
  {
    name: "Asus X515EA-BQ950 (90NB0TY2-M00M60)",
    tag:"Notbuk",
    img:"asusbalon",
    price:1177.99,
    inCart:0
  },
  {
    name: "ASUS ProArt StudioBook H5600Q (90NB0UZ1-M001D0)",
    tag:"Notbuk",
    img:"proart",
    price:5073.99,
    inCart:0
  },
  {
    name: "ASUS K513EA-L12236 (90NB0SG1-M00A50)",
    tag:"Notbuk",
    img:"90nb0we1-m00550",
    price:2191.99,
    inCart:0
  },
  {
    name: "ASUS TUF Gaming F15 FX506LHB-HN323",
    tag:"Notbuk",
    img:"90nr03u2-m007n0",
    price:2089.99,
    inCart:0
  },
  {
    name: "ASUS VivoBook S15 OLED M3205QA-MA117",
    tag:"Notbuk",
    img:"asusvivo",
    price:2036.99,
    inCart:0
  },
  {
    name: "ASUS VivoBook Pro 14  M3401QA-KM113",
    tag:"Notbuk",
    img:"asuusgreen",
    price:1850.99,
    inCart:0
  },
  {
    name: "ASUS VivoBook 15 K513EA-L12078",
    tag:"Notbuk",
    img:"dublasus",
    price:1742.99,
    inCart:0
  },


]

 for(let j=0; j<likes.length;j++){
  likes[j].addEventListener("click",(e)=>{
    cartNumber(products[j]);
    e.preventDefault();
  })
}

function onLoadCartNumber(){
let productNumber= localStorage.getItem("cartNumber");
if(productNumber){
  document.querySelector(".hearts small").textContent=productNumber;
}
}

function cartNumber(products){
let productNumber= localStorage.getItem("cartNumber");
productNumber= parseInt(productNumber);

if(productNumber){
  localStorage.setItem("cartNumber",productNumber+1);
  document.querySelector(".hearts small").textContent= productNumber+1
}else{
  localStorage.setItem("cartNumber",1);
  document.querySelector(".hearts small").textContent=1
}
setItemss(products);
}

function setItemss(products){
let cartItem = localStorage.getItem("productsInCarts");
 cartItem = JSON.parse(cartItem);

if(cartItem != null){
  if(cartItem[products.img]==undefined){
     cartItem ={
      ...cartItem,
      [products.img] : products
     }
  }
  cartItem[products.img].inCart += 1
}else{
    products.inCart = 1
        cartItem = {
           [products.img] : products
       }
}
   localStorage.setItem("productsInCarts",JSON.stringify(cartItem))
}

function LikeCart(){
  let cartItem = localStorage.getItem("productsInCarts");

  cartItem = JSON.parse(cartItem);
  console.log(cartItem);
  let productCart = document.querySelector(".cartss");

  if(cartItem && productCart){
    productCart.innerHTML = "";
    Object.values(cartItem).map(item=>{
      productCart.innerHTML += `
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
    })
  }
}

onLoadCartNumber();
LikeCart();

let rangeInput = document.querySelectorAll(".range input");
let priceInput = document.querySelectorAll(".price input");
let progress = document.querySelector(".progres");
let priceGab = 1000;
priceInput.forEach(input=>{
  input.addEventListener("input",(e)=>{
    let minVal = parseInt(priceInput[0].value);
    let maxVal = parseInt(priceInput[1].value);


    if((maxVal-minVal >= priceGab) && maxVal<=10000){
      if(e.target.className==="input-min"){
        rangeInput[0].value = minVal;
        progress.style.left = (minVal/rangeInput[0].max) *100 + "%";
      }else{
        rangeInput[1].value = maxVal;
        progress.style.right = 100- (maxVal/rangeInput[1].max) *100 + "%";
      }
    }
  })
})
rangeInput.forEach(input=>{
  input.addEventListener("input",(e)=>{
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);


    if(maxVal-minVal < priceGab){
      if(e.target.className==="min-value"){
        rangeInput[0].value = maxVal-priceGab
      }else{
        rangeInput[1].value = minVal+priceGab
      }
    }else{
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal/rangeInput[0].max) *100 + "%";
      progress.style.right = 100- (maxVal/rangeInput[1].max) *100 + "%";
    }
  })
})