// JavaScript Document
console.log("Louvre");

var hamburgerMenu = document.querySelector(".menu");

var menuButton = document.querySelector(".icon");




// Click menuButton aan (Bron: Alex)

menuButton.addEventListener("click", toggleHamburgerMenu);


function toggleHamburgerMenu(){

    hamburgerMenu.classList.toggle("visible");

}