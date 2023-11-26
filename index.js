/*

- Productos:
  - Armar el listado de productos obteniendo la información de cada uno de un Array de objectos. Como mínimo 6 productos.
  - Se deben contemplar como mínimo 3 categorías de productos.
  - Cada producto debe tener como mínimo: Nombre, descripción, precio, una imagen y categoría. Toda esta información se debe mostrar por cada ítem.
  - Debe tener un botón que permita agregar el ítem al carrito.

  */

// Arrays

// Array de productos

let productos = [
    {
        nombre: "Chaqueta chocolate",
        descripcion: "De corderoy, cruelty free . Lista para acompañarte a todos lados.",
        precio: 18000,
        img: "./imagenes/Productos/Abrigos/chaquetaMarron.jpg",
        categoria: "abrigos",
        alt: "Mujer posa con una chaqueta marrón",
        cantidad: 0,
        codigo: 0,
    },
    {
        nombre: "Campera naranja",
        descripcion: "Rellena de pluma, lista para afrontar el verano.",
        precio: 30000,
        img: "./imagenes/Productos/Abrigos/campera.jpg",
        categoria: "abrigos",
        alt: "Mujer posa con una campera abrigada naranja",
        cantidad: 0,
        codigo: 1,
    },
    {
      nombre: "Chaqueta rocococó",
      descripcion: "De gabardina, ideal para un look casual o una tarde de paseo.",
      precio: 20000,
      img: "./imagenes/Productos/Abrigos/chaquetaRosaproducto.jpg",
      categoria: "abrigos",
      alt: "Mujer posa con una chaqueta rosa",
      cantidad: 0,
      codigo: 2,
  },
  {
    nombre: "Remera Basic",
    descripcion: "De algodón, un básico infaltable. Tiene un bolsillo delantero.",
    precio: 8000,
    img: "./imagenes/Productos/ParteArriba/remeraBlancaproducto.jpg",
    categoria: "remeras",
    alt: "Mujer posa con una remera blanca con bolsillo delantero",
    cantidad: 0,
    codigo: 3,
  },
  {
    nombre: "Remera Celeste",
    descripcion: "Estampado batic, lista para agregar un poco de color.",
    precio: 5000,
    img: "./imagenes/Productos/ParteArriba/remeracelesteproducto.jpg",
    categoria: "remeras",
    alt: "Mujer posa con una remera celeste con manchitas blancas",
    cantidad: 0,
    codigo: 4,
  },
  {
    nombre: "Vestido amarillo",
    descripcion: "Agregale color a tu look, con tu vestido amarillo.",
    precio: 10500,
    img: "./imagenes/Productos/ParteAbajo/polleraamarilla.jpg",
    categoria: "vestidos",
    alt: "Mujer posa con pollera amarilla con flores blanca",
    cantidad: 0,
    codigo: 5,
  },
  {
    nombre: "Pollera Blue Jean",
    descripcion: "De Jean, pero con onda. Te acompaña en esas tardes de verano.",
    precio: 15000,
    img: "./imagenes/Productos/ParteAbajo/polleraJean.jpg",
    categoria: "vestidos",
    alt: "Mujer posa con pollera de Jean",
    cantidad: 0,
    codigo: 6,
  },

];

// Array de productos en el carrito

let productosCarrito = [];



/**********************************************************************************************************/

// PRODUCTOS


// Busco el div donde van los productos

let divProductos = document.querySelector(".divProductos");

// Recorro el array de productos

