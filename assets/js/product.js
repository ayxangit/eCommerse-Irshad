// // add to cart
let carts = document.querySelectorAll(".add-cart");


let products = [
  {
    id:1,
    name: "Lenovo IP3 15IIL05 (81WE017GRK)",
    tag:"Notbuk",
    img:"computer",
    price:2099.99,
    inCart:0
  },
  {
    id:2,
    name: "Apple iPad 10.2 Wi-Fi 32 GB (2020) (8th generation) Space Gray",
    tag:"Planşet",
    img:"tablet",
    price:799.99,
    inCart:0
  },
  {
    id:3,
    name: "Xiaomi Mi TV Stick EU HDMI (MDZ-24-AA)",
    tag:"TV box",
    img:"pult",
    price:109.99,
    inCart:0
  },
  {
    id:4,
    name:"Honor Earbuds 2 Lite T0005 Glacier White",
    tag:"Qulaqcıqlar",
    img:"WhiteHonor",
    price:169.99,
    inCart:0
  },
  {
    id:5,
    name: "Panasonic KX-TG1611UAH Dark Gr",
    tag:"Ev telefonu",
    img:"panasonic",
    price:69.99,
    inCart:0
  },
  {
    id:6,
    name: "Samsung RT35K5440S8/WT",
    tag:"Soyuducu",
    img:"xaladenniy",
    price:16099.99,
    inCart:0
  },
  {
    id:7,
    name: "Fakir Lucina Red",
    tag:"Blender",
    img:"blender",
    price:159.99,
    inCart:0
  },
  {
    id:8,
    name: "Fakir Torque 1800 Meat  Frinde ",
    tag:"Ət çəkən",
    img:"etceken",
    price:349.99,
    inCart:0
  },
  {
    id:9,
    name: "Taube TB4802GG Silver",
    tag:"Soba",
    img:"soba",
    price:260.99,
    inCart:0
  },
  {
    id:10,
    name: "IPhone 12/12 Pro case Guess",
    tag:"Telefon qabları",
    img:"53b5dc26820d85a2713b892de6069655",
    price:49.99,
    inCart:0
  },
  {
    id:11,
    name: "Airpods case",
    tag:"Qulaqlıq qabları",
    img:"c86477583262fb8362c1f80c6c2bcad5",
    price:19.99,
    inCart:0
  },
  {
    id:12,
    name: "Janod Ayı (J04652)",
    tag:"Daxıl",
    img:"9db7ef71cf6a620813a3526a9a58fbad",
    price:38.99,
    inCart:0
  },
  {
    id:13,
    name:" Zimmer 32' LED TV(ZM-TVH3235)",
    tag:"Televizorlar",
    img:"4752dc43430503c3ef74502e079d160b",
    price:439.99,
    inCart:0
  },
  {
    id:14,
    name: "Alcatel 6056H Black",
    tag:"Telefonlar",
    img:"68e8f45fea9574513492a4ff72533de8",
    price:399.99,
    inCart:0
  },
  {
    id:15,
    name: "ASUS VivoBook 15 K513EA-L12078",
    tag:"Notbuk",
    img:"90nb0sg1-m00es0",
    price:1279.99,
    inCart:0
  },
  {
    id:16,
    name: " ORIENT RA-AP0005B10",
    tag:"Saatlar",
    img:"orient-ra-ap0005b10",
    price:499.99,
    inCart:0
  },
  {
    id:17,
    name: "Edifier R501",
    tag:"Peakerlər",
    img:"9e10f4799a9166273655218cfdee1fa4",
    price:339.99,
    inCart:0
  },
  {
    id:18,
    name: "HONOR MagicBook X 14 (NBR-WAI9)",
    tag:"Notbuk",
    img:"577ef5d188a62db507b9b1648edd79b3",
    price:1599.99,
    inCart:0
  },
  {
    id:19,
    name: "JVC 32' LED TV (LT-32N3100)",
    tag:"Televizor",
    img:"butterfly tv",
    price:439.99,
    inCart:0
  },
  {
    id:20,
    name: "Canali Lora 9 pcs Black Dekor",
    tag:"Qazan",
    img:"dekor",
    price:279.99,
    inCart:0
  },
  {
    id:21,
    name: "BOSCH SMS43D08ME",
    tag:"Qabyuyan",
    img:"qabyuyan",
    price:1049.99,
    inCart:0
  },
  {
    id:22,
    name:"JVC 55' LED TV (LT-55N7115) Smart",
    tag:"Televizor",
    img:"55tv",
    price:1399.99,
    inCart:0
  },
  {
    id:23,
    name: "Kyvol Cybovac D3 Robot Vacuum Mop",
    tag:"Tozsoran",
    img:"supurge",
    price:399.99,
    inCart:0
  },
  {
    id:24,
    name: "HP 255 G8 (27K51EA)",
    tag:"Notbuk",
    img:"hp",
    price:1069.99,
    inCart:0
  },
  {
    id:25,
    name: "Canon Pixma G640",
    tag:"Printerllər və MFA",
    img:"skayner",
    price:899.99,
    inCart:0
  },
  {
    id:26,
    name: "LG I12CGH INVERTER",
    tag:"Kondisionerlər",
    img:"lgCon",
    price:1579.99,
    inCart:0
  },
  {
    id:27,
    name: "Asus VG24VQE Gaming (90LM0575-B01170)",
    tag:"Monitorlar",
    img:"tuf gaming",
    price:669.99,
    inCart:0
  },
  {
    id:28,
    name: "Ayaq üçün ağırlıq Sunlin 2x1.5 kq",
    tag:"Idman ləvazimatları",
    img:"ayaq-ucun-agirliq2",
    price:29.99,
    inCart:0
  },
  {
    id:29,
    name: " CASIO AE-1000W-2AVDF",
    tag:"Saatlar",
    img:"61debf0f8d34f796cb63415eb03a9904",
    price:79.99,
    inCart:0
  },
  {
    id:30,
    name: "Samsung WW70A6S23AN/LP",
    tag:"Paltaryuyan",
    img:"ru-ww6100a-ww70a6s23an-lp-520056945",
    price:1519.99,
    inCart:0
  },
  {
    id:31,
    name:"  Dell Vostro 3515-273665027 ",
    tag:"Notbuk",
    img:"dell-vostro-3515-273665027-1",
    price:1599.99,
    inCart:0
  },
  {
    id:32,
    name: "CASIO A168WEMB-1BDF",
    tag:"Saatlar",
    img:"casio-a168wemb-1bdf",
    price:189.99,
    inCart:0
  },
  {
    id:33,
    name: "Total THT 141121",
    tag:"Alətlər dəsti",
    img:"tht141121",
    price:189.99,
    inCart:0
  },
  {
    id:34,
    name: " Xbox Series S",
    tag:" Oyun konsolları",
    img:"xbox-series-s",
    price:1299.99,
    inCart:0
  },
  {
    id:35,
    name: " Xiaomi Deerma  DEM-DR050",
    tag:"Termos",
    img:"xiaomi-deerma-dem-dr050-1",
    price:79.99,
    inCart:0
  },
  {
    id:36,
    name: "CN.M-605 Blue",
    tag:" Uşaq üçün elektromobil",
    img:"cnm-605-goy",
    price:499.99,
    inCart:0
  },
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
        <div class="product_cart" onclick="removeItem()">
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
                        <i class="fa-solid fa-plus" ></i>
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

let product = [
  {
    name: "Lenovo IP3 15IIL05 (81WE017GRK)",
    tag:"Notbuk",
    img:"computer",
    price:2099.99,
    inCart:0
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
  {
    name: "IPhone 12/12 Pro case Guess",
    tag:"Telefon qabları",
    img:"53b5dc26820d85a2713b892de6069655",
    price:49.99,
    inCart:0
  },
  {
    name: "Airpods case",
    tag:"Qulaqlıq qabları",
    img:"c86477583262fb8362c1f80c6c2bcad5",
    price:19.99,
    inCart:0
  },
  {
    name: "Janod Ayı (J04652)",
    tag:"Daxıl",
    img:"9db7ef71cf6a620813a3526a9a58fbad",
    price:38.99,
    inCart:0
  },
  {
    name:" Zimmer 32' LED TV(ZM-TVH3235)",
    tag:"Televizorlar",
    img:"4752dc43430503c3ef74502e079d160b",
    price:439.99,
    inCart:0
  },
  {
    name: "Alcatel 6056H Black",
    tag:"Telefonlar",
    img:"68e8f45fea9574513492a4ff72533de8",
    price:399.99,
    inCart:0
  },
  {
    name: "ASUS VivoBook 15 K513EA-L12078",
    tag:"Notbuk",
    img:"90nb0sg1-m00es0",
    price:1279.99,
    inCart:0
  },
  {
    name: " ORIENT RA-AP0005B10",
    tag:"Saatlar",
    img:"orient-ra-ap0005b10",
    price:499.99,
    inCart:0
  },
  {
    name: "Edifier R501",
    tag:"Peakerlər",
    img:"9e10f4799a9166273655218cfdee1fa4",
    price:339.99,
    inCart:0
  },
  {
    name: "HONOR MagicBook X 14 (NBR-WAI9)",
    tag:"Notbuk",
    img:"577ef5d188a62db507b9b1648edd79b3",
    price:1599.99,
    inCart:0
  },
  {
    name: "JVC 32' LED TV (LT-32N3100)",
    tag:"Televizor",
    img:"butterfly tv",
    price:439.99,
    inCart:0
  },
  {
    name: "Canali Lora 9 pcs Black Dekor",
    tag:"Qazan",
    img:"dekor",
    price:279.99,
    inCart:0
  },
  {
    name: "BOSCH SMS43D08ME",
    tag:"Qabyuyan",
    img:"qabyuyan",
    price:1049.99,
    inCart:0
  },
  {
    name:"JVC 55' LED TV (LT-55N7115) Smart",
    tag:"Televizor",
    img:"55tv",
    price:1399.99,
    inCart:0
  },
  {
    name: "Kyvol Cybovac D3 Robot Vacuum Mop",
    tag:"Tozsoran",
    img:"supurge",
    price:399.99,
    inCart:0
  },
  {
    name: "HP 255 G8 (27K51EA)",
    tag:"Notbuk",
    img:"hp",
    price:1069.99,
    inCart:0
  },
  {
    name: "Canon Pixma G640",
    tag:"Printerllər və MFA",
    img:"skayner",
    price:899.99,
    inCart:0
  },
  {
    name: "LG I12CGH INVERTER",
    tag:"Kondisionerlər",
    img:"lgCon",
    price:1579.99,
    inCart:0
  },
  {
    name: "Asus VG24VQE Gaming (90LM0575-B01170)",
    tag:"Monitorlar",
    img:"tuf gaming",
    price:669.99,
    inCart:0
  },
  {
    name: "Ayaq üçün ağırlıq Sunlin 2x1.5 kq",
    tag:"Idman ləvazimatları",
    img:"ayaq-ucun-agirliq2",
    price:29.99,
    inCart:0
  },
  {
    name: " CASIO AE-1000W-2AVDF",
    tag:"Saatlar",
    img:"61debf0f8d34f796cb63415eb03a9904",
    price:79.99,
    inCart:0
  },
  {
    name: "Samsung WW70A6S23AN/LP",
    tag:"Paltaryuyan",
    img:"ru-ww6100a-ww70a6s23an-lp-520056945",
    price:1519.99,
    inCart:0
  },
  {
    name:"  Dell Vostro 3515-273665027 ",
    tag:"Notbuk",
    img:"dell-vostro-3515-273665027-1",
    price:1599.99,
    inCart:0
  },
  {
    name: "CASIO A168WEMB-1BDF",
    tag:"Saatlar",
    img:"casio-a168wemb-1bdf",
    price:189.99,
    inCart:0
  },
  {
    name: "Total THT 141121",
    tag:"Alətlər dəsti",
    img:"tht141121",
    price:189.99,
    inCart:0
  },
  {
    name: " Xbox Series S",
    tag:" Oyun konsolları",
    img:"xbox-series-s",
    price:1299.99,
    inCart:0
  },
  {
    name: " Xiaomi Deerma  DEM-DR050",
    tag:"Termos",
    img:"xiaomi-deerma-dem-dr050-1",
    price:79.99,
    inCart:0
  },
  {
    name: "CN.M-605 Blue",
    tag:" Uşaq üçün elektromobil",
    img:"cnm-605-goy",
    price:499.99,
    inCart:0
  },
]
for(let j=0; j<likes.length;j++){
  likes[j].addEventListener("click",(e)=>{
    cartNumber(product[j]);
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

