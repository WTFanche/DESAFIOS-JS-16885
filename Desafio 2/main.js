alert("Desafio 2 - Crear un algoritmo con un condicional");

let fechaNacimiento = prompt(`¡Bienvenido!
Ingresá tu año de nacimiento para saber a qué generación pertenecés.`);

if ((fechaNacimiento < 1965) && (fechaNacimiento !== 1)){
    alert("Pertenecés a la generación Baby Boomers.");
    console.log("Pertenecés a la generación Baby Boomers.");
} 
else if ((fechaNacimiento > 1964) && (fechaNacimiento < 1980) && (fechaNacimiento !== 1))
{
    alert("Pertenecés a la generación X.");
    console.log("Pertenecés a la generación X.");
} 
else if ((fechaNacimiento > 1979) && (fechaNacimiento < 2000) && (fechaNacimiento !== 1))
{
    alert("Pertenecés a la generación Milennials.");
    console.log("Pertenecés a la generación Milennials.");
}
else if ((fechaNacimiento > 1999 ) && (fechaNacimiento !== 1))
{
    alert("Pertenecés a la generación Z.");
    console.log("Pertenecés a la generación Z.");
}
else
{
    alert("Dato ingresado erróneo.");
    console.log("Dato ingresado erróneo.");
};

alert("¡Gracias por tu visita!");
console.log("¡Gracias por tu visita!");