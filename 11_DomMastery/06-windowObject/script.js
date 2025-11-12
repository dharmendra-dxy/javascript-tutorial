// window:
console.log(window);

// window : all global functions and global varibales are part of windows.
// window.console.log() === console.log() -=> no need to write window

// alerts and prompt:

// alert("Hello");
// prompt("Enter your name");

console.log("location: ", location);


// window.location:
const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    
    window.location = "https://www.w3schools.com/js/js_window.asp";

    // to reload use: window.location.reload()

}, false);


// smooth scroling:

const header = document.getElementById("header");
const customScroll = document.getElementById("custom-btn")

const linkS1 = document.getElementById("section-1-link");
const linkS2 = document.getElementById("section-2-link");
const linkS3 = document.getElementById("section-3-link");
const linkS4 = document.getElementById("section-4-link");

const pageS1 = document.getElementById("section-1");
const pageS2 = document.getElementById("section-2");
const pageS3 = document.getElementById("section-3");
const pageS4 = document.getElementById("section-4");


function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}


// Events based on scrolling:

window.addEventListener("scroll", function(){

    if(window.scrollY >=200){
        header.style.backgroundColor = "white";
        header.style.color = "black";
    }
    else{
        header.style.backgroundColor = "black";
        header.style.color = "white"; 
    }

}, false);


customScroll.addEventListener("click", function(){
    window.scrollTo({top: 900, behavior:"smooth"});
}, false);
