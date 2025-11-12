class user  {
    constructor(username){
        this.username = username
    }
    logMe (){
        console.log(`USERNAME => ${this.username}`)
    }
}

class teacher extends user {
    constructor(username, email ,password){
        // this.username = username
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`Course was added by ${this.username}`);
    }
}


const chai = new teacher("chai" , "chai@fb.com", "123")
chai.addCourse()
chai.logMe()

const coffee = new user("cofee")
//coffee.addCourse() ==> addcourse() is not accessed by coffee
coffee.logMe()