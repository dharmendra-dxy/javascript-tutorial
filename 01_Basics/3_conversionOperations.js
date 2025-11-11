let score = "33"

console.log(typeof score) //string

let valueInNumber = Number(score) //changes to number
console.log(typeof valueInNumber)

/* NOTE:
"33" => 33
"33abc" => NaN (Not a Number)
true => 1; false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // returns true


/* to change use: Number, String, Boolean */

let a= "33"
let b= parseInt (a)
console.log("Type of b:" ,typeof b)