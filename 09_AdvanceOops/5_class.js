class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    // creating any method:
    encryptPassword(){
        return `${this.password}abc123`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("chai", "chai@fb.com", "123")
console.log(chai.encryptPassword())
console.log(chai.changeUserName())


// BEHIND THE SCENE : ACTUAL PROCESS ACCURING

function userDetails (username, email, password) {
        this.username = username
        this.email = email
        this.password = password
}

userDetails.prototype.encryptPassword = function(){
    return `${this.password}abc123`
}
userDetails.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const mychai = new user("chai", "chai@fb.com", "123")
console.log(mychai.encryptPassword())
console.log(mychai.changeUserName())