const products = [
    {
        id: 1,
        name: "Nike",
        productName: "Running Shoes",
        description: "Comfortable running shoes for men.",
        price: 2999,
        category: "Footwear",
        image: "images/shoes.jpg",
    },
    {
        id: 2,
        name: "Samsung",
        productName: "Galaxy A56",
        description: "5G smartphone with AMOLED display.",
        price: 32999,
        category: "Electronics",
        image: "images/mobile.jpg",
    },
    {
        id: 3,
        name: "Boat",
        productName: "Wireless Earbuds",
        description: "Bluetooth earbuds with 40 hours battery backup.",
        price: 1999,
        category: "Accessories",
        image: "images/earbuds.jpg",
    },
    {
        id: 4,
        name: "HP",
        productName: "Laptop",
        description: "15.6-inch Full HD laptop with Intel Core i5.",
        price: 58999,
        category: "Computers",
        image: "images/laptop.jpg",
    },
    {
        id: 5,
        name: "Puma",
        productName: "Sports T-Shirt",
        description: "Dry-fit sports t-shirt for gym and running.",
        price: 999,
        category: "Clothing",
        image: "images/tshirt.jpg",
    }
];

const display = () => {
    const myproduct = document.getElementById("my-product");

    myproduct.innerHTML = "";

    products.forEach((product) =>{
        myproduct.innerHTML += `
        <tr>
            <td>${product.id}</td>
            <td><img src="${product.image}" alt="${product.name}" width="80"></td>
            <td>${product.productName}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>

            <td>
                <button onclick = "edit(${product.id})">Edit</button>
                <button class="btn2" onclick = "deleteProduct(${product.id})">Delete</button>
            </td>
        </tr>`;
    });
};


let editid = "";

const add = () => {

    let name = document.getElementById("name").value;
    let productName = document.getElementById("productName").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;
    let image = document.getElementById("image").value;

    if(editid){
        const product = products.find((P) => P.id == editid);

        product.name = name;
        product.productName =  productName;
        product.description = description;
        product.price = price;
        product.category = category;
        product.image = image;

        editid = null;
        alert("Product update successfully.")
        display();
        clearFrom();
    }
    else{
        const newproduct = {
            id: products.length + 1,
            name,
            productName,
            description, 
            price: Number(price),
            category,
            image
        }

        products.push(newproduct);
    }
}

const edit = (id) =>{
    const product =products.find((p) => p.id == id);

    editid = product.id;

    document.getElementById("name").value= product.name;
    document.getElementById("productName").value= product.productName;
    document.getElementById("description").value= product.description;
    document.getElementById("price").value= product.price;
    document.getElementById("category").value= product.category;
    document.getElementById("image").value= product.image;
    document.getElementById("btn").innerText = "Update Product"
}

const deleteProduct = (id) => {
    const index = products.findIndex((p) => p.id == id);

    confirm("Are you sure you want to delete this product?");
    products.splice(index , 1);
    alert("Product deleted successfully.")
    display();
}

const clearFrom =()=>{

    document.getElementById("name").value= "";
    document.getElementById("productName").value= "";
    document.getElementById("description").value= "";
    document.getElementById("price").value= "";
    document.getElementById("category").value= "";
    document.getElementById("image").value= "";
    document.getElementById("btn").innerText = "Add Product"
}
display();