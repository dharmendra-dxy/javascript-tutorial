const user = {
    userName : "Harry",
    loginCount : 8,
    signIn : true,
    getUserDetails: function(){
        console.log("Details accesed!!")
    }
}

console.log(user.userName)
user.getUserDetails()