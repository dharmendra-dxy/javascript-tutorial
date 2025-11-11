let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())


// Creating any specific date

// Input type1
let anyDate =  new Date(2023,0,23,10,10)
console.log(anyDate.toString())

// Input type2
let anyDate2 = new Date("2023-01-23")
console.log(anyDate2.toString())


// Some Methods

console.log(myDate)
console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(myDate.getHours())

