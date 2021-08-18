var productosArray = [];


//Funcion que agarra un array y lo recorre es para los productos
function traerProductos(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let productos = array[i];

        htmlContentToAppend += `
        <div class="contenedor">
            <div class="carta">
                <img width="200px" src="` + productos.imgSrc + `" alt="` + productos.description + `" class="img-thumbnail">
            </div>
                <div class="descripcion">
                    <h1>`+ productos.name +`</h1>
                    <p class="fecha">`+ productos.description +`</p>
                </div>

                <div class="precio">

                <div class="box-precio">
                <br>
                <span>Precio:</span>
                <span class="precio1"><b>` + productos.cost +`</b></span>
                <span class="shoping"><i></i></span>
                </div>
                </div>
        </div>
        `

        document.getElementById("contenedor-productos").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){


    //Trae la informacion y la guarda en la variable productosArray
    //Luego llamo a la funcion traer productos y muestro los productos
    getJSONData(PRODUCTS_URL).then(function(productosObj){
        if (productosObj.status === "ok")
        {
            productosArray = productosObj.data;
            //Muestro los productos que tengo
            traerProductos(productosArray);
        }
    });
});