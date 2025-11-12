const carousel  = document.getElementById("carousel");

const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

let currentSlide = 1;


function goToSlides(slideNumber){
    carousel.style.marginLeft = -(slideNumber*100)+"%";
    carousel.style.transition = "1s";
}

// Right btn logic:
rightBtn.addEventListener("click", function(){
    currentSlide++;
    goToSlides(currentSlide);
    console.log(currentSlide);

    if(currentSlide>4){
        // for making loop transition:
        setTimeout(function(){
            carousel.style.transition = "0s";
            carousel.style.marginLeft = "-100%";
            currentSlide = 1;
        }, 1000);
    }

}, false);


// Left btn logic:
leftBtn.addEventListener("click", function(){

    currentSlide--;
    goToSlides(currentSlide);
    console.log(currentSlide);

    if(currentSlide==0){
        // for making loop transition:
        setTimeout(function(){
            carousel.style.transition = "0s";
            carousel.style.marginLeft = "-400%";
            currentSlide = 4;
        }, 1000);
    }

}, false);


// for automatic slider movement: 

setInterval(function(){
    currentSlide++;
    goToSlides(currentSlide);
    
    if(currentSlide>4){
        setTimeout(function(){
            document.getElementById("carousel").style.transition="0s";
            document.getElementById("carousel").style.marginLeft = "-100%";
            currentSlide=1;
        },1000)
    }
},3000)