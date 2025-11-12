// DOM TRAVERSING:
/*
1. children -=> returns array of all children element (HTML collection)
2. parentElement -=> returns parent element (HTML collection)
3. nextElementSibling / previousElementSibling  -=> returns next/previous element (HTML collection)

1. child Node -=> returns array of all the children "node"  (nodeList)
2. parentNode -=> returns parent node (nodeList)
3. nextSibling / previousSibling -=> returns next/previous node (nodeList)

*/

// HTMLcollection V/S nodeList:
// HTMLcollection: just like array which contains all html element. It is dynamic, it get updated.
// nodeList: just like aaray which contains html elements, text, space, comment. It is staics, do not get updated

const liItem = document.getElementById("list-items");
console.log("children: ",liItem.children);
console.log("childNodes: ",liItem.childNodes);
console.log("parentElement: ",liItem.parentElement);
console.log("parentNodes: ",liItem.parentNode);


// HTML Collection is dymanic:
const itemMen = document.getElementById("list-items");
console.log("HTML Collection: ",itemMen);

const li = document.createElement("li");
li.innerText = "Hawkeye";
itemMen.appendChild(li);

console.log("HTML Collection after updating: ",itemMen)



// NodeList is static:
const itemWomen = document.querySelectorAll("#women-heros");
console.log("NodeList: ",itemWomen);

const newLi = document.createElement("li");
newLi.innerText = "She hulk";
itemWomen.appendChild(newLi);

console.log("NodeList after updating: ",itemWomen);