// Concept of Local Scoping : 
function outer() {
    let username= "Harry"

    function inner () {
        console.log("INNER : ", username)
    }
    inner()

}
outer()



// Concept of Closures:

function makeFnc () {
    const name = "Mozilla"

    function displayName(){
        console.log(name)
    }
    return displayName

}
const myFunc = makeFnc()
myFunc()