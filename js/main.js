// selecciono el elemento header y le añado los elementos de la cabecera
let header = document.querySelector(".header");
let headerContainer = document.createElement("div");
headerContainer.classList.add("header__container");
headerContainer.innerHTML =`
        <a class="menu" href="index.html">Menú</a>
        <a class="cart" href="index2.html"><i class="fas fa-shopping-cart"></i></a>
    `;
header.appendChild(headerContainer);

// Muestro en pantalla, al lado de la imagen del carrito, la cantidad de productos
// que se han seleccionado
let cart = document.querySelector(".cart");
let products = localStorage.getItem("products");
if (products) {
    products =  JSON.parse(products);
    numberProducts = products.length;
    let content = document.createTextNode(numberProducts);
    cart.appendChild(content); 
    // cart.textContent = numberProducts;
}

// selecciono la etiqueta footer y la añado los elementos relacionados al pie de pagina
let footer = document.querySelector(".footer");
let footerContainer = document.createElement("div");
footerContainer.classList.add("footer__container");
footerContainer.innerHTML =`
        <p>Lewis Contreras</p>
        <a href="#" class="fab fa-facebook"></a>
        <a href="#" class="fab fa-youtube"></a>
        <a href="#" class="fab fa-instagram"></a>
    `
footer.appendChild(footerContainer);

