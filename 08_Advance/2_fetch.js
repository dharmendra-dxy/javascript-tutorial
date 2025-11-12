// Consuming fetch with promise i.e. .then .catch


fetch("url")
.then( (response) => {
    return response.json
})
.then( (responseData) => {
    console.log(responseData)
})
.catch( (error) => {
    console.log(error)
})


/* Fetch with function i.e. asyn-await:
1. create "async" function
2. create a response  = "await" fetch()
3. create a data = "await" resonse.json() -> it takes time to conver response to json
4. data is received
*/

async function getAllUser(){

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("ERROR: ", error);
    }

}

getAllUser();