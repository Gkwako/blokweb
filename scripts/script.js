// JavaScript Document
console.log("Louvre");

var hamburgerMenu = document.querySelector(".menu");
var menuButton = document.querySelector(".icon");

var buttonClose = document.querySelector(".icon-x");


var lastScrollTop = 0;
nav = document.querySelector("nav");



// Click on menu Button

menuButton.addEventListener("click", buttonOn);
function buttonOn(){
    hamburgerMenu.classList.add("visible");
    console.log("menu open");
}


// Click off menu Button (bron: Alex)

buttonClose.addEventListener("click", buttonOff);
function buttonOff(){
    hamburgerMenu.classList.remove("visible")
    console.log("menu close");
}


// Nav vanish (bron: https://www.youtube.com/watch?v=JEBgqbZWYIQ)
window.addEventListener("scroll", vanish);
function vanish(){
    var scrollTop = window.pageYOffset
    document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop){
        nav.style.top= "-8em";
    } else {
        nav.style.top= "0";
    } 
}



