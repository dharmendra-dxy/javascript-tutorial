const user = {
    name : "Harry",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.name} welcome to website`)
        console.log(this) // "this" Prints the current context
    }
}

user.welcomeMessage()


function manipulation() {
    let name = "Sangam"
    console.log(this.name) // result : undefined
}
manipulation() // "this" donot work in function, it only works in objects.



// ARROW FUNCTION: () => {}

let arrowfnc = () => {
    let name = "Sangam"
    console.log(this.name) // result : undefined
}
arrowfnc() 
// "this" do not work in arrow function too.


// One line arrow function:
let addNum = (num1,num2) => (num1+num2)
console.log(addNum(3,4))

