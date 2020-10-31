let carts = document.querySelectorAll(".add-cart");
let products = [{
        name: "Accer Laptop",
        price: 300,
        tag: 10,
        color: "White",
        inCart: 0
    },

    {
        name: "Mac Book,Apple",
        price: 800,
        tag: 11,
        color: "grey",
        inCart: 0
    },

    {
        name: "Asus Laptop",
        price: 350,
        tag: 12,
        color: "Black",
        inCart: 0
    },

    {
        name: "Dell Laptop",
        price: 400,
        tag: 1,
        color: "Black and White",
        inCart: 0
    },

    {
        name: "Hp Laptop",
        price: 500,
        tag: 2,
        color: "Black",
        inCart: 0
    },

    {
        name: "Lenovo Laptop",
        price: 300,
        tag: 3,
        color: "Silver",
        inCart: 0
    },

    {
        name: "Msi Laptop",
        price: 600,
        tag: 4,
        color: "gray",
        inCart: 0
    },

    {
        name: "Toshiba Laptop",
        price: 450,
        tag: 5,
        color: "Black",
        inCart: 0
    },

    {
        name: "Apple Laptop",
        price: 1000,
        tag: 6,
        color: "Silver",
        inCart: 0
    },

    {
        name: "Hp Laptop",
        price: 350,
        tag: 7,
        color: "Dark-Gray",
        inCart: 0
    },

    {
        name: "Accer Laptop",
        price: 300,
        tag: 8,
        color: "Black",
        inCart: 0
    },

    {
        name: "Mac Book,Apple",
        price: 1200,
        tag: 9,
        color: "Silver",
        inCart: 0
    },

    {
        name: "Dell Laptop",
        price: 350,
        tag: 10,
        color: "green",
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartsNumbers(products[i]); //Send the Data of the Arr of Object
        totalCost(products[i]);
    })

}

//This Function Check if there is any data of number of product that i choose and if there is ? it will be auto save even if i refresh the page
function onLoadCartNumbers() {
    let producutNumbers = localStorage.getItem("cartNumbers");
    if (producutNumbers) {
        document.getElementById("bill").innerHTML = producutNumbers;
    }
}
//This for i can store only one item only
function cartsNumbers(product) { //product => Carry Data 
    let producutNumbers = localStorage.getItem("cartNumbers"); //give me "1" Which is a string
    producutNumbers = parseInt(producutNumbers); //Convert 1 From String to Number
    if (producutNumbers) {
        localStorage.setItem("cartNumbers", producutNumbers + 1);
        document.getElementById("bill").innerHTML = producutNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.getElementById("bill").innerHTML = 1;
    }
    setItem(product);
}

//This is for i can Choose More than One product
function setItem(product) {
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems); //just for Restyle the data
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productInCart", JSON.stringify(cartItems)); //JSON.stringfy => Convert Data From Object to Real Data
}

//This Function For Get the Summition of Prices I Choosed
function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost"); //Get the price when i click on the product
    if (cartCost != null) {
        cartCost = parseInt(cartCost); //Convert
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function diplayCart() {
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
    let newRow = document.querySelector('.addRow');
    if (cartItems && newRow) {
        // productContainer.innerHTML = ""; //Make the container Empty if i reload the page
        newRow.innerHTML = "";
        Object.values(cartItems).map(item => {

            newRow.innerHTML += `
             <tr class="addRow1">
             <td><i class="fas fa-window-close fa-2x icon"></i>
             <img src = "img/Product/${item.tag}.jpg" width="100px" height="100px"/>
             <span>${item.name}</span></td>
            </td>
            <td><span>$${item.price},00</span></td>
            <td>${item.inCart}</td>
            <td>$${item.price * item.inCart},00</td></tr>
          `;
        });
    }
}
onLoadCartNumbers();
diplayCart();

function confirmBuy() {
    confirm("Are you Want to Buy this Products");
}