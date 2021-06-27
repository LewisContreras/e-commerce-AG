//Importo la clase Carrito
import {Carrito} from "./classCart.js";

let paymentInfo = {};

//Selecciono cada elemento del formulario y guardo los datos
// en el objeto paymentInfo
let form = document.querySelector(".form");
let nameInput =  form.firstElementChild;
paymentInfo.userName = nameInput.value;
let emailInput = nameInput.nextElementSibling;
paymentInfo.email = emailInput.value;
let cardInput = emailInput.nextElementSibling;
paymentInfo.card = cardInput.value;
let cardInfo = cardInput.nextElementSibling;
let expirationCardInput = cardInfo.firstElementChild;
paymentInfo.expirationCard = expirationCardInput.value;
let cvvInput = expirationCardInput.nextElementSibling;
paymentInfo.cvv = cvvInput.value;

// obtengo los datos del producto y los añado al objeto con la informacion de pago
let producto = JSON.parse(localStorage.getItem("products"));
paymentInfo.products = products;


//Dejo un evento "submit" que al ser llamado se encarga de llamar
//el metodo de la clase Carrito que realiza la funcion de guardar la informacion de pago
form.addEventListener("submit", pay);

function pay() {
    Carrito.prototype.payTheCart(paymentInfo);
}


