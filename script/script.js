function cargarProductos() {
  productos.push(
    new Producto(1, "Samsung Galaxy S10", 66800, "./Imgs/Samsung-S10.png")
  );
  productos.push(
    new Producto(2, "Samsung Galaxy S20", 120000, "./Imgs/Samsung-S20.png")
  );
  productos.push(
    new Producto(3, "Samsung Galaxy S21", 146200, "./Imgs/Samsung-S21.png")
  );
  productos.push(
    new Producto(
      4,
      "Samsung Galaxy S22 Ultra",
      198046,
      "./Imgs/Samsung-Galaxy-S22-Ultra.png"
    )
  );
  productos.push(new Producto(5, "Iphone 13", 190970, "./Imgs/iPhone-13.png"));
  productos.push(
    new Producto(6, "Iphone 13 Mini", 243923, "./Imgs/iphone-13-mini.png")
  );
  productos.push(
    new Producto(7, "Iphone 13 Pro", 268250, "./Imgs/iphone-13-Pro.png")
  );
  productos.push(
    new Producto(8, "Iphone 13 Pro Max", 295164, "./Imgs/iphone-13-pro-max.png")
  );
  productos.push(
    new Producto(9, "Huawei P30 Lite", 93606, "./Imgs/huawei-p30-lite.png")
  );
  productos.push(
    new Producto(10, "Huawei P40 Pro", 108606, "./Imgs/huawei-p40-pro.png")
  );
  productos.push(
    new Producto(
      11,
      "Huawei Mate 30 Pro",
      146024,
      "./Imgs/huawei-mate30-pro.png"
    )
  );
  productos.push(
    new Producto(12, "Huawei Mate 30", 102300, "./Imgs/huawei-mate-30.png")
  );
}

class Producto {
  constructor(id, nombre, precio, foto) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.foto = foto;
  }
}

class ElementoCarrito {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}

const productos = [];
const elementosCarrito = [];

const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarritoCompras = document.querySelector("#items");
const contenedorFooterCarrito = document.querySelector("#footer");

cargarProductos();
catalogoProductos();

function catalogoProductos() {
  contenedorProductos.innerHTML = "";

  productos.forEach((producto) => {
    let carta = crearCard(producto);
    contenedorProductos.append(carta);
  });
}

function crearCard(producto) {
  let botonAgregar = document.createElement("button");
  botonAgregar.className = "btn btn-dark";
  botonAgregar.innerText = "Agregar";

  let cuerpoCarta = document.createElement("div");
  cuerpoCarta.className = "card-body";
  cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio} $</p>
    `;
  cuerpoCarta.append(botonAgregar);

  let imagen = document.createElement("img");
  imagen.src = producto.foto;
  imagen.className = "card-img-top";
  imagen.alt = producto.nombre;

  let carta = document.createElement("div");
  carta.className = "card m-2 p-2";
  carta.style = "width: 18rem";
  carta.append(imagen);
  carta.append(cuerpoCarta);

  botonAgregar.onclick = (e) => {
    let elementoCarrito = new ElementoCarrito(producto, 1);
    elementosCarrito.push(elementoCarrito);

    dibujarCarrito();
  };

  return carta;
}

function dibujarCarrito() {
  contenedorCarritoCompras.innerHTML = "";

  let totalCarrito = 0;

  elementosCarrito.forEach((elemento) => {
    let renglonCarrito = document.createElement("tr");

    renglonCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${
                  elemento.producto.id
                }" type="number" value="${
      elemento.cantidad
    }" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td>${elemento.producto.precio}</td>
                <td>${elemento.producto.precio * elemento.cantidad}</td>
            `;
    totalCarrito += elemento.producto.precio * elemento.cantidad;
    contenedorCarritoCompras.append(renglonCarrito);

    let inputCantidad = document.getElementById(
      `cantidad-producto-${elemento.producto.id}`
    );

    inputCantidad.addEventListener("change", (e) => {
      let nuevaCantidad = e.target.value;
      elemento.cantidad = nuevaCantidad;
      dibujarCarrito();
    });
  });
}
