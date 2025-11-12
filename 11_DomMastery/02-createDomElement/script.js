const parent = document.getElementById("parent");

const productDetails = [
    {
        name: "Samsung S20",
        price: 20000
    },
    {
        name: "Iphone 14",
        price: 80000
    },
    {
        name: "Google pixel 6A",
        price: 30000
    }
];


for( let i=0; productDetails.length; i++){

    // creating product Element:
    const product = document.createElement("div");
    product.classList.add("product");

    // create productName element:
    const productName = document.createElement("h2");
    productName.innerText = productDetails[i].name;

    // create productPrice element:
    const productPrice = document.createElement("h3");
    productPrice.innerText = productDetails[i].price;

    // create button element:
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = "Buy"; 
    button.addEventListener("click", function(){
        console.log(productDetails[i]);
    }, false)   


    // add h2, and h3 to div:
    product.appendChild(productName);
    product.appendChild(productPrice);
    product.appendChild(button);

    // Succefully created "product"
    // console.log(product);

    // add product div to parent div:
    parent.appendChild(product);


}





