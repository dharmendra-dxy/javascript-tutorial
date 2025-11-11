let score = 100
console.log(score)

let balance =  new Number(100)
console.log(balance)

console.log(balance.toString()) // converts to string
console.log(balance.toFixed(2)) // 1=>100.0 , 2=> 100.0, used for precision values     

// -----MATH---- => It is a predifined libraray in JavaScript
// Math.random

console.log(Math.random()) // Any random value btw 0 and 1
console.log((Math.random()*10) + 1) // Any random value btw 0+1=1 and 1*10=10
console.log(Math.floor(Math.random()*10)) // Any random value btw 0 and 1*10=10 with no decimals