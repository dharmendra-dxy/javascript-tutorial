// truthy and falsy:

const userEmail = ""

if(userEmail) {
    console.log("Email - Exists")
} else {
    console.log("Email - Do no exist")
}
/*
FALSY values:
=> false, 0, -0, BigInt, 0n, "", null, undefined, NaN

TRUTHY values:
=> "0", "string", " ", [], {}, function() {}, 
*/