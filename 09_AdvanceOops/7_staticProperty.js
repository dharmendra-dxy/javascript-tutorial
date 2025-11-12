class user  {
    constructor(username){
        this.username = username
    }
    logMe (){
        console.log(`USERNAME => ${this.username}`)
    }
    static createId (){
        return `${this.username}123`
    }
    // after using static, access of creteID() is restricted. It is only accesable to user.
}

const sangam = new user("sangam")
console.log(sangam.createId())



class teacher extends user{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher ("iphone", "i@phone.com")
iphone.logMe()
// console.log(iphone.createId())   => cannot be accessed