
/*const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});*/



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grabCursor:true,
  });
 let nav= document.querySelectorAll(".nav ul li a");
nav.forEach(function(navItem){
  navItem.addEventListener("click",function(){
    nav.forEach(function(links){
      links.classList.remove("active");
    })
  
  this.classList.add("active");
  
  
  
  
  
  
  
  
   } )
  }
)
let login = document.querySelector(".user");
    login.addEventListener("click", function() {
        window.location.href = "login.html";
    });

 

 

let arr = [
  {name:"Bestseller",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Bestseller.jpg"},
  {name:"Drinks",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Drinks.jpg"},
  {name:"food",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Food.jpg"},
  {name:"Merchandise",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/Merchandise.jpg"},
  {name:"Coffee at home",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg"},
  { name:"Ready to eat",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg"},
  {name:"strawberry milkshake",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/webP/112570.webp"},
  {name:"vanilla milkshake",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Small/webP/112573.webp"},
  {name:"Vienna Creamy Latte",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/M114873.webp"},
  {name:"Vienna Creamy Iced Latte",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/M114853.webp"},
  {name:"Vienna Creamy Cream Frappuccino",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/M114859.webp"},
  {name:"Chocolate Crunch",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/114936.webp"}
];

document.addEventListener("DOMContentLoaded", function() {
  let input = document.querySelector(".inputsearch");
 
  let hagdeContainer = document.querySelector(".hagde-container"); // Create a container element

  input.addEventListener("input", function() {
      let filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(this.value));
      if (filteredArray.length > 0) {
          console.log(filteredArray);
          let clutter = "";
          filteredArray.forEach(function(obj) {
              clutter += `<div class="hagde-container"  >
                          <ion-icon name="search-circle-outline" ></ion-icon>
                          <p style="margin-left:2vw; color:#202020; font-size:2vh;">${obj.name}</p>
                          </div>`;
          });
          // Append the clutter HTML to the container
         
          hagdeContainer.style.display = "block"; // Show the container
          hagdeContainer.innerHTML = clutter;
      } else {
          console.log("No matching items found.");
          hagdeContainer.innerHTML = ""; // Clear the container if no matching items found
      }
  });

  console.log(arr);
  let niche = document.querySelector(".niche")
input.addEventListener("blur",function(){
niche.style.opacity=0
})

input.addEventListener("focus",function(){
niche.style.opacity=1
})
});
let header=document.querySelector(".header")

let scroll=document.querySelector(".scroll")


scroll.addEventListener("click",function(){
  header.scrollIntoView({behavior:"smooth"})
})
if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
{
  scroll.style.display="block"
}
else{
  scroll.style.display="hidden"}




let array = [ 
{name:"Vienna Creamy Iced Latte",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/M114853.webp"},
{name:"Vienna Creamy Cream Frappuccino",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/M114859.webp"},
{name:"Vienna Creamy Latte",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/M114873.webp"},
{name:"Chocolate Crunch",imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/114936.webp"},
{name:"Valentine's Blossom", imgage:"https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/115196.webp"}]

var club = ""


let khanna = document.querySelectorAll(".khanna")
array.forEach(function(elem){
  club+=` 
  
  <swiper-slide>
  <div class="khanna" style="box-shadow: 0px 2px 2px 2px  rgb(157, 148, 148);border-radius: 8px;  width:25vw">
  <div class="photo">
      <img src=${elem.imgage}>
      </div>
      <div class="kahani" style="padding: 0 1rem; padding-bottom: 2rem;">
          <img src="https://www.starbucks.in/assets/icon/veg.svg"  style="width:1rem; padding-top:0.8rem;">
          <h5>${elem.name}</h5>
          <p style="font-size: 1.8vh;">SHORT(Short Vienna Creamy Latte).330Kcal</p>
          <p style="font-size: 2vh; padding-top:2vh;">Introducing the all-new Starbucks Vienna Creamy Crème Frappuccino, an exquisite new take on the classic Vienne ...</p>
            <div style="display: flex; margin-top: 2rem;justify-content: space-between;align-items: center;">  <p style="font-size: 2.4vh;font-weight: 600;">   ₹ 483.00
              </p>
              <button class="add" style="width:8vw;
              height:6vh;
              border-radius:20px;
              color:white;
              background-color: #00754a;
              border:transparent;
              
              top:16vh;
              left:17vw;
              font-weight: 900;">Add Item</button>
      </div></div></div>
     
      </swiper-slide>
     
      `
})

let offeringElement = document.querySelector(".check");
    if (offeringElement) {
        offeringElement.innerHTML = club;
    } else {
        console.error("Element with class 'offering' not found.");
    }
   
    document.addEventListener("DOMContentLoaded", function() {
      const pointer = document.querySelector(".pointer");
  
      document.addEventListener("mousemove", function(event) {
          pointer.style.left = event.clientX + "px";
          pointer.style.top = event.clientY + "px";
      });
  });

  //let back = document.querySelector(".back").addEventListener("mouseEnter",back.style.backgroundImage = linear-gradient(rgb(78, 74, 74)))
