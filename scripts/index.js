async function getData(){

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);
    let data = await response.json();

    console.log(data);
    appendData(data.meals);
}

getData();

let menu = document.getElementById("menu");
let i = 110;


function appendData(element) {

    let cart = [];
    let j = 0;
    let count = document.getElementById("count");

    count.innerHTML = 0;

    element.forEach(function(elem){
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
        price.innerText = `${i} Rs`;
        let p = i;
        

        let button = document.createElement("button")
        button.setAttribute("id", "addtocart");
        button.innerText = `Add to Cart`;

        mainDiv.append(img, name, price, button);
        menu.append(mainDiv);

        
        
        

        button.addEventListener("click", function(){
            j++;
            count.innerText = `${j}`;

            cart.push(
                {
                    strMeal: elem.strMeal,
                    price : p,
                    strMealThumb : elem.strMealThumb
                }
            );

            localStorage.setItem("cart", JSON.stringify(cart));

        });

        i = i + 50 + 4;
    });
    
}