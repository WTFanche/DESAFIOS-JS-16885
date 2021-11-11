// INCORPORAR OBJETOS

function Producto (nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const toallita = new Producto("Toallita", 300, 20);
const protector = new Producto("Protector", 240, 15);
const copa = new Producto("Copa", 650, 10);

console.log(toallita);
console.log(protector);
console.log(copa);


alert(`¡Bienvenida a la tienda de Somos Luna!`);

let productSelected = Number(prompt(`Elegi el producto que queres agregar a tu carrito:
    1 - ${toallita.nombre} = $${toallita.precio}
    2 - ${protector.nombre} = $${protector.precio}
    3 - ${copa.nombre} = $${copa.precio}
`));

let quantitySelected = Number(prompt(`¿Que cantidad queres agregar?`));


function multiplicar(price, quantity) {
    precioFinal = price * quantity;
    return precioFinal;
}


switch (productSelected) {
    case 1:
        multiplicar(toallita.precio, quantitySelected);
        alert(`El precio final de tu pedido es de $${precioFinal}`)
        break;
    case 2:
        multiplicar(protector.precio, quantitySelected);
        alert(`El precio final de tu pedido es de $${precioFinal}`)
        break;
    case 3:
        multiplicar(copa.precio, quantitySelected);
        alert(`El precio final de tu pedido es de $${precioFinal}`)
        break;
    default:
        break;

}

alert(`Gracias por elegir Somos Luna`);

