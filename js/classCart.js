export class Carrito {

    // Metodo que guarda la informacion de los productos en el almacenamiento local
    //recibe por parametro la informacion del producto(objeto)
    addProducts(productInfo){
        // Añado la cantidad a la informacion del producto
        let quantityValue = document.querySelector(".quantity__input").value;
        productInfo.quantity = quantityValue;

        // Reviso si es la primera vez que se añaden productos
        //de ser así, crear un espacio en memoria para los productos.
        //Si no, añade los productos al espacio de memoria existente.
        if (localStorage.getItem("products") === null) {
            let products = [];
            products.push(productInfo);
            localStorage.setItem("products", JSON.stringify(products));
        }
        else {
            let products = JSON.parse(localStorage.getItem("products"));
            // verifico mediante al id si el producto ya ha sido añadido
            // de ser así, solo le cambio el valor de la cantidad
            for (const product of products) {
                if (productInfo.id === product.id) {
                    let sumQuantity = parseInt(productInfo.quantity) + parseInt(product.quantity);
                    product.quantity = "" + sumQuantity;
                    return localStorage.setItem("products", JSON.stringify(products));
                }
            }

            // Guardo la informacion en memoria
            products.push(productInfo);
            localStorage.setItem("products", JSON.stringify(products));
        }
    }

    // Este metodo se encarga de hallar el subtotal y total del valor de los productos.
    // Además, llama al metodo que se encarga de listarlos.
    sumProducts(){
        //Obtengo  los datos del producto y el contenedor en el que se listaran
        let products = localStorage.getItem("products");
        let productsContainer = document.querySelector(".list__products");
        
        // verifica si el carro esta vacio y lo muestra en pantalla. Y esconde algunos elementos.
        if (products === null) {
            let asidePayment = document.querySelector(".aside");
            let titles = document.querySelector(".titles");
            titles.classList.add("hidden");
            asidePayment.classList.add("hidden");
            let h2 = document.createElement("h2");
            let content = document.createTextNode("Aún no tienes elementos en el carrito");
            h2.appendChild(content);
            h2.classList.add("message");
            productsContainer.appendChild(h2);
        }
        else{
            //Muestra en pantalla los elemento seleccionados
            let asidePayment = document.querySelector(".aside");
            let titles = document.querySelector(".titles");
            asidePayment.classList.remove("hidden");
            asidePayment.classList.remove("hidden");

            let total = 0;
            products = JSON.parse(products);
            //recorro cada producto y obtengo sus datos
            for (const product of products) {
                let id = product.id;
                let nameProduct = product.nameProduct;
                let src = product.src;
                let quantity = parseInt(product.quantity);
                let price = parseInt(product.price);

                //Hallo el  total y subtotal
                let subtotal = quantity * price;
                product.subtotal = subtotal;
                total += subtotal;

                // llamo el metodo que se encarga de listar
                this.listProducts(id, nameProduct,src, quantity, price, subtotal);
                
            }
            // Guardo en local y  añado el total a la pantalla
            localStorage.setItem("products", JSON.stringify(products));
            document.getElementById("total").innerHTML = total;
            return total;
        }
    }


    // Este metodo se encarga de listar los productos
    listProducts(id, nameProduct,src, quantity, price, subtotal){
        // Selecciono y creo los elementos con la informacion que entra por parametro
        // y luego añado los elementos creados al elemento seleccionado
        let list = document.querySelector(".list__products");
        let divProduct = document.createElement("div");
        divProduct.classList.add("list__container");
        let hr = document.createElement("hr");
        divProduct.innerHTML = `
                <div class="img__container">
                    <p>${nameProduct}</p>
                    <img src="${src}" alt="">
                </div>
                <p>${quantity}</p>
                <p class="price" name="${id}">$${price}</p>
                <p>$${subtotal}</p>
                <a href="index2.html"><button name="delete">Eliminar</button></a>
            `
        list.appendChild(divProduct);
        list.appendChild(hr);
    }

    //Este metodo se encarga de eliminar los elementos de l carro,
    //es llamado al presionar el boton en la seccion de pagos
    cleanCart(){
        let products = localStorage.removeItem("products");
    }


    //Este metodo es llamado al presionar el boton de eliminar y se encarga de eliminar
    // los productos del carrito
    deleteProducts(e){
        let element = e.target;
        console.log(e);
        //verifica si el elemento actual tiene el valor "delete" en el atributo name
        // y luego compara los id para borrarlo
        if (element.name === "delete") {
            let id = element.parentElement.parentElement.querySelector(".price").getAttribute("name");
            let products = JSON.parse(localStorage.getItem("products"));
            for (let i = 0; i < products.length; i++) {
                
                if (products[i].id == id) {
                    products.splice(i,1);
                    break;
                }
            
            }
            // verifica si el anterior elemento eliminado era el último del carrito
            if (!products.length) {
                localStorage.removeItem("products");
            }else{
                localStorage.setItem("products", JSON.stringify(products));
            }           
        }        
    }  

    //Este se encarga de guardar la informacion de pago y guardarla en un archivo que se descarga
    payTheCart(paymentInfo) {
        this.cleanCart();

        // Obtengo la informacion de pago
        let jsonFile = JSON.stringify(paymentInfo);

        // Creo un fichero
        var file = new File([jsonFile],"hello world.json",{type:"text/plain;charset=utf-8"});
    
        // obtienes una URL para el fichero que acabas de crear
        var url  = window.URL.createObjectURL(file);
    
        // creas un enlace y lo añades al documento
        var a = document.createElement("a");
        document.body.appendChild(a);
    
        // actualizas los parámetros del enlace para descargar el fichero creado
        a.href = url;
        a.innerHTML = "Descargar fichero";
        a.download = file.name;
        a.click();
        // localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo));
    };
}