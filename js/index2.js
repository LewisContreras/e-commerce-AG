// importar carrito
import {Carrito} from "./classCart.js";

//Metodo para sumar los productos y listarlos al entrar en la pagina
Carrito.prototype.sumProducts();

//Activo un evento por si el usuario quiere vaciar el carro
let clean = document.getElementById("clean");
clean.addEventListener("click", Carrito.prototype.cleanCart);

//Activo un evento por si el usuario quiere eliminar algun producto
let listProducts = document.querySelector(".list__products");
listProducts.addEventListener("click", Carrito.prototype.deleteProducts);