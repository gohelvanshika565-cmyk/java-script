let product={
    info:"Amazon Basics Pro Series Wireless Noise Cancelling ANC Over Ear Headphone | Bluetooth Headset | USB Charging | 10 m Paring Distance | 74 Hours Battery Life | 40 mm Drivers | IPX4 Rated (Beige)",
    name:"Headphone",
    description:"Bluetooth Headset",
    category:"Electronics",
    price: "₹1959",
    stock:1,
    image:"./image/Headphone.jpg"
}
let productcard = document.getElementById('card');
let text = product. stock > 0 ? `<span class= "info"> In Stock </span>` : `<span class= "danger"> Oue Of Stock</span> `;

productcard.innerHTML = `
<div class="container">
    <div class="img">
        <img src = ${product.image} alt="" >
    </div>
    <div class= "information">
        <h1>${product.name}</h1>
        <h3>${product.info}</h3>
        <p>${product.description}</p>
        <p>${product.category}</p>
        <div class="bottom">
            <p>${product.price}</p>
            <p>${text}</p>
        </div>
        <button> Shop Now </button> 
    </div>
</div>`
