function addNum(num1 , num2){
    console.log("Hello")
    return (num1+num2)
}
addNum(2,3)

/* Alternate way of declaring function:

const addNum = function(num1,num2) {
    console.log("Hello")
    return (num1+num2)
}

*/

function userLoggedIn(userName){
    if(!userName){
        console.log("Please enter a user name")
        return 
    }
    return `${userName} logged in`
}

console.log(userLoggedIn("Harry"))


// Shopping cart money addition: rest operator

function cartPrice(...price){
    return price
}

console.log(cartPrice(1,2,3,4)) // an aaray will be printed



// Function with : Objects

const user = {
    name : "Dharmendra",
    id : 1123,
}
function handleObject(anyObject){
    return `name= ${anyObject.name} and id= ${anyObject.id}`
}

console.log(handleObject(user))



// Function with : Array

const myArray = [100,200,300,400]

function handleArray(anyArray){
    return anyArray[2]
}
console.log(handleArray(myArray))