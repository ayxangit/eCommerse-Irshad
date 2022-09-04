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
      name: "Şad kart 500 AZN hədiyyə kartı",
      tag:"Şadkart",
      img:"500-azn-sad-kart",
      price:500,
      inCart:0
    },
    {
        name: "Şad kart 200 AZN hədiyyə kartı",
        tag:"Şadkart",
        img:"200azn-sad-kart",
        price:200,
        inCart:0
      },
      {
        name: "Şad kart 100 AZN hədiyyə kartı",
        tag:"Şadkart",
        img:"100-azn-sad-kart",
        price:100,
        inCart:0
      },
      {
        name: "Şad kart 50 AZN hədiyyə kartı",
        tag:"Şadkart",
        img:"50aznsad",
        price:50,
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