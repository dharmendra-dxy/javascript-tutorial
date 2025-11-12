const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let timer;

// SetTimeout:
startBtn.addEventListener("click", function(){

    console.log("start clicked");
    timer = setTimeout(function(){
        console.log("hello !!");
    }, 2000);

}, false);


stopBtn.addEventListener("click", function(){

    console.log("stop clicked");
    clearTimeout(timer);
}, false);



// SetInterval:

let count = 0;
const setTime = setInterval(function(){

    if(count>=5){
        clearInterval(setTime);
    }
    console.log("Hello duniya!", count);
    count++;

},3000);