productos.forEach((producto) => {

    // Creo la card para cada producto
    
    let contenedorCard = document.createElement("div");
    contenedorCard.setAttribute("class", "col-12 col-md-6 col-lg-3 p-1");

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("data-codigo", producto.codigo);

    let img = document.createElement("img");
    img.setAttribute("src", producto.img);
    img.setAttribute("class", "card-img-top rounded");
    img.setAttribute("alt", producto.alt);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let tituloCard = document.createElement("h3");
    tituloCard.setAttribute("class", "card-title");
    tituloCard.innerText = producto.nombre;

    let parrafoCard = document.createElement("p");
    parrafoCard.setAttribute("class", "card-text");
    parrafoCard.innerText = producto.descripcion;

    let precioCard = document.createElement("p");
    precioCard.setAttribute("class", "card-text fw-bolder fs-5");
    precioCard.setAttribute("data-precio", producto.precio);
    precioCard.innerText = `$${producto.precio.toLocaleString()}`;

 
    let contenedorStock = document.createElement("div");
    contenedorStock.setAttribute("class", "row d-flex");

    let contenedorRestar = document.createElement("div");
    contenedorRestar.setAttribute("class", "col-5");

    let btnRestar = document.createElement("button");
    btnRestar.setAttribute("class", "restar btn btn-primary btn-productos ms-5");
    btnRestar.innerText = "-";

    let stock = document.createElement("p");
    stock.setAttribute("class", "stock col-2");
    stock.setAttribute("id", `id${producto.codigo}`);
    stock.innerText = "0";

    let contenedorSumar = document.createElement("div");
    contenedorSumar.setAttribute("class", "col-5");

    let btnSumar = document.createElement("button");
    btnSumar.setAttribute("class", "sumar btn btn-primary btn-productos me-5");
    btnSumar.innerText = "+";


    let btnCarrito = document.createElement("button");
    btnCarrito.setAttribute("class", "btn btn-primary btn-acento mt-2");
    btnCarrito.innerText = "Agregar al carrito";

    contenedorSumar.append(btnSumar);
    contenedorRestar.append(btnRestar);
    contenedorStock.append(contenedorRestar, stock, contenedorSumar);
    cardBody.append(tituloCard, parrafoCard, precioCard, contenedorStock, btnCarrito);
    card.append(img, cardBody);
    contenedorCard.append(card); 
    
    // Imprimo las cards
    
    divProductos.append(contenedorCard);

    let contador = 0;

    // Sumar un producto al pedido

    btnSumar.addEventListener("click", (e) => {

      contador ++;

      let target = e.target;
      let contenedorSuma = target.parentElement;
      let contenedorStock = contenedorSuma.parentElement;      
      let resta = contenedorStock.firstChild;
      let cantidadASumar = resta.nextSibling;
      cantidadASumar.innerText = contador;

    });

    // Restar un producto al pedido SOLO si hay al menos un producto ordenado

    btnRestar.addEventListener("click", (e) => {

      contador --;
    
      let target = e.target;
      let contenedorResta = target.parentElement;
      let cantidadARestar = contenedorResta.nextSibling;

      if (contador >= 0) {
      cantidadARestar.innerText = contador;
      } else {
        contador = 0;
      }
    
      });


    // Botón "agregar al carrito" - evento

    let contadorAgregarCarrito = 0;

    btnCarrito.addEventListener("click", (e) => {

    contadorAgregarCarrito ++;

    // Objeto producto para pushear al array del carrito
    let productoCarrito = {};
    
    //Llamo a los elementos HTML


    let target = e.target;
    let producto = target.parentElement;
    let contenedorCard = producto.parentElement;
    let img = contenedorCard.firstChild;
    let imgSrc = img.src;
    let imgAlt = img.alt;
    let codigoProducto = contenedorCard.dataset.codigo;
    let nombreProducto = producto.firstChild;
    let descripcionProducto = nombreProducto.nextElementSibling;
    let contenedorPrecioProducto = descripcionProducto.nextElementSibling;
    let precioProducto = parseInt(contenedorPrecioProducto.dataset.precio);
    let contenedorStock = contenedorPrecioProducto.nextElementSibling;
    let contenedorResta = contenedorStock.firstChild;
    let contenedorCantidadPedida = contenedorResta.nextElementSibling;
    let cantidadPedida = contenedorCantidadPedida.innerText;
    productoCarrito.nombre = nombreProducto.innerText;
    productoCarrito.precio = precioProducto;
    productoCarrito.codigo = codigoProducto;
    productoCarrito.cantidadPedida = cantidadPedida;
    productoCarrito.src = imgSrc;
    productoCarrito.alt = imgAlt;

    // Pusheo al array solamente en el primer click. Luego voy a evaluar si el producto ya existe antes de pushear. Si existe, lo elimino y pusheo con la nueva cantidad pedida


    if (contadorAgregarCarrito == 1 && productoCarrito.cantidadPedida > 0) {
      productosCarrito.push(productoCarrito);  
    } else if (productoCarrito.cantidadPedida == 0) {
      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
    } else {
      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
      productosCarrito.push(productoCarrito);
    }


    // Calculo la cantidad pedida
    let totalPedidos = 0;
    for (productoCarrito of productosCarrito) {
      totalPedidos += parseInt(productoCarrito.cantidadPedida);
    }

    // Busco el span del icono carrito
    let spanCarrito = document.querySelector(".badge");
    spanCarrito.innerText = totalPedidos;


});

});

