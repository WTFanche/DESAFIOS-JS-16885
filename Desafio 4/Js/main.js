// DESAFIO 4 - Simulador interactivo

/*
Dado que el proyectofinal sera la tienda de
un emprendimiento, se realizara
la tienda del mismo para recibir un pedido y 
calcular el valor final del mismo.
*/

alert(`Bienvenido a la tienda de Somos Luna`);

let toallitaPrice = 200;
let protectorPrice = 170;
let copaPrice = 500;
let precioFinal = 0;

let productSelected = Number(prompt(`Elegi el producto que queres agregar a tu carrito:
    1 - Toallita = $${toallitaPrice}
    2 - Protector = $${protectorPrice}
    3 - Copa = $${copaPrice}
`));

let quantitySelected = Number(prompt(`¿Que cantidad queres agregar?`));


function multiplicar(price, quantity) {
    precioFinal = price * quantity
    return precioFinal;
}


switch (productSelected) {
    case 1:
        multiplicar(toallitaPrice, quantitySelected);
        alert(`El precio final de tu pedido es de $${precioFinal}`)
        break;
    case 2:
        multiplicar(protectorPrice, quantitySelected);
        alert(`El precio final de tu pedido es de $${precioFinal}`)
        break;
    case 3:
        multiplicar(copaPrice, quantitySelected);
        alert(`El precio final de tu pedido es de $${precioFinal}`)
        break;
    default:
        break;

}

alert(`Gracias por elegir Somos Luna`);