// SEGUNDA ENTREGA DE PROYECTO FINAL

const productos = [{
        id: 1,
        nombre: "Toallita",
        precio: 300
    },
    {
        id: 2,
        nombre: "Protector diario",
        precio: 240
    },
    {
        id: 3,
        nombre: "Copa menstrual",
        precio: 650
    }
];

/* CREAMOS CARDS Y FILTRAMOS CON LABEL */


const input = document.querySelector("#nombreP");
const btn = document.querySelector("#prueba")
const mostrar = document.querySelector(".main__cardConten")


function filtrarCards() {
    mostrar.innerHTML = "";
    const entrada = input.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(entrada) !== -1) {
            mostrar.innerHTML += `
                <article class="card col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 main__card main__cardsh hover1 main_cardPadd" style="width: 18rem;">
                    <div class="card-body text-center">
                        <p class="card-text text-capitalize main__ff3 fst-italic fw-bold">${producto.nombre}</p>
                        <p>$${producto.precio}</p>
                        <button type="button" class="btn btn-primary" id="btnCard${producto.id}">Añadir a mi pedido</button>
                    </div>
                </article>
             `
        }
    }
    if (mostrar.innerHTML === "") {
        mostrar.innerHTML += `<p>No tenemos el producto que estas buscando.</p>`
    }
};

input.addEventListener("keyup", filtrarCards);
filtrarCards();

/* Agregamos al cartito */

const btnAgregarTo = document.querySelector("#btnCard1")
const btnAgregarPr = document.querySelector("#btnCard2")
const btnAgregarCo = document.querySelector("#btnCard3")

btnAgregarTo.addEventListener("click", agregarCarritoTo)
btnAgregarPr.addEventListener("click", agregarCarritoPr)
btnAgregarCo.addEventListener("click", agregarCarritoCo)

const toJSON = JSON.stringify(productos[0])

function agregarCarritoTo() {
    localStorage.setItem("CarritoTo", toJSON)
}
const prJSON = JSON.stringify(productos[1])

function agregarCarritoPr() {
    localStorage.setItem("CarritoPr", prJSON)
}
const coJSON = JSON.stringify(productos[2])

function agregarCarritoCo() {
    localStorage.setItem("CarritoCo", coJSON)
}

const toGet = localStorage.getItem("CarritoTo")
const prGet = localStorage.getItem("CarritoPr")
const coGet = localStorage.getItem("CarritoCo")

const toLS = JSON.parse(toGet);
const prLS = JSON.parse(prGet);
const coLS = JSON.parse(coGet);

/* Vemos pedido en Modal */

const btnVer = document.querySelector("#verPedido")
btnVer.addEventListener("click", mostrarCarrito)

const modal = document.querySelector("#modalBody")


function mostrarCarrito() {
    modal.innerHTML = `
    <p>${toLS.nombre}                   $${toLS.precio}</p>

    <p>${prLS.nombre}                   $${prLS.precio}</p>

    <p>${coLS.nombre}                   $${coLS.precio}</p>
    
    <p>TOTAL                            $${toLS.precio + prLS.precio + coLS.precio}</p>
    `
};


/* Borramos pedido de Modal */

const borrar = document.querySelector("#borrarPedido")
borrar.addEventListener("click", borrarPedido)

function borrarPedido() {
    localStorage.clear();
};

