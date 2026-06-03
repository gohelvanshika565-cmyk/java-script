let product = document.getElementById('Product');

function Firstcard(){

    let name = document.getElementById('Name').value;
    let description = document.getElementById('Description').value;
    let price = document.getElementById('Price').value;
    let image = document.getElementById('Image').value;

    let card= "";

    if(name ==="" || description ==="" || price ==="" || image ===""){
        alert("All Filed are required.!");
    }
    else{
        card += `<div class="card"> 
                <img src=${image} >
                <h3>${name}</h3>
                <p>${description}</p>
                <p>Price: ₹${price}</p>
                <button> Shop Now </button>
                </div>`
    }
    product.innerHTML += card;
}