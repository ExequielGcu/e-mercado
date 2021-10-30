var productosArray = [];

var minPrice;
var maxPrice;

//Funcion que agarra el id del auto
function verAuto(id) {
    localStorage.setItem("auto", JSON.stringify({ autoid: id }));
    localStorage.setItem("comentariosAutos", JSON.stringify({ encuestaid: id }));
    window.location = 'product-info.html'
}

//Funcion que agarra un array y lo recorre es para los productos
function traerProductos(array) {

    let productCar = "";

    for (let i = 0; i < array.length; i++) {
        let productos = array[i];

        if (((minPrice == undefined) || (minPrice != undefined && parseInt(productos.cost) >= minPrice)) &&
            ((maxPrice == undefined) || (maxPrice != undefined && parseInt(productos.cost) <= maxPrice))) {

            productCar += `
        <div class="col-12 col-sm-5 col-md-3 m-2">
         <div class="" onclick="verAuto(`+ productos.id + `)">
            <div class="carta">
            <img width="200px" src="` + productos.imgSrc + `" alt="` + productos.description + `" class="img-thumbnail">
         </div>
            <div class="descripcion">
                <h1>`+ productos.name + `</h1>
                <p class="fecha">`+ productos.description + `</p>
            </div>

            <div class="precio">

            <div class="box-precio">
            <br>
            <br>
            <span>Precio:</span>
            <span class="precio1"><b>` + productos.cost + `</b></span>
            <span class="shoping"><i></i></span>
            </div>
            </div>
    </div>
    <br>
        <br>
        </div>
        <br>
        <br>
        <hr>
        `
        }

        document.getElementById("contenedor-productos").innerHTML = productCar;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {


    //Trae la informacion y la guarda en la variable productosArray
    //Luego llamo a la funcion traer productos y muestro los productos
    getJSONData(PRODUCTS_URL).then(function (productosObj) {
        if (productosObj.status === "ok") {
            productosArray = productosObj.data;
            //Muestro los productos que tengo
            traerProductos(productosArray);
        }
    });
});

document.getElementById("filtro").addEventListener("click", function () {

    minPrice = document.getElementById("min").value;
    maxPrice = document.getElementById("max").value;

    if ((minPrice != undefined) && (minPrice != "") && (parseInt(minPrice)) >= 0) {
        minPrice = parseInt(minPrice);
    } else {
        minPrice = undefined;
    }

    if ((maxPrice != undefined) && (maxPrice != "") && (parseInt(maxPrice)) >= 0) {
        maxPrice = parseInt(maxPrice);
    } else {
        maxPrice = undefined;
    }

    traerProductos(productosArray);
});

document.getElementById("eliminarFiltro").addEventListener("click", function () {
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";

    minPrice = undefined;

    maxPrice = undefined;

    traerProductos(productosArray);
});

/* Intentar hacer con el filter*/
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


//Funciones que ordean por orden ascendete desendente o relevancia

document.getElementById("precioDesendete").addEventListener("click", function () {
    productosArray.sort(function (prev, next) {
        if (prev.cost > next.cost) {
            return 1;
        }
        if (prev.cost < next.cost) {
            return -1;
        }
        return 0;
    });
    traerProductos(productosArray);
});

document.getElementById("precioAscendete").addEventListener("click", function () {
    productosArray.sort(function (prev, next) {
        if (prev.cost > next.cost) {
            return -1;
        }
        if (prev.cost < next.cost) {
            return 1;
        }
        return 0;
    });
    traerProductos(productosArray);
});

document.getElementById("relevancia").addEventListener("click", function () {
    productosArray.sort(function (prev, next) {
        if (prev.soldCount > next.soldCount) {
            return 1;
        }
        if (prev.soldCount < next.soldCount) {
            return -1;
        }
        return 0;
    });
    traerProductos(productosArray);
});

