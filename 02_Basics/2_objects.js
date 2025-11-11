const user = {
    name :  "Dharmendra",
    age : 20 ,
    contact : 6306450212,
    isLoggedIn : false,
    city : ["Delhi", "Sonebhadra"]
    // key : value
}

console.log(user.age) // Incorrect way to access in objects
console.log(user["contact"]) // Correct way to access in objects

//Add new key:value pair in object
user.fullName = "Dharmendra yadav" 


// Object.freeze(user)
// Now changes cannot be done in the object.


// De-Structuring:

// console.log(user.name) : instead of writing "user.name" we can take help of de-structuring
const {name} = user
console.log(name) // now only writing "name" will give value of "user.name"



// Syntax for using symbol in object:
const mySymbol = Symbol("myKey")

const userSymbol = {
    [mySymbol] : "myValue",
    //key : value
}

console.log(userSymbol[mySymbol])
console.log(userSymbol)


// "this." : use to access key:values in objects

user.greeting = function(){
    console.log(`A very warm wishing to ${this.fullName}`)
}

console.log(user.greeting())




