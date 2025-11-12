const openPopup = document.getElementById("open-popup");
const closePopup = document.getElementById("close-popup")
const overlay = document.getElementById("overlay");

openPopup.addEventListener("click", function(){
    overlay.style.display = "flex";
}, false);

closePopup.addEventListener("click", function(){
    overlay.style.display = "none";
}, false);