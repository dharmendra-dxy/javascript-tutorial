    /* document.getElementById("owl").onclick = function(){
        alert("Image: owl")
    } */
    // Alternate approach:
    document.getElementById("owl").addEventListener("click", function(e){
        console.log("Owl Clicked");
        e.stopPropagation()
    },false)
    // flase is the default value, it can be set to true also.
    // [false => bubbling event]  [true => capturing event]
    
    document.getElementById("images").addEventListener("click", function(e){
        console.log("Clicked inside ul")
    },false)

    document.getElementById("google").addEventListener("click", function(e){
        console.log("GooGle Clicked")
        e.preventDefault()
        e.stopPropagation() // stops propagation => bubbling and capturing event
        
    }, false )
