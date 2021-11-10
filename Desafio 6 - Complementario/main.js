// ORDENAR UN ARRAY DE OBJETOS

const array = [];


function Objeto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

array.push(new Objeto("Toallita", 300));
array.push(new Objeto("Protector", 240));
array.push(new Objeto("Copa", 650));
array.push(new Objeto("Pañal", 800));
array.push(new Objeto("Desmaquillante", 50));
array.push(new Objeto("Toallita humeda", 80));


array.sort((a, b) => {
    return a.precio - b.precio;
});

console.log(array);
