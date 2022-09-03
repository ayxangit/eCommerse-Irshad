// // add to cart
let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    name: "Lenovo IP3 15IIL05 (81WE017GRK)",
    tag:"Notbuk",
    img:"computer",
    price:2099.99,
    inCart:1
  },
  {
    name: "Apple iPad 10.2 Wi-Fi 32 GB (2020) (8th generation) Space Gray",
    tag:"Planşet",
    img:"tablet",
    price:799.99,
    inCart:0
  },
  {
    name: "Xiaomi Mi TV Stick EU HDMI (MDZ-24-AA)",
    tag:"TV box",
    img:"pult",
    price:109.99,
    inCart:0
  },
  {
    name:"Honor Earbuds 2 Lite T0005 Glacier White",
    tag:"Qulaqcıqlar",
    img:"WhiteHonor",
    price:169.99,
    inCart:0
  },
  {
    name: "Panasonic KX-TG1611UAH Dark Gr",
    tag:"Ev telefonu",
    img:"panasonic",
    price:69.99,
    inCart:0
  },
  {
    name: "Samsung RT35K5440S8/WT",
    tag:"Soyuducu",
    img:"xaladenniy",
    price:16099.99,
    inCart:0
  },
  {
    name: "Fakir Lucina Red",
    tag:"Blender",
    img:"blender",
    price:159.99,
    inCart:0
  },
  {
    name: "Fakir Torque 1800 Meat  Frinde ",
    tag:"Ət çəkən",
    img:"etceken",
    price:349.99,
    inCart:0
  },
  {
    name: "Taube TB4802GG Silver",
    tag:"Soba",
    img:"soba",
    price:260.99,
    inCart:0
  },
  // {
  //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
  //   tag:"Notbuk",
  //   price:"2099.99"
  // },
  // {
  //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
  //   tag:"Notbuk",
  //   price:"2099.99"
  // },
  // {
  //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
  //   tag:"Notbuk",
  //   price:"2099.99"
  // },
  // {
  //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
  //   tag:"Notbuk",
  //   price:"2099.99"
  // },
  // {
  //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
  //   tag:"Notbuk",
  //   price:"2099.99"
  // },
  // {
  //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
  //   tag:"Notbuk",
  //   price:"2099.99"
  // },
  // {
  //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
  //   tag:"Notbuk",
  //   price:"2099.99"
  // },
  // {
  //   name: "Lenovo IP3 15IIL05 (81WE017GRK)",
  //   tag:"Notbuk",
  //   price:"2099.99"
  // },
]

for(let i=0; i<carts.length;i++){
    carts[i].addEventListener("click",(e)=>{
      cartNumbers(products[i]);
      totalCost(products[i])
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
