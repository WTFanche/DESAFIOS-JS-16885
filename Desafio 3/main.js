// DESAFIO 3 - Crear un algoritmo utilizando un ciclo

/*
    Para la entrega de este desafio se utilizará un for
    para asignar el nombre de un jugador a cada 
    numero de camiseta de un equipo de futbol 11
*/



alert(`¡Buenas!

Vamos a asignarle el nombre a cada camiseta de tu equipo.

Empezamos por la N°1 y seguimos hasta llegar a la N°11

** Si querés alguna camiseta sin nombre, no ingreses nada. **`);

for (let index = 1; index <= 11; index++) {
    let nombreJugador = prompt(`Ingresá el nombre que debe tener la camiseta N° ${index}.`);
    console.log(`El nombre "${nombreJugador}" estará impreso en la camiseta N° ${index}`);
    alert(`El nombre "${nombreJugador}" estará impreso en la camiseta N° ${index}`);
} 

alert(`Perfecto, ya asignaste todas las camisetas.
Nos contactamos con vos en cuanto esten listas.
Gracias por elegirnos.
Saludos.`);
console.log(`Perfecto, ya asignaste todas las camisetas.
Nos contactamos con vos en cuanto esten listas.
Gracias por elegirnos.
Saludos.`);

/* 
Hola Miguel! 
Me hubiese gustado poder informar al usuario
que no ingreso nada en vez de que el alert sea 
`El nombre "" estará impreso en la camiseta N° 1`
Probe varias formas pero me quedaba siempre error y un codigo eterno.
Vos sabes como podria hacerlo?
*/





