function setUserName(username) {
    // comple database operations
    
    this.username = username
    // this.username is a varibale here

}

function createUser(username, email, password){
   
    // this.username = username;
    // setUserName(username)
    setUserName.call(this,username)

    this.email = email;
    this.password = password

}

const chai = new createUser("chai", "chai@fb.com", "1234")
console.log(chai)  // username is not added :( ,

// REASON: setUserName(username) is not called ,  so use: setUserName.call(this, username)