/**********************************************************************************************************/

//CARRITO

// Busco el boton del carrito/modal

let btnModal = document.querySelector(".btnModal");

// Busco el div donde va el carrito

let divCarrito = document.querySelector(".modal-body");

// Agarro contenedor para el precio

let contenedorPrecio = document.querySelector(".contenedorPrecio");


// Cada vez que aprieto boton modal, recorro array de carrito e imprimo cards

btnModal.addEventListener("click", () => {

divCarrito.innerHTML = "";
contenedorPrecio.innerHTML = "";

productosCarrito.forEach((productoCarrito) => {


    // Creo la card para cada producto


    let contenedorCardCarrito = document.createElement("div");
    contenedorCardCarrito.setAttribute("class", "card mb-3");
    contenedorCardCarrito.setAttribute("style", "max-width: 540px;");
    contenedorCardCarrito.setAttribute("data-codigo", productoCarrito.codigo);

    let cardCarritoRow = document.createElement("div");
    cardCarritoRow.setAttribute("class", "row g-0");

    let cardCarritoCol = document.createElement("div");
    cardCarritoCol.setAttribute("class", "col-md-8");

    let cardCarritoBody = document.createElement("div");
    cardCarritoBody.setAttribute("class", "card-body body-carrito");

    let tituloCardCarrito = document.createElement("h3");
    tituloCardCarrito.setAttribute("class", "card-title");
    tituloCardCarrito.innerText = productoCarrito.nombre;

    let precioCardCarrito = document.createElement("p");
    precioCardCarrito.setAttribute("class", "card-text fw-bolder");
    precioCardCarrito.setAttribute("data", productoCarrito.precio);
    precioCardCarrito.innerText = `$${productoCarrito.precio.toLocaleString()}`; 

    let contenedorStock = document.createElement("div");
    contenedorStock.setAttribute("class", "row d-flex");

    let contenedorRestar = document.createElement("div");
    contenedorRestar.setAttribute("class", "col-2");

    let btnRestar = document.createElement("button");
    btnRestar.setAttribute("class", "restar btn btn-primary btn-productos");
    btnRestar.innerText = "-";

    let stock = document.createElement("p");
    stock.setAttribute("class", "stock col-1");
    stock.innerText = productoCarrito.cantidadPedida;

    let contenedorSumar = document.createElement("div");
    contenedorSumar.setAttribute("class", "col-2");

    let btnSumar = document.createElement("button");
    btnSumar.setAttribute("class", "sumar btn btn-primary btn-productos");
    btnSumar.innerText = "+";

    let btnEliminar = document.createElement("button");
    btnEliminar.setAttribute("class", "btn btn-primary btn-acento mt-2");
    btnEliminar.innerText = "Eliminar producto";

    let contenedorImg = document.createElement("div");
    contenedorImg.setAttribute("class", "col-md-4");

    let imgCardCarrito = document.createElement("img");
    imgCardCarrito.setAttribute("src", productoCarrito.src);
    imgCardCarrito.setAttribute("class", "img-fluid rounded-start");
    imgCardCarrito.setAttribute("style", "width: 100%");
    imgCardCarrito.setAttribute("alt", productoCarrito.alt);


    contenedorImg.append(imgCardCarrito);
    contenedorSumar.append(btnSumar);
    contenedorRestar.append(btnRestar);
    contenedorStock.append(contenedorRestar, stock, contenedorSumar);
    cardCarritoBody.append(tituloCardCarrito, precioCardCarrito, contenedorStock, btnEliminar);
    cardCarritoCol.append(cardCarritoBody); 
    cardCarritoRow.append(cardCarritoCol, contenedorImg);
    contenedorCardCarrito.append(cardCarritoRow);

    // Imprimo las cards

    divCarrito.append(contenedorCardCarrito);



    // Sumar un producto al pedido

    let contador = productoCarrito.cantidadPedida;

    btnSumar.addEventListener("click", (e) => {

      contador ++;

      let target = e.target;
      let contenedorSuma = target.parentElement;
      let contenedorStock = contenedorSuma.parentElement;  
      let contenedorBody = contenedorStock.parentElement;
      let contenedorPadreBody = contenedorBody.parentElement;
      let contenedorRow = contenedorPadreBody.parentElement;
      let contenedorCard = contenedorRow.parentElement;
      let codigoProducto = contenedorCard.dataset.codigo;    
      let resta = contenedorStock.firstChild;
      let cantidadASumar = resta.nextSibling;
      cantidadASumar.innerText = contador;
      productoCarrito.cantidadPedida = contador;

      // Modificar el array

      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
      productosCarrito.push(productoCarrito); 
   

      // Calculo la cantidad pedida
      let totalPedidos = 0;
      for (productoCarrito of productosCarrito) {
        totalPedidos += parseInt(productoCarrito.cantidadPedida);
      }

      // Busco el span del icono carrito
      let spanCarrito = document.querySelector(".badge");
      spanCarrito.innerText = totalPedidos;

      // Busco la card del index y le cambio cantidad
      let cantidadCard = document.querySelector(`#id${codigoProducto}`);
      cantidadCard.innerText = contador;

      // Calculo el total a pagar

      let calculoTotalAPagar = 0;
      for (let productoCarrito of productosCarrito) {
        calculoTotalAPagar += parseInt(productoCarrito.cantidadPedida) * parseInt(productoCarrito.precio);
      };

      // Busco contador precio

      let sumaDelTotal = document.querySelector(".sumaDelTotal");
      sumaDelTotal.innerText = `$${calculoTotalAPagar.toLocaleString()}`;

      });

    // Restar un producto al pedido SOLO si hay al menos un producto ordenado

    btnRestar.addEventListener("click", (e) => {

      contador --;
    
      let target = e.target;
      let contenedorResta = target.parentElement;
      let cantidadARestar = contenedorResta.nextSibling;
      let contenedorStock = contenedorResta.parentElement;  
      let contenedorBody = contenedorStock.parentElement;
      let contenedorPadreBody = contenedorBody.parentElement;
      let contenedorRow = contenedorPadreBody.parentElement;
      let contenedorCard = contenedorRow.parentElement;
      let codigoProducto = contenedorCard.dataset.codigo;  
      productoCarrito.cantidadPedida = contador;  

      if (contador >= 0) {
      cantidadARestar.innerText = contador;
      } else {
        contador = 0;
      }

      // Modificar el array

      if (contador <= 0) {
      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
      contenedorCard.remove();
      } else {
      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
      productosCarrito.push(productoCarrito);
      };

      // Calculo la cantidad pedida
      let totalPedidos = 0;
      for (productoCarrito of productosCarrito) {
        totalPedidos += parseInt(productoCarrito.cantidadPedida);
      }

      // Busco el span del icono carrito
      let spanCarrito = document.querySelector(".badge");
      spanCarrito.innerText = totalPedidos;

      // Busco la card del index y le cambio cantidad
      let cantidadCard = document.querySelector(`#id${codigoProducto}`);
      cantidadCard.innerText = contador;

      // Calculo el total a pagar

      let calculoTotalAPagar = 0;
      for (let productoCarrito of productosCarrito) {
        calculoTotalAPagar += parseInt(productoCarrito.cantidadPedida) * parseInt(productoCarrito.precio);
      };

      // Busco contador precio

      let sumaDelTotal = document.querySelector(".sumaDelTotal");
      sumaDelTotal.innerText = `$${calculoTotalAPagar.toLocaleString()}`;
      
    
      });

    //Boton eliminar producto del carrito

    btnEliminar.addEventListener("click", (e) => {

      let target = e.target;
      let contenedorBody = target.parentElement;
      let contenedorPadreBody = contenedorBody.parentElement;
      let contenedorRow = contenedorPadreBody.parentElement;
      let contenedorCard = contenedorRow.parentElement;
      let codigoProducto = contenedorCard.dataset.codigo;
      
      // Lo dejo de mostrar en HTML
      contenedorCard.remove();

      // Lo borro del array 

      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);

      // Calculo la cantidad pedida
      let totalPedidos = 0;
      for (productoCarrito of productosCarrito) {
        totalPedidos += parseInt(productoCarrito.cantidadPedida);
      }

      // Busco el span del icono carrito
      let spanCarrito = document.querySelector(".badge");
      spanCarrito.innerText = totalPedidos;

      // Calculo el total a pagar

      let calculoTotalAPagar = 0;
      for (let productoCarrito of productosCarrito) {
        calculoTotalAPagar += parseInt(productoCarrito.cantidadPedida) * parseInt(productoCarrito.precio);
      };

      // Busco contador precio

      let sumaDelTotal = document.querySelector(".sumaDelTotal");
      sumaDelTotal.innerText = `$${calculoTotalAPagar.toLocaleString()}`;

    });


});

    // Calculo el total a pagar

    let calculoTotalAPagar = 0;
    for (let productoCarrito of productosCarrito) {
      calculoTotalAPagar += parseInt(productoCarrito.cantidadPedida) * parseInt(productoCarrito.precio);
    };

    // Creo el total del pedido $$

    let totalAPagar = document.createElement("p");
    totalAPagar.setAttribute("class", "text-start col-6 px-4");
    totalAPagar.innerText = "Total a pagar";

    let sumaDelTotal = document.createElement("p");
    sumaDelTotal.setAttribute("class", "sumaDelTotal text-end col-6 px-4");
    sumaDelTotal.innerText = `$${calculoTotalAPagar.toLocaleString()}`;

        
    // Imprimo el precio

    contenedorPrecio.append(totalAPagar, sumaDelTotal);

});      

