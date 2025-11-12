// random color generator:

const randomColor = function(){
    let hex = "0123456789ABCDEF"
    let color = "#";
    for(let i=0 ; i<6 ; i++){
         color += hex[Math.floor(Math.random()*16) ]
    }
    return color
} 

// console.log(randomColor())

let intervalTime;

const startChanging = function(){
    
    const changeBGC = function(){
        document.body.style.backgroundColor = randomColor()
    }

    if(!intervalTime){
        intervalTime = setInterval(changeBGC,500)
    }
}


const stopChanging = function(){
    clearInterval(intervalTime)
    intervalTime = null;
}


document.querySelector("#start").addEventListener("click", startChanging)
document.querySelector("#stop").addEventListener("click", stopChanging)