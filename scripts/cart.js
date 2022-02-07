let cart = localStorage.getItem("cart");

let data = JSON.parse(cart);

console.log(data);


let total = document.getElementById("total");

let totalValue = 0;
data.forEach(function (elem) {

    totalValue += elem.price;
});


console.log(totalValue);


let h2 = document.createElement('h2');
h2.innerText = `Total Price = ${totalValue} Rs`;

total.append(h2);

let cartDiv = document.getElementById("cart");

data.forEach(function (elem) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "mainDiv");

    let img = document.createElement("img");
    img.setAttribute("id", "img");
    img.src = elem.strMealThumb;

    let name = document.createElement("p");
    name.setAttribute("id", "name");
    name.innerText = elem.strMeal;

    let price = document.createElement("p");
    price.setAttribute("id", "price");
    price.innerText = `Price: ${elem.price}Rs`;

    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    
    remove.addEventListener("click", function(){
        mainDiv.innerHTML = null;
    })

    mainDiv.append(img, name, price, remove);

    cartDiv.append(mainDiv);
})


let checkout = document.createElement("button");

let checkoutDiv = document.getElementById("checkout");
checkoutDiv.append(checkout);

checkout.innerHTML = "Checkout";

checkout.addEventListener("click", function(){
    window.location.href = "checkout.html";
});

