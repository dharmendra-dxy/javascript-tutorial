// Promise is used for async operations.
// Promise has three state: 1.pending ; 2.fullfilled ; 3.rejected


// Creating a Promise:

const promiseOne = new Promise(function(resolve,reject) {
    // Do an async task
    setTimeout(function(){
        console.log("Async task performed!!")
        resolve()
    },1000)

})

// Consuming a Promise:
// promiseOne.then() => connects with resolve()
// promiseOne.catch() => connects with reject()

promiseOne.then(function(){
    console.log("Promise Consumed!!")
})


// Alternate way of creating Promise:

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 completed!!")
    },1000)
    resolve()

}).then(function(){
    console.log("Async task 2 Resolved!!")
})


// resolve({object}): resolve with a data

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username: "Dharmendra",
            youTubeId : "CodeXDhanno",
            email  : "codexdhanno@gmail.com",
        })
    },1000)
})

promiseThree.then(function(data){
    console.log(data)
})

// reject():
// promiseFour.then().catch() :

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =  true;

        if(!error){
            resolve({
                username: "Harry",
                password : "1234"
            })
        } else{
            reject("ERROR : Something went wrong!!")
        }

    },1000)
})

promiseFour
.then( (data) => {
    console.log(data);
    return data.username

    // use "chaining" to get value of return : data.username

})
.then( (returnData) => {
    console.log(returnData)

})
.catch( function(error) {
    console.log(error)

})
.finally( () => {
    // Finally gets executed always
    console.log("Promise is either resolve or rejected")

})




// usuing async-await

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error =  false;

        if(!error){
            resolve({
                username: "JavaScript",
                password : "1234",
            })
        } else{
            reject("ERROR : JavaScript went wrong!!")
        }

    },1000)
})

/*
async function consumePromiseFive(){
    const response = await promiseFive;
    console.log(response)
}
*/   // Above code refuses if error exist. so using try-catch, just like then(), catch()


// using try-catch in async-await:
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()