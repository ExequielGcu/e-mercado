var productArray = [];

function productArray(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let category = array[i];

        htmlContentToAppend += `
        <div>
            <div>
                <div>
                    <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                </div>
                <div>
                    <div>
                        <h4>`+ category.name +`</h4>
                        <p>`+ category.description +`</p>
                        <p>`+ category.cost +`</p>
                    </div>

                </div>
            </div>
        </div>
        `

        document.getElementById("contenedor").innerHTML = htmlContentToAppend;
    }
}




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(productoObj){
        if (productoObj.status === "ok")
        {
            productosArray = resultObj.data;
            //Muestro las categorías ordenadas
            productArray(productosArray);
        }
    });
});