/**********************************************************************************************************/


// FILTROS


const vestidos = productos.filter ((producto) => producto.categoria == "vestidos");
const abrigos = productos.filter ((producto) => producto.categoria == "abrigos");
const remeras = productos.filter ((producto) => producto.categoria == "remeras");
const todos = productos;
let btnvestidos = document.querySelector(".btnVestidos");
let btnremeras = document.querySelector(".btnRemeras"); 
let btnabrigos = document.querySelector(".btnAbrigos");
let btntodos = document.querySelector(".btnTodos") 


// Funcion filtra por categorias, prepara cards para imprimir

function filtros (categorias) {

  categorias.forEach((categoria) => {

    // Creo la card para cada producto
    
    let contenedorCard = document.createElement("div");
    contenedorCard.setAttribute("class", "col-12 col-md-6 col-lg-3 p-1");

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("data-codigo", categoria.codigo);

    let img = document.createElement("img");
    img.setAttribute("src", categoria.img);
    img.setAttribute("class", "card-img-top rounded");
    img.setAttribute("alt", categoria.alt);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let tituloCard = document.createElement("h3");
    tituloCard.setAttribute("class", "card-title");
    tituloCard.innerText = categoria.nombre;

    let parrafoCard = document.createElement("p");
    parrafoCard.setAttribute("class", "card-text");
    parrafoCard.innerText = categoria.descripcion;

    let precioCard = document.createElement("p");
    precioCard.setAttribute("class", "card-text fw-bolder fs-5");
    precioCard.setAttribute("data-precio", categoria.precio);
    precioCard.innerText = `$${categoria.precio.toLocaleString()}`;

 
    let contenedorStock = document.createElement("div");
    contenedorStock.setAttribute("class", "row d-flex");

    let contenedorRestar = document.createElement("div");
    contenedorRestar.setAttribute("class", "col-5");

    let btnRestar = document.createElement("button");
    btnRestar.setAttribute("class", "restar btn btn-primary btn-productos ms-5");
    btnRestar.innerText = "-";

    let stock = document.createElement("p");
    stock.setAttribute("class", "stock col-2");
    stock.setAttribute("id", `id${categoria.codigo}`);
    stock.innerText = "0";

    let contenedorSumar = document.createElement("div");
    contenedorSumar.setAttribute("class", "col-5");

    let btnSumar = document.createElement("button");
    btnSumar.setAttribute("class", "sumar btn btn-primary btn-productos me-5");
    btnSumar.innerText = "+";


    let btnCarrito = document.createElement("button");
    btnCarrito.setAttribute("class", "btn btn-primary btn-acento mt-2");
    btnCarrito.innerText = "Agregar al carrito";

    contenedorSumar.append(btnSumar);
    contenedorRestar.append(btnRestar);
    contenedorStock.append(contenedorRestar, stock, contenedorSumar);
    cardBody.append(tituloCard, parrafoCard, precioCard, contenedorStock, btnCarrito);
    card.append(img, cardBody);
    contenedorCard.append(card); 
    
    // Imprimo las cards
    
    divProductos.append(contenedorCard);

    let contador = 0;

    // Sumar un producto al pedido

    btnSumar.addEventListener("click", (e) => {

      contador ++;

      let target = e.target;
      let contenedorSuma = target.parentElement;
      let contenedorStock = contenedorSuma.parentElement;      
      let resta = contenedorStock.firstChild;
      let cantidadASumar = resta.nextSibling;
      cantidadASumar.innerText = contador;

    });

    // Restar un producto al pedido SOLO si hay al menos un producto ordenado

    btnRestar.addEventListener("click", (e) => {

      contador --;
    
      let target = e.target;
      let contenedorResta = target.parentElement;
      let cantidadARestar = contenedorResta.nextSibling;

      if (contador >= 0) {
      cantidadARestar.innerText = contador;
      } else {
        contador = 0;
      }
    
      });


    // Botón "agregar al carrito" - evento

    let contadorAgregarCarrito = 0;

    btnCarrito.addEventListener("click", (e) => {

    contadorAgregarCarrito ++;

    // Objeto producto para pushear al array del carrito
    let productoCarrito = {};
    
    //Llamo a los elementos HTML

    let target = e.target;
    let producto = target.parentElement;
    let contenedorCard = producto.parentElement;
    let img = contenedorCard.firstChild;
    let imgSrc = img.src;
    let imgAlt = img.alt;
    let codigoProducto = contenedorCard.dataset.codigo;
    let nombreProducto = producto.firstChild;
    let descripcionProducto = nombreProducto.nextElementSibling;
    let contenedorPrecioProducto = descripcionProducto.nextElementSibling;
    let precioProducto = parseInt(contenedorPrecioProducto.dataset.precio);
    let contenedorStock = contenedorPrecioProducto.nextElementSibling;
    let contenedorResta = contenedorStock.firstChild;
    let contenedorCantidadPedida = contenedorResta.nextElementSibling;
    let cantidadPedida = contenedorCantidadPedida.innerText;
    productoCarrito.nombre = nombreProducto.innerText;
    productoCarrito.precio = precioProducto;
    productoCarrito.codigo = codigoProducto;
    productoCarrito.cantidadPedida = cantidadPedida;
    productoCarrito.src = imgSrc;
    productoCarrito.alt = imgAlt;

    // Pusheo al array solamente en el primer click. Luego voy a evaluar si el producto ya existe antes de pushear. Si existe, lo elimino y pusheo con la nueva cantidad pedida


    if (contadorAgregarCarrito == 1) {
      productosCarrito.push(productoCarrito);  
    } else {
      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
      productosCarrito.push(productoCarrito);
    }

    // Calculo la cantidad pedida
    let totalPedidos = 0;
    for (productoCarrito of productosCarrito) {
      totalPedidos += parseInt(productoCarrito.cantidadPedida);
    }

    // Busco el span del icono carrito
    let spanCarrito = document.querySelector(".badge");
    spanCarrito.innerText = totalPedidos;


  });

});
};

