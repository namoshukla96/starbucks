







/*const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});*/




document.addEventListener("DOMContentLoaded",function(){

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


/*let logins = document.getElementsByClassName("user");
for (let i = 0; i < logins.length; i++) {
    logins[i].addEventListener("click", function() {
        window.location.href = "login.html";
    });
}
  
  
 
   let user = document.getElementsByClassName("username");
   let validpassword="kanchan";
   let validusername="kanchan";
   let password = document.getElementsByClassName("password");
   password.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        if (user.value === validusername && password.value === validpassword) {
            alert("Congratulations!");
        } else {
            alert("Invalid username or password. Please retry.");
        }
    }
});
  
  
  
  
  
    let shut = document.getElementById("shut")
    function my (){
   
    var turn = 1
      
    shut.addEventListener("click",function(){
    if(turn == 1){
      shut.innerHTML= `<i class="ri-eye-fill"></i>`
      password.type="text"
      
      turn=0  
    }
    else{
      shut.innerHTML= `<i class="ri-eye-off-fill"></i>`
      password.type="password"
        turn=1
    }
    })}
    my();*/
    let login = document.querySelector(".user");
    login.addEventListener("click", function() {
        window.location.href = "login.html";
    });

    let user = document.querySelector(".username");
    let validusername = "kanchan";

    let password = document.querySelector(".password");
    let validpassword = "kanchan";

    password.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            if (user.value === validusername && password.value === validpassword) {
                alert("Congratulations!");
            } else {
                alert("Invalid username or password. Please retry.");
            }
        }
    });

    let shut = document.getElementById("shut");
    shut.addEventListener("click", function() {
        if (password.type === "password") {
            shut.innerHTML = `<i class="ri-eye-fill"></i>`;
            password.type = "text";
        } else {
            shut.innerHTML = `<i class="ri-eye-off-fill"></i>`;
            password.type = "password";
        }
    });

    let singuppage=document.querySelector(".signuppage")

     // Event listener for skip button
  let skip = document.querySelector(".skip");
  skip.addEventListener("click", function() {
      singuppage.style.opacity = 0;
  });

  // Event listener for sign button
  let sign = document.querySelector(".sign");
  sign.addEventListener("click", function() {
    singuppage.style.opacity = 1;
  });


/*
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
    
  
  ]
  
  document.addEventListener("DOMContentLoaded", function() {
    let input = document.querySelector(".inputsearch");
    input.addEventListener("input", function() {
        let filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(this.value));
        if (filteredArray.length > 0) {
            console.log(filteredArray);
            let clutter = "";
            filteredArray.forEach(function(obj) {
                clutter += `<div class="hagde" style="margin-top:1vh; background-color: transparent;
                            width:16vw;
                            left:1.6vw;
                            height: auto;
                            display: flex;
                            font-size: 2vh;
                            border-radius: 4px;">
                            <ion-icon name="search-circle-outline" style="font-size: 3.5vh;"></ion-icon>
                            <h3 style="margin-left:2vw; color:#202020;">${obj.name}</h3>
                            </div>`;
            });
            document.querySelector(".hagde").innerHTML = clutter;
            document.querySelector(".hagde").style.display = "block";
        } else {
            console.log("No matching items found.");
        }
    });

    console.log(arr);
})})*/
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
  });})


