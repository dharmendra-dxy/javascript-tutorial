// Math.PI is a constant wit value = 3.14
// Can the value of Math.PI be changed??

const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(descriptor)

const chaiObject = {
    name: "GingerChai",
    price: 399,
    isAvailable : true,
}

console.log(Object.getOwnPropertyDescriptor(chaiObject, "name"))

// changing proeprties of object:  writable, enumerable, configurable

Object.defineProperty(chaiObject , "name", {
    writable : false,
    enumerable : false,
})

console.log(Object.getOwnPropertyDescriptor(chaiObject, "name"))


// iterating through object:

for (let [key , value] of Object.entries(chaiObject)) {
    console.log(`${key} : ${value}`)
}
// name is not printed. REASON: "enumerable = false", in above code