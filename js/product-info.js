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
            <strong>${car.description}</strong><br>
            <p>PRECIO EN ${car.currency}: <strong>${car.cost}</strong></p>
            <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="10000">
        <img src="${car.images[0]}" class="d-block w-50" alt="...">
      </div>
      <div class="carousel-item" data-interval="2000">
        <img src="${car.images[1]}" class="d-block w-50" alt="...">
      </div>
      <div class="carousel-item">
        <img src="${car.images[2]}" class="d-block w-50" alt="...">
      </div>
      <div class="carousel-item">
      <img src="${car.images[3]}" class="d-block w-50" alt="...">
    </div>
    <div class="carousel-item">
    <img src="${car.images[4]}" class="d-block w-50" alt="...">
  </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
        </div>
        <br>
    `;

    document.getElementById("productosInformacion").innerHTML = infocar;

    /*Trae los autos relacionados y los carga*/
    localStorage.setItem("carUno",JSON.stringify(car.relatedProducts));
    var relacion = localStorage.getItem("carUno");
    relacion = JSON.parse(relacion);
    
    var URLS = [
        "",
        "https://exequielgcu.github.io/api-alternativo/product-info-auto-chevrolet-onxi.json",
        "https://exequielgcu.github.io/api-alternativo/product-info-auto-fiat-way.json",
        "https://exequielgcu.github.io/api-alternativo/product-info-auto-susuki-celerio.json",
        "https://exequielgcu.github.io/api-alternativo/product-info-auto-Peugeot-208.json"
    ]

    for(let i = 0; i < relacion.length; i++){
        
        
        getJSONData(URLS[relacion[i]]).then(function (result) {
            if (result.status === "ok") {
                autoArrayRelacionado = result.data;

                infocarRelacion = `
                    <div class="relacionCar">
                        <h2 class="h2realcionCar">Auto Relacionado: ${relacion[i]} ${autoArrayRelacionado.name}</h2>
                        <img src="${autoArrayRelacionado.images[0]}" style="width:200px; margin:10px; border: 5px solid red;"></img>
                        <strong>${autoArrayRelacionado.description}</strong><br>
                    </div>
                `;
            
                document.getElementById("autosRelacionados").innerHTML += infocarRelacion;
                
            }
    
        })
    }
     /*Trae el auto realcionado*/ 
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



