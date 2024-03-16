
let active = document.querySelectorAll("h1 a")
active.forEach(function(act){
    act.addEventListener("click",function(){
        active.forEach(function(a){
            a.classList.remove("activenav")
        })
        this.classList.add("activenav")
    })
    
})
 let arr = [
    { name:"IndiaExclusive",Image:"https://preprodtsbstorage.blob.core.windows.net/cms/uploads/TSB_GC_indiacard_1_1_28dafb2bb6.png",para:"Bring in the festive season and make each celebration memorable."  },
     {name:"Starbucks Coffee", Image:"https://preprodtsbstorage.blob.core.windows.net/cms/uploads/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_1_2d1afadaa0.png",para:"Starbucks is best when shared. Treat your pals to a good cup of coffee."},
     {name:"U Keep Me Warm",Image:"https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_1_1bdd3bf075.webp",para:"Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card."}
 ]
let clutter=""
let any = document.querySelector(".ing")
arr.forEach(function(elem){
clutter +=  ` <div class="india">
                    
<div class="india-img"><img src=${elem.Image}></div>
<div class="india-con">
 <h5>${elem.name}</h5>
 <p style="font-size: 2.3vh;margin-top: 2vh; line-height: 2vh;">${elem.para}</p>
 <button class="add" >Add Item</button>
</div>


</div>`})
any.innerHTML=clutter



let nav= document.querySelectorAll(".nav ul li a");
nav.forEach(function(navItem){
  navItem.addEventListener("click",function(){
    nav.forEach(function(links){
      links.classList.remove("active");
    })
  
  this.classList.add("active");
})})

let login = document.querySelector(".user");
    login.addEventListener("click", function() {
        window.location.href = "login.html";
    });



    let array = [
         { Name:"IndiaExclusive",image:"https://preprodtsbstorage.blob.core.windows.net/cms/uploads/TSB_GC_indiacard_1_1_28dafb2bb6.png",Para:"Bring in the festive season and make each celebration memorable."  },
         {Name:"Starbucks Coffee", image:"https://preprodtsbstorage.blob.core.windows.net/cms/uploads/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_1_2d1afadaa0.png",Para:"Starbucks is best when shared. Treat your pals to a good cup of coffee."},
         {Name:"U Keep Me Warm",image:"https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_1_1bdd3bf075.webp",Para:"Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card."}
     ]
    let time = document.querySelector(".ingi")
club=""
array.forEach(function(e){
  club+= ` <div class="indiaa">
                    
  <div class="indiaimg"><img src=${e.image}></div>
  <div class="indiacon">
   <h5>${e.Name}</h5>
   <p style="font-size: 2.3vh;margin-top: 2vh; line-height: 2vh;">${e.Para}</p>
   <button class="add" >Add Item</button>
  </div>
  
  
  </div>`

})
time.innerHTML=club