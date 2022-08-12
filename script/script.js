let titulo = document.getElementById("titulo");
titulo.style.textAlign = "center";
titulo.style.margin = "30px";
titulo.style.color = "white";
titulo.style.backgroundColor = "RoyalBlue";
titulo.style.padding = "30px";

let abajo = document.getElementById("abajo");
abajo.style.textAlign = "center";
abajo.style.color = "RoyalBlue";

let principal = document.getElementById("principal");
principal.style.margin = "30px";

/*let fin = document.getElementById("fin");
fin.style.margin = "30px";
fin.style.padding = "20px";*/

const carrito = [];

const productos = [
  {
    id: 1,
    nombre: "Samsung Galaxy S10",
    precio: 66800,
    foto: "./Imgs/Samsung-S10.png",
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S20",
    precio: 120000,
    foto: "./Imgs/Samsung-S20.png",
  },
  {
    id: 3,
    nombre: "Samsung Galaxy S21",
    precio: 146200,
    foto: "./Imgs/Samsung-S21.png",
  },
  {
    id: 4,
    nombre: "Samsung Galaxy S22 Ultra",
    precio: 198046,
    foto: "./Imgs/Samsung-Galaxy-S22-Ultra.png",
  },
  {
    id: 5,
    nombre: "Iphone 13 ",
    precio: 190970,
    foto: "./Imgs/iPhone-13.png",
  },
  {
    id: 6,
    nombre: "Iphone 13 Mini",
    precio: 243923,
    foto: "./Imgs/iphone-13-mini.png",
  },
  {
    id: 7,
    nombre: "Iphone 13 Pro",
    precio: 268250,
    foto: "./Imgs/iphone-13-Pro.png",
  },
  {
    id: 8,
    nombre: "Iphone 13 Pro Max",
    precio: 295164,
    foto: "./Imgs/iphone-13-pro-max.png",
  },
  {
    id: 9,
    nombre: "Huawei P30 Lite",
    precio: 93606,
    foto: "./Imgs/huawei-p30-lite.png",
  },
  {
    id: 10,
    nombre: "Huawei P40 Pro",
    precio: 108606,
    foto: "./Imgs/huawei-p40-pro.png",
  },
  {
    id: 11,
    nombre: "Huawei Mate 30 Pro",
    precio: 146024,
    foto: "./Imgs/huawei-mate30-pro.png",
  },
  {
    id: 12,
    nombre: "Huawei Mate 30",
    precio: 123024,
    foto: "./Imgs/huawei-mate-30.png",
  },
];

let cartas = document.getElementById("cartas");
for (const producto of productos) {
  let carta = document.createElement("div");
  carta.className = "card col-md-3";
  carta.innerHTML = `
        <img src="${producto.foto}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <button id="miBoton--${producto.nombre}" class="btn btn-primary">COMPRAR</button>
        </div>
    `;
  cartas.append(carta);

  let miBoton = document.getElementById(`miBoton--${producto.nombre}`);

  miBoton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("agregaste esta bebida al carrito");
    carrito.push(producto);
  });
}

let botonFinDeCompra = document.getElementById("fin");
let precioFinal = 0;
let checkOut = 0;
botonFinDeCompra.addEventListener("click", (e) => {
  e.preventDefault();
  precioFinal = carrito.map((carrito) => carrito.precio);
  checkOut = precioFinal.reduce((ac, el) => ac + el, 0);
  console.table(carrito);
  const filtro = carrito.filter((pro) => pro.celulares == true);
  console.log("Los siguientes son telefonos");
  console.log(filtro);

  console.log("El total a pagar es $" + checkOut);
});
