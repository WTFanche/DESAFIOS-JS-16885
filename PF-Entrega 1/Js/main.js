// PRIMER ENTREGA DE PROYECTO FINAL

/*
 */

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
};

function calcularPrecio(price, quantity) {
    let orden = price * quantity;
    return orden;
};

function pedirCantidad() {
    cantidadSeleccionada = Number(prompt(`¿Que cantidad queres?`));
    return cantidadSeleccionada;
};

const toallita = new Producto("Toallita", 300);
const protector = new Producto("Protector", 240);
const copa = new Producto("Copa", 650);

let cantidadSeleccionada;
let carrito = 0;
let precioOrden = 0;
let nuevaOrden;

console.log(toallita);
console.log(protector);
console.log(copa);



function agregarAlCarro(cantidad, precio) {
    precioOrden = cantidad * precio;
    carrito = carrito + precioOrden;
    return precioOrden;
};

alert(`¡Bienvenido a la tienda de Somos Luna!`);

do {
    let productSelected = Number(prompt(`Elegi el producto que queres agregar a tu carrito:
    1 - ${toallita.nombre} = $${toallita.precio}
    2 - ${protector.nombre} = $${protector.precio}
    3 - ${copa.nombre} = $${copa.precio}
`));
    console.log(productSelected);
    switch (productSelected) {
        case 1:
            pedirCantidad();
            console.log(cantidadSeleccionada);
            agregarAlCarro(cantidadSeleccionada, toallita.precio);
            console.log(precioOrden);
            alert(`El precio de tu orden es de $${precioOrden}`)

            break;
        case 2:
            pedirCantidad();
            console.log(cantidadSeleccionada);
            agregarAlCarro(cantidadSeleccionada, protector.precio);
            console.log(precioOrden);
            alert(`El precio de tu orden es de $${precioOrden}`)
            break;
        case 3:
            pedirCantidad();
            console.log(cantidadSeleccionada);
            agregarAlCarro(cantidadSeleccionada, copa.precio);
            console.log(precioOrden);
            alert(`El precio de tu orden es de $${precioOrden}`)
            break
        default:
            break;
    }
    nuevaOrden = prompt(`¿Queres realizar otro pedido? S / N `)

} while (nuevaOrden == "S");

alert(`Gracias por tu visita.`);








/* let stockElegido = Number(prompt(`¿Cuantas unidades queres?`));

console.log(stockElegido); */



/* if (productoElegido != 4) {
    switch (productoElegido) {
        case 1:
            calcularPrecio(productoElegido, stockElegido);
            carrito = carrito + resultado;
            console.log(carrito);
            alert(carrito);
            break;
        case 2:
            calcularPrecio(productoElegido, stockElegido);
            carrito = carrito + resultado;
            console.log(carrito);
            alert(carrito);
            break;
        case 3:
            calcularPrecio(productoElegido, stockElegido);
            carrito = carrito + resultado;
            console.log(carrito);
            alert(carrito);
            break;
        case 4:

            break;
        default:
            break;
    }
} else {
    
} */