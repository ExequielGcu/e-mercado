var autoArray;
var autoComentarios;

//Encuentra el auto y trae el JSON determinado
function encuentraAuto() {
    let id = JSON.parse(localStorage.getItem("auto")).autoid;
    let URL;

    switch (id) {
        case 1:
            URL = AUTO_INFO_UNO;
            break;

        case 2:
            URL = AUTO_INFO_DOS;
            break;

        case 3:
            URL = AUTO_INFO_TRES;
            break;

        case 4:
            URL = AUTO_INFO_CUATRO;
            break;
        default: "";


    }
    return URL;
}


//Trae un auto en particular
function traerAuto(car) {
    var infocar = "";

    infocar += `
            <h2>${car.name}</h2>
            <strong>${car.description}</strong><br>
            ${car.cost}<br>
            ${car.currency}<br>
            ${car.category}<br>
    `;

    document.getElementById("productosInformacion").innerHTML = infocar;
}

//Llama la funcion encuentraAuto y trae el JSON correspondiente
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(encuentraAuto()).then(function (result) {
        if (result.status === "ok") {
            autoArray = result.data;
            traerAuto(autoArray);
        }

    })
});


//Funcion traer comentarios

function traerComentarios(arrayCar) {

    let comentariosCar = "";

    for (let i = 0; i < arrayCar.length; i++) {
        let comentarios = arrayCar[i];

        comentariosCar += `
        <h2>${comentarios.user}</h2>
        <strong>${comentarios.description}</strong><br>
        ${comentarios.score}<br>
        ${comentarios.dateTime}<br>
`;
    }

    document.getElementById("productosComentarios").innerHTML += comentariosCar;
}

//Trae los comentarios y los muestra con la funcion traerComentarios
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (result) {
        if (result.status === "ok") {
            autoComentarios = result.data;
            traerComentarios(autoComentarios);
        }

    })
});


//Funcion que guarda los datos del comentario.

function gaurdarComentario() {


    let txtUser = document.getElementById("txtUser").value;

    localStorage.setItem("NombreUsuario", txtUser);

    let txtScore = document.getElementById("txtScore").value;

    localStorage.setItem("Puntuacion", txtScore);

    let txtDescription = document.getElementById("txtDescription").value;

    localStorage.setItem("Descripcion", txtDescription);

    document.getElementById("txtUser").value = "";
    document.getElementById("txtScore").value = "";
    document.getElementById("txtDescription").value = "";

    //Aca traigo la informacion y la muestro.
    let nombre = localStorage.getItem("NombreUsuario");
    let puntaje = localStorage.getItem("Puntuacion");
    let comentario = localStorage.getItem("Descripcion");

    document.getElementById("productosComentarios").innerHTML += `
    <h2> `+ nombre +`</h2>
    <strong>`+ comentario +`</strong><br>
    `+ puntaje +`<br>
`;

}

    //Funcion trae comentario escrito por uno mismo

