// Fetch api: fetch is a javascript in built function which return a promise and bydefault asyn in nature

fetch("https://jsonplaceholder.typicode.com/posts")
.then( function(resonse){
    return resonse.json();
})
.then( function(data){
    console.log(data);
})
.catch( function(err){
    console.log(err);
})


// fetch in function:

async function getData(){

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}