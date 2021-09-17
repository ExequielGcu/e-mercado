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

    infocar = `
        <div class="auto">
            <h2>${car.name}</h2>
            <img src="${car.images[0]}" style="width:150px;"></img>
            <img src="${car.images[1]}" style="width:150px;"></img>
            <img src="${car.images[2]}" style="width:150px;"></img>
            <img src="${car.images[3]}" style="width:150px;"></img>
            <img src="${car.images[4]}" style="width:150px;"></img><br>
            <strong>${car.description}</strong><br>
            <p>PRECIO EN ${car.currency}: <strong>${car.cost}</strong></p>
        </div>
        <br>
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
        if (comentarios.score == 1) {
            comentariosCar += `
            <div class=comentarios>
            <h2>${comentarios.user}</h2>
            <strong>${comentarios.description}</strong><br>  
            <article class=estrellas>         
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </article>
            <strong class="hora">Fecha: ${comentarios.dateTime}</strong>
            </div>
            `;
        } if (comentarios.score == 2) {
            comentariosCar += `
            <div class=comentarios>
            <h2>${comentarios.user}</h2>
            <strong>${comentarios.description}</strong><br>
            <article class=estrellas>  
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </article>
            <strong class="hora">Fecha: ${comentarios.dateTime}</strong>
            </div>
            `;
        } if (comentarios.score == 3) {
            comentariosCar += `
            <div class=comentarios>
            <h2>${comentarios.user}</h2>
            <strong>${comentarios.description}</strong><br>
            <article class=estrellas>  
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </article>
            <strong class="hora">Fecha: ${comentarios.dateTime}</strong>
            </div>
            `;
        } if (comentarios.score == 4) {
            comentariosCar += `
            <div class=comentarios>
            <h2>${comentarios.user}</h2>
            <strong>${comentarios.description}</strong><br>
            <article class=estrellas>  
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            </article>
            <strong class="hora">Fecha: ${comentarios.dateTime}</strong>
            </div>
            `;
        } if (comentarios.score == 5) {
            comentariosCar += `
            <div class=comentarios>
            <h2>${comentarios.user}</h2>
            <strong>${comentarios.description}</strong><br>
            <article class=estrellas>  
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            </article>
            <strong class="hora">Fecha: ${comentarios.dateTime}</strong>
            </div>
            `;
        }

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
    <div>
    <h2> `+ nombre +`</h2>
    <strong>`+ comentario +`</strong><br>
    <strong>Puntacion: `+ puntaje +`</strong><br>
    </div>
`;

}



