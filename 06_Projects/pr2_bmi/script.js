const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault(); 

    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    const result = document.querySelector("#result");


    if(height===""|| height<0 ||isNaN(height)){
        result.innerHTML = "Please enter a valid height";   
    }else if(weight===""|| weight<0 ||isNaN(weight)){
        result.innerHTML = "Please enter a valid weight";   
    } else{
        result.innerHTML = (weight/((height*height)/10000)).toFixed(2)
    }
}); 