"use strict"
 var h1 = document.querySelector("h1");
 var number = 1;

//  settimeout variantas:
// setTimeout (function(){
//   h1.innerText = number
 
// }, 2000)
// setTimeout (function(){
//   h1.innerText = number
//   number ++
// }, 2000)


// // set interval variantas :

// setInterval(function(){ // sukuriam funkcija kuri skaicuoja nuo 1 iki begalybes 
//   h1.style.fontSize ="2.8em"
//   h1.style.color = "blue"
//   // iki 1sekundes keicia fontsize iki 2.8em ir keicia spalva i blue ir prideta 1 skaiciu

//   setTimeout(function(){
//     // kas 0.1s keicia fontsize i 4em ir crimson
//     h1.style.fontSize ="4em"
//     h1.style.color = "crimson"
//     h1.innerText =number // nustatom jog funkcija keistu h1 i skaiciu ir pridetu +1 skaiciui
//   },100)

//   number ++

// },1000)


//  vietoj number pridejom string localtime kad rodytu gyvai laika
setInterval(function(){
  h1.style.fontSize ="2.8em"
  h1.style.color = "blue"
  

  setTimeout(function(){
   
    h1.style.fontSize ="4em"
    h1.style.color = "crimson"
    h1.innerText = new Date().toLocaleTimeString() 
  },100)

},1000)