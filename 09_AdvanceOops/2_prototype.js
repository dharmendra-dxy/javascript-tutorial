let myHeroes = ["Thor", "Spiderman"]

let heroesPower = {
    thor : "hammer",
    spiderman : "web shoters",


    getSpiderPower : function(){
        console.log(`Spidy power: ${this.spiderman}`)
    }
}

// Creating a prototype name dhanno

Object.prototype.dhanno = function() {
    console.log(`Dhanno is present in all object`)
}


// Using prototype
heroesPower.dhanno()

/* dhanno(): is declare as a prototype in object, so now can be used as a method/property in 
 arrays, string and function 
 method =>  .dhanno
 property => .dhanno()
 */

myHeroes.dhanno()



/* myDhanno(): is declare as a prototype in array, but can't be used as a method/property
in object */

 Array.prototype.myDhanno = function () {
    console.log(`My name is : Dhanno`)
 }

 myHeroes.myDhanno()
//  heroesPower.myDhanno()  ----> thorws error


/*
NOTE: Hirarchy order

function ====>
array =======> {object} =====> null
string ======>
*/
