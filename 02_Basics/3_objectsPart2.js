// Alternate way of creating obejcts: 

const user1 = new Object() // singelton object
const user2 = {} // Non-Singelton object

user1.id = "123abc"
user1.email = "user1@gmail.com"
user1.name = "Sharma vivek"
user1.isLoggedIn = false

console.log(user1)
console.log(Object.keys(user1)) // Returns an array
console.log(Object.values(user1))
console.log(Object.entries(user1)) // array of [key:value]


// Creating an object inside object:

const newUser = {
    email : "vivek@gmail.com",
    name : {
        username : {
            firstname : "Vivek",
            middename: "singh",
            lastname : "rathode", 
        }

    }
}
console.log(newUser.name)
console.log(newUser.name.username)
console.log(newUser.name.username.middename)


// Adding two different objects: 

const myObj1 = {1:"a", 2:"b", 3:"c"}
const myObj2 = {4:"d", 5:"e", 6:"f"}

// const myObj3 = {myObj1 , myObj2}  : Wrong way of adding
// const myObj3 = Object.assign({}, myObj1 , myObj2)  : Also a way
const myObj3 = {...myObj1 , ...myObj2}  // Most prefered way
console.log(myObj3)