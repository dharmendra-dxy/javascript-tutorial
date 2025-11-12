class user {
    constructor(email ,password) {
        this.email = email
        this.password = password
    }

    // using "get" and "set"
   
    /*
    get password(){
        return this.password.toUpperCase();
    }
    set password(value){
        this.password = value.toUpperCase()
    }
    */

    // PROBLEM : "constructor" and "set" both are defining the value of password
    //  so maximum call size exceed due to this 


    // SOLUTION: change password => _password i.e. create a new variable

    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const hitesh = new user("hitesh@ineuron.com" , "1232abc")
console.log(hitesh.password)




// get set in Objects:

const userObject = {
    // _email, _password is used here
    _email : "harry@cwh.com",
    _password :  "123abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value.toUpperCase()
    }
}

console.log(userObject._email)
console.log(userObject.password)




// Property of get set in function:

function userFunction(email, password) {
    this.email = "codeXdhanno@meta.com" 
    this.password = "123@password"

    Object.defineProperty(this , "email", {
        get email() {
            return this._email.toUpperCase()
        },
        set email (value) {
            this._email = value.toUpperCase()
        },


        get password() {
            return this._password.toUpperCase()
        },
        set password (value) {
            this._password = value.toUpperCase()
        }
    })
}