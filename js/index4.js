// Mostrar el producto en su vista de detalle

// Obtengo los datos del producto del localStorage
const productInfo = JSON.parse(localStorage.getItem("productInfo"));
localStorage.removeItem("productInfo");

//Selecciono los respectivos elementos y les inserto los datos del producto
let detailContainer = document.querySelector(".section__container");

let img = detailContainer.querySelector("img");
img.src = productInfo.src;

let h2 = detailContainer.querySelector("h2");
h2.textContent = productInfo.nameProduct;

let h1 = detailContainer.querySelector("h1");
h1.innerHTML = "$" + productInfo.price;

//Importo la clase carrito para usar su metodo de anadir al carrito
//ativado al hacer click en el boton de "anadir al carrito"
import {Carrito} from "./classCart.js";

let button = document.querySelector(".addButton");
button.addEventListener("click", callAddProduct);

function callAddProduct() {
    Carrito.prototype.addProducts(productInfo);
}