// INCORPORAR ARRAYS

const productos = [];

function Producto (nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

productos.push(new Producto("Toallita", 300, 20));
productos.push(new Producto("Protector", 240, 15));
productos.push(new Producto("Copa", 650, 10));


console.log(productos);



alert(`¡Bienvenida a la tienda de Somos Luna!`);

let productSelected = Number(prompt(`Elegi el producto que queres comprar:
    1 - ${productos[0].nombre} = $${productos[0].precio}
    2 - ${productos[1].nombre} = $${productos[1].precio}
    3 - ${productos[2].nombre} = $${productos[2].precio}
`));

let quantitySelected = Number(prompt(`¿Que cantidad queres?`));


function multiplicar(price, quantity) {
    precioFinal = price * quantity
    return precioFinal;
}


switch (productSelected) {
    case 1:
        multiplicar(productos[0].precio, quantitySelected);
        alert(`El precio final de tu pedido es de $${precioFinal}`)
        break;
    case 2:
        multiplicar(productos[1].precio, quantitySelected);
        alert(`El precio final de tu pedido es de $${precioFinal}`)
        break;
    case 3:
        multiplicar(productos[2].precio, quantitySelected);
        alert(`El precio final de tu pedido es de $${precioFinal}`)
        break;
    default:
        break;

}

alert(`Gracias por elegir Somos Luna`);

