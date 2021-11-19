const productos = [
    {id: 1, nombre: "Toallita", precio: 300},
    {id: 2, nombre: "Protector", precio: 240},
    {id: 3, nombre: "Copa", precio: 650}
];

console.log(productos);
console.log(productos[0].nombre);
console.log(productos[2].precio);

const desafio = document.createElement("p");
desafio.textContent = "INTERACTUAR CON HTML";

const titulo = document.createElement("p");
titulo.textContent = "BIENVENIDO A LA TIENDA DE SOMOS LUNA";

const divDesa = document.querySelector("#desa");
divDesa.appendChild(desafio);

const divTit = document.querySelector("#tit");
divTit.appendChild(titulo);

const crearCartas = document.querySelector("#contenedor1");


for (let i = 0; i < productos.length; i++) {
    crearCartas.innerHTML += `
<div class="card col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 text-center">
    <div class="card-body">
        <h5 class="card-title">${productos[i].nombre}</h5>
        <p class="card-text">$${productos[i].precio}</p>
        <a href="#" class="btn btn-primary">Comprar</a>
    </div>
</div>
`
};