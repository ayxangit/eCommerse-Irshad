// paying function
document.querySelector(".mothly").addEventListener("click",()=>{
    document.querySelector(".content").style.visibility="visible";
    
 })
 
 document.querySelector(".pay_icon").addEventListener("click",()=>{
   document.querySelector(".content").style.visibility="hidden";
 })
 // end


  // start countdown reason section
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const dayss = document.querySelector(".dayss");
const hourss = document.querySelector(".hourss");
const minutess = document.querySelector(".minutess");
const secondss = document.querySelector(".secondss");

const dayes = document.querySelector(".dayes");
const hourses = document.querySelector(".hourses");
const minutesss = document.querySelector(".minutesss");
const secondes = document.querySelector(".secondes");

const dayess = document.querySelector(".dayess");
const hoursess = document.querySelector(".hoursess");
const minutessss = document.querySelector(".minutessss");
const secondess = document.querySelector(".secondess");

const dayeses = document.querySelector(".dayeses");
const hourseses = document.querySelector(".hourseses");
const minuteses = document.querySelector(".minuteses");
const secondeses = document.querySelector(".secondeses");

const currentYear = new Date().getFullYear();

const saleYear = new Date(`September 31 ${currentYear+3} 00:00:00`);

function saleTime() {
    const currentTime = new Date();
    const diff = saleYear-currentTime;

    const d = Math.floor(diff/1000/60/60/24)%30;
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;

    days.innerHTML=d + " " + "Gün";
    hours.innerHTML= h<10 ? '0' +  h  + ':' : h;
    minutes.innerHTML= m<10 ? '0' +  m + ":"  : m ;
    seconds.innerHTML= s<10 ?  '0' +  s  : s;

    day.innerHTML=d + " " + "Gün";
    hour.innerHTML= h<10 ? '0' +  h + ":" : h;
    minute.innerHTML= m<10 ? '0' + m + ":" : m ;
    second.innerHTML= s<10 ?  '0' +  s  : s;

    dayss.innerHTML=d + " " + "Gün";
    hourss.innerHTML= h<10 ? '0' +  h + ":" : h;
    minutess.innerHTML= m<10 ? '0' + m + ":" : m ;
    secondss.innerHTML= s<10 ?  '0' +  s  : s;

    dayes.innerHTML=d + " " + "Gün";
    hourses.innerHTML= h<10 ? '0' +  h + ":" : h;
    minutesss.innerHTML= m<10 ? '0' + m + ":" : m ;
    secondes.innerHTML= s<10 ?  '0' +  s  : s;

    dayess.innerHTML=d + " " + "Gün";
    hoursess.innerHTML= h<10 ? '0' +  h + ":" : h;
    minutessss.innerHTML= m<10 ? '0' + m + ":" : m ;
    secondess.innerHTML= s<10 ?  '0' +  s  : s;

    dayeses.innerHTML=d + " " + "Gün";
    hourseses.innerHTML= h<10 ? '0' +  h + ":" : h;
    minuteses.innerHTML= m<10 ? '0' + m + ":" : m ;
    secondeses.innerHTML= s<10 ?  '0' +  s  : s;
    
}

setInterval(saleTime,1000)

// end