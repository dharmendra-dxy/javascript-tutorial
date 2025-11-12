let students = [

    {name: "Bhimrao", city: "Hubli", age:25, totalMarks:345 },
    {name: "Ganesh", city: "Hyderabad", age:22, totalMarks:200 },
    {name: "Aditya", city: "Baramulla", age:21, totalMarks:300 },
    {name: "Navin", city: "London", age:27, totalMarks:289 },
    {name: "Shiva", city: "Andhra Pradesh", age:19, totalMarks:350 },
    {name: "Utpal", city: "Ahemdabad", age:22, totalMarks:278 },
    {name: "Nanda", city: "Pune", age:28, totalMarks:345 },
    {name: "Justin", city: "Hubli", age:25, totalMarks:345 },
    {name: "Dale", city: "Hyderabad", age:22, totalMarks:200 },
    {name: "Shane", city: "Baramulla", age:21, totalMarks:300 },
    {name: "Abraham", city: "London", age:27, totalMarks:289 },
    {name: "Shahrukh", city: "Andhra Pradesh", age:19, totalMarks:350 },
    {name: "Hritik", city: "Ahemdabad", age:22, totalMarks:278 },
    {name: "Saif", city: "Pune", age:28, totalMarks:345 },
    {name: "Thor", city: "Hubli", age:25, totalMarks:345 },
    {name: "Ironman", city: "Hyderabad", age:22, totalMarks:200 },
    {name: "Captain america", city: "Baramulla", age:21, totalMarks:300 },
    {name: "Hawkeye", city: "London", age:27, totalMarks:289 },
    {name: "Hulk", city: "Andhra Pradesh", age:19, totalMarks:350 },
    {name: "Blackwidow", city: "Ahemdabad", age:22, totalMarks:278 },
    {name: "Spiderman", city: "Pune", age:28, totalMarks:345 },
    
    {name: "Shane", city: "Melburn", age:21, totalMarks:300 },
    {name: "Abraham", city: "Pretoriya", age:27, totalMarks:289 },
    {name: "Blackwidow", city: "Ahemdabad", age:22, totalMarks:278 },
    {name: "Spiderman", city: "Pune", age:28, totalMarks:345 },
    {name: "Shane", city: "Melburn", age:21, totalMarks:300 },
    {name: "Abraham", city: "Pretoriya", age:27, totalMarks:289 }

];

let noOfPages = Math.ceil(students.length/8); 
let currentPage = 1;

const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");


// filterStudents = stundents :
let filterStudents = students;


// Logic of generating nums button:
for(let i=1; i<= noOfPages; i++){

    let btn = document.createElement("button");
    btn.innerText = i;

    document.getElementById("nums").appendChild(btn);

    btn.addEventListener("click", function(){
        // paginate:
        currentPage = i;
        paginate(i);
    }, false);
}




// RIGHT BTN LOGIC:
rightBtn.addEventListener("click", function(){
    if(currentPage < noOfPages){
        currentPage++;
        paginate(currentPage);
    }
}, false);


// LEFT BTN LOGIC:
leftBtn.addEventListener("click", function(){
    if(currentPage > 1){
        currentPage--;
        paginate(currentPage);
    }
}, false);



// initial call:
paginate(1);

function paginate(pageNumber){
    
    let startIndex = (pageNumber - 1)*8 ;
    let endIndex = (startIndex + (8-1)) ;

    let paginatedData = filterStudents.slice(startIndex, endIndex);

    // setting page number on html:
    document.getElementById("info").innerText =  "Page "+ currentPage +" of "+ noOfPages;


    // clearing tbody for next set of data:
    document.getElementById("tbody").innerHTML = "";



    for(let i=0; i<paginatedData.length; i++){

        const tableBody = document.getElementById("tbody");
        const tr= document.createElement("tr");
        const tdSno = document.createElement("td");
        const tdName = document.createElement("td");
        const tdAge = document.createElement("td");
        const tdCity = document.createElement("td");
        const tdMarks = document.createElement("td");
    
        tdSno.innerText = startIndex + i + 1;
        tdName.innerText = paginatedData[i].name;
        tdAge.innerText = paginatedData[i].age;
        tdCity.innerText = paginatedData[i].city;
        tdMarks.innerText = paginatedData[i].totalMarks;
    
        tr.append(tdSno, tdName, tdAge, tdCity, tdMarks);
    
        tableBody.appendChild(tr);
    
    }

}



// SEARCHING LOGIC:

const searchBtn = document.getElementById("search");

searchBtn.addEventListener("keyup", function(){

    let value = searchBtn.value;
    console.log(value);

    // let filterStudents = students (code written on top)
    filterStudents = students.filter(function(student){
        return student.name.includes(value);
    });

    // console.log(filterStudents);

    // paginate:
    currentPage = 1;
    paginate(1);

}, false);