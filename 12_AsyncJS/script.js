// callback function:
// It is a function which is passed as a parameter to another function.

// function callback(fnc){
//     console.log("Inside main function");
//     fnc();
// }

// callback(function(){
//     console.log("Inside Callback");
// });


// better way of handling async task: PROMISE
// Promise are synchronus, to make them asynchrouns they need to be put in a function (aync):


async function getUserDetails(){

    // creating a promise:
    const prom = new Promise(function(resolve, reject){
        const users = [{name: "Ankit"}, {name: "Shrishty"}]
    
        if(users.length>0){
            resolve(users);
        } 
        else{
            reject("DATA: Unsucessfull !");
        }

    });
    return prom;
}

async function getPostDetails(user){
    const prom = new Promise(function(resolve, reject){

        let posts = [{title:"hello"}, {title:"mellow"}];

        if(posts.length>0){
            resolve(posts);
        } else{
            reject("Error occures in post");
        }
    });

    return prom;
}


getUserDetails()
.then( function(users){
    console.log(users);
    return getPostDetails(users[0]);

})
.then( function(post){
    console.log(post);

})
.catch(function(err){
    console.log(err);
})