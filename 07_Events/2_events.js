// Making a project: on cliking image disappears 

document.querySelector("#images").addEventListener("click", function(e){
    
    const removeIt = e.target.parentNode
    // removeIt.remove()
    // alternate method of removing:
    // removeIt.parentNode.removeChild(removeIt)

},false)


// problem: on clicking side of google, whole "ul" list gets remove
// solution:

document.querySelector("#images").addEventListener("click", function(e){
    console.log(e.target.tagName)

    if(e.target.tagName==="IMG"){
        console.log(e.target.id)
        const removeIt = e.target.parentNode
        removeIt.remove()

    }

},false)