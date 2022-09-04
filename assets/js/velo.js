// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
    document.querySelector(".content").style.visibility="visible";
    
 })
 
 document.querySelector(".pay_icon").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="hidden";
 })
 // end

 let carts = document.querySelectorAll(".add-cart");
 let product = [
    {
      name: "Forward Quadro 27,5 3.0 HD (Wheel 27,5/ Gear 16/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:999.99,
      inCart:0
    },
    {
      name: "Forward Quadro 27,5 3.0 HD (Wheel 27,5/ Gear 16/ Size 17)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:999.99,
      inCart:0
    },
    {
      name: "Forward Quadro 27,5 3.0 HD (Wheel 27,5/ Gear 16/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:999.99,
      inCart:0
    },
    {
      name: "Forward Parma 28 (Wheel 28/ Gear 7/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:499.99,
      inCart:0
    },
    {
      name: "Forward Parma 28 (Wheel 28/ Gear 7/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:499.99,
      inCart:0
    },
    {
      name: "Forward Next 29 X (Wheel 29/ Gear 8/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:1149.99,
      inCart:0
    },
    {
      name: "Forward Next 29 X (Wheel 29/ Gear 8/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:1149.99,
      inCart:0
    },
    {
      name: "Forward Flash 26 1.2 (Wheel 26/ Gear 21/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:549.99,
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
      name: "Forward Quadro 27,5 3.0 HD (Wheel 27,5/ Gear 16/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:999.99,
      inCart:0
    },
    {
      name: "Forward Quadro 27,5 3.0 HD (Wheel 27,5/ Gear 16/ Size 17)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:999.99,
      inCart:0
    },
    {
      name: "Forward Quadro 27,5 3.0 HD (Wheel 27,5/ Gear 16/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:999.99,
      inCart:0
    },
    {
      name: "Forward Parma 28 (Wheel 28/ Gear 7/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:499.99,
      inCart:0
    },
    {
      name: "Forward Parma 28 (Wheel 28/ Gear 7/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:499.99,
      inCart:0
    },
    {
      name: "Forward Next 29 X (Wheel 29/ Gear 8/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:1149.99,
      inCart:0
    },
    {
      name: "Forward Next 29 X (Wheel 29/ Gear 8/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:1149.99,
      inCart:0
    },
    {
      name: "Forward Flash 26 1.2 (Wheel 26/ Gear 21/ Size 19)",
      tag:"Velosiped",
      img:"forward-quadro-275-3-1",
      price:549.99,
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