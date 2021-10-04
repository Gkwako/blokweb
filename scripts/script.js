// JavaScript Document
console.log("Louvre");

var menuButton = document.querySelector(".icon");
var hamburgerMenu = document.querySelector(".menu");



// Click menuButton aan (Bron: Alex)

menuButton.addEventListener("click", hamburgerMenuopen);


function hamburgerMenuopen(){

    hamburgerMenu.classList.add("visible");
    console.log("menu open");
}

