var productosArray = [];


//Funcion que agarra un array y lo recorre es para los productos
function traerProductos(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let productos = array[i];

        htmlContentToAppend += `
        <div>
            <div>
                <div >
                    <img width="200px" src="` + productos.imgSrc + `" alt="` + productos.description + `" class="img-thumbnail">
                </div>
                <div>
                    <div>
                        <h4>`+ productos.name +`</h4>
                        <p>`+ productos.description +`</p>
                        <p>` + `PRECIO: ` + productos.cost +`</p>
                    </div>

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