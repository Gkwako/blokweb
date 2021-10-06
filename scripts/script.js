// JavaScript Document
console.log("Louvre");

var menuButton = document.querySelector(".icon");
var hamburgerMenu = document.querySelector(".menu");

var menuClose = document.querySelector(".back-menu")


// Click menuButton aan (Bron: Alex)
menuButton.addEventListener("click", hamburgerMenuopen);


function hamburgerMenuopen(){
    hamburgerMenu.classList.toggle("visible");
    console.log("menu open");
}


menuClose.addEventListener("click", Closed);
function Closed(){
    hamburgerMenu.classList.toggle("invisible")

    console.log("menu dicht");
}