// Recorro array filtrados e imprimo

btnvestidos.addEventListener("click", () => {
  divProductos.innerText = "";
  filtros (vestidos);
});

btnremeras.addEventListener("click", () => {
  divProductos.innerText = "";
  filtros (remeras);
});

btnabrigos.addEventListener("click", () => {
  divProductos.innerText = "";
  filtros (abrigos);
});

btntodos.addEventListener("click", () => {
  divProductos.innerText = "";
  filtros (todos);
});

/**********************************************************************************************************/













/* CARD CARRITO

                <div class="card mb-3" style="max-width: 540px;">
                  
                    <div class="row g-0">

                    <div class="col-md-8">
                      <div class="card-body body-carrito">
                        <h5 class="card-title">Chaqueta Chocolate</h5>
                        <p class="card-text fw-bolder"> $18.000 </p>

                      <div class="row d-flex">
                        <div class="col-5">
                        <a href="" class="btn btn-primary btn-productos ms-5">-</a> 
                        </div>
                        <p class="col-2">1</p>
                        <div class="col-5">
                        <a href="" class="btn btn-primary btn-productos me-5">+</a>
                        </div>
                      </div>

                        <a href="" class="btn btn-primary btn-acento mt-2">Eliminar producto</a>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <img src="./imagenes/Productos/Abrigos/chaquetaMarron.jpg" class="img-fluid rounded-start" alt="...">
                    </div>

                  </div>

                </div>

                <div class="row fs-5 fw-bold">

                  <p class="col-6 text-start px-4"> Total a pagar </p>
                  <p class="col-6 text-end px-4"> $2000 </p>

                </div>

*/


/*
CARD HTML

<div class="col-12 col-md-6 col-lg-3 p-1">
              <div class="card">
                  <img src="./imagenes/Productos/Abrigos/chaquetaMarron.jpg" class="card-img-top rounded" alt="Mujer posa con una chaqueta marrón">
                  <div class="card-body">
                      <h3 class="card-title">Chaqueta chocolate</h3>
                      <p class="card-text">De corderoy, <span lang="en"> cruelty free </span>. Lista para acompañarte a todos lados.</p>
                      <p class="card-text fw-bolder fs-5"> $18.000 </p>
                      <div class="row d-flex">
                        <div class="col-5">
                        <a href="" class="btn btn-primary btn-productos ms-5">-</a> 
                        </div>
                        <p class="col-2">1</p>
                        <div class="col-5">
                        <a href="" class="btn btn-primary btn-productos me-5">+</a>
                        </div>
                      </div>
                      <a href="" class="btn btn-primary btn-acento mt-2">Agregar al carrito</a>
                  </div>
              </div>
          </div>

*/


