// Selectors:

// document.getElementsByClassName --=> collection of array (HTML collection)
// document.getElementsByTagName --=> collection of array (HTML collection)
// document.getElementById --=> not a collection of array
// document.querySelector --=> not a collection of array
// document.querySelectorAll --=> collection of array (node list)

// HTMLcollection V/S nodeList:
// HTMLcollection: just like array which contains all html element
// nodeList: just like aaray which contains html elements, text, space, comment


// getElementsbyClassName:
const eleClass = document.getElementsByClassName("para");
console.log(eleClass);    // html collection i.e. array
console.log(eleClass[1]);


// getElementsByTagName:
const eleTag = document.getElementsByTagName("p");
console.log(eleTag);      // html collection i.e. array
console.log(eleTag[0]);


// getElementById:
const eleId = document.getElementById("p1");
console.log(eleId);



// MANIPULATING CONTENT:

const headingBox = document.getElementById("heading-box");
headingBox.innerText = "New-Hello-world";
headingBox.style.backgroundColor = "lightblue";


// MANIPULATE ATTRIBUTE:

const changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", function(){

    const img = document.getElementById("img1");

    // change attribute:
    img.src="https://images.pexels.com/photos/965879/pexels-photo-965879.jpeg";

}, false);




// EVENT HANDLING:
// Three main component of event handling: 1.Event  2.Event Handler  3.Event Listner


const btn = document.getElementById("btn");

function doSomething(){
    console.log("Something has happened");
}

btn.addEventListener("click", doSomething, false);
headingBox.addEventListener("mouseenter", doSomething, false);

// NOTE: .addEventListener("click", doSomething"()", false) --=> brackets are not required 
