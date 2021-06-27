//Activo un evento de click a la seccion cotenedora de las imagenes
let element = document.querySelector(".section__container");
element.addEventListener("click", goToDetailView);

// funcion que recoge los datos del producto clickeado y los guarda en
//el localStorage en formato JSON
function goToDetailView(e) {
    let current = e.target;
    let source = current.src;
    let name = current.name;
    let productContainer = current.parentElement.parentElement.parentElement;
    let sec = productContainer.querySelector("p");
    let secContent = sec.textContent;
    let price = productContainer.querySelector("p:last-child");
    price = price.textContent.substr(1,price.textContent.length);
    let priceContent = price;
    const productInfo = {
        price: priceContent,
        nameProduct: secContent,
        src: source, 
        id: name
    }
    localStorage.setItem("productInfo", JSON.stringify(productInfo));
}