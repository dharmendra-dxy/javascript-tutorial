let randomNumber  = Math.floor(Math.random()*100) +1 
console.log(`randomNumber: ${randomNumber}`)

 const submit = document.querySelector("#submit")
 const userInput = document.querySelector("#guessField")
 const guessSlot = document.querySelector(".guesses")
 const remaining = document.querySelector(".lastResult")
 const lowOrHigh = document.querySelector(".lowOrHigh")
 const startOver = document.querySelector(".resultPara")

 const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid Number")
    } else if(guess<1){
        alert("Please enter a Number more than 1")
    } else if(guess>100){
        alert("Please enter a Number less than 100")
    } else{
        prevGuess.push(guess)
        if(numGuess==11){
            displayGuess(guess)
            displayMessage(`Game Over!! Random Nmber: ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess== randomNumber){
        displayMessage(`You won!!`)
        endGame()
    } else if(guess<randomNumber){
        displayMessage(`Your Number is small`)
    } else if(guess>randomNumber){
        displayMessage(`Your Number is Large`)
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2 style = color:red;>${message}</h2>`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame" style = "border: 2px solid white; border-radius: 15px; padding:15px;">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector("#newGame") 
    newGameBtn.addEventListener("click", function(e){
        randomNumber  = Math.floor(Math.random()*100) +1 ;
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)

        playGame = true
    })
    }



