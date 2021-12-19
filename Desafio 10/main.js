// DESAFIO 10 

/*
SE TOMARAN DATOS DE LA API DE HARRY POTTRER PARA 
CREAR CARTAS DE CADA PERSONAJE, MEDIANTE EL EVENTO CLICK
*/

$("header").prepend(`<h1>Desafio 10 - AJAX EN TU PROYECTO</h1>`);

// API
const urlHP = "http://hp-api.herokuapp.com/api/characters"

$("main").prepend(`<button id="btn" type="button" class="btn btn-success">Crear carta de personaje de Harry Potter</button>`);

$.get(urlHP, (response, status) => {
    let contador = 0;
    if (status === "success") {
        $("#btn").click(() => {
            $(".cardCont").append(
            `<div class="card col-3 shadow-sm p-3 mb-5 bg-body rounded" style="width: 18rem;">
                <img id="img" src="${response[contador].image}" class="img-fluid card-img-top border border-dark" alt="img">
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Nombre: ${response[contador].name}</li>
                        <li class="list-group-item">Casa: ${response[contador].house}</li>
                        <li class="list-group-item">Actor: ${response[contador].actor}</li>
                    </ul>
                </div>
            </div>
            `);
            contador++;
        });
    }
})


