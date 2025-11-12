let name = "dhanno     "

console.log(name.length) //11

// creating a prototype : trueLength => which gives true lenth of a string.

String.prototype.trueLength = function() {
    console.log(`this: ${this}`)
    console.log(`True Length : ${this.trim().length}`)
}

name.trueLength() // 6
"hitesh".trueLength() //6
"hitesh  ".trueLength()//6
"chai      ".trueLength()//4
