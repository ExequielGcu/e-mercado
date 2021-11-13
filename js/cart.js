//Funcion que agarra un array y lo recorre es para los productos
function traerProductosCarrito(array) {

    let productosCarrito = "";

    for (let i = 0; i < array.articles.length; i++) {
        let carro = array.articles[i];

        productosCarrito += `

        <div class="row">
      <div class="col-md-2">
       <img src="./${carro.src}" alt="" style="width: 100px;">
      </div>
      <div class="col-md-10">
        <h5>${carro.name}</h5>
        <span>Precio ${carro.currency}: <b>${carro.unitCost}</b></span>
       </div>
       <div class="col-md-2"></div>
       <div class="col-md-10">
        <label for="cantidad">Cantidad:</label>
        <input class="cart-campo-cantidad" type="number" name="cantidad" id="cantidad" min="1" value="1" max="16">
       </div>
       <div class="col-md-2"></div>
       <div class="col-md-10">
        <a href="#">Guardar para despues</a>
        <a href="#">Eliminar</a>
       </div>
    </div>
        `
            ;

        document.getElementById("traeProductosCarro").innerHTML += productosCarrito;
    }
}

function cambiarMetodo(){
    if( document.getElementById("pagouno").checked){
        document.getElementById("modo").innerHTML = "Tarjeta de Credito";
    }
    if( document.getElementById("pagodos").checked){
        document.getElementById("modo").innerHTML = "Transeferencia Bancaria";
    }
}



//va a traer el queramos comprar y lo guarda en una variable
//Por medio de una funcion trae los datos

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL).then(function (carritosObj) {
        if (carritosObj.status === "ok") {
            carritoproducto = carritosObj.data;
            //Muestro los productos que tengo
            traerProductosCarrito(carritoproducto);

            //Aca se elige el metodo de pago

            if (document.getElementById("pagouno").checked) {
                nCuenta = document.getElementById("numcuenta");
                nTarjeta = document.getElementById("numtarjeta");
                nCvc = document.getElementById("cvctarjeta");
                tarVenci = document.getElementById("ventarjeta");

                nCuenta.disabled = true;
                nTarjeta.disabled = false;
                nCvc.disabled = false;
                tarVenci.disabled = false;

            } if (document.getElementById("pagodos").checked) {
                nTarjeta = document.getElementById("numtarjeta");
                nCvc = document.getElementById("cvctarjeta");
                tarVenci = document.getElementById("ventarjeta");
                nCuenta = document.getElementById("numcuenta");
                nCuenta.disabled = false;
                nTarjeta.disabled = true;
                nCvc.disabled = true;
                tarVenci.disabled = true;
            } 
            //Aca se elige el metodo de pago
            

            //Aca se calcula los metodos de envio
                if (document.getElementById("uno").checked) {
                    let cantidad = document.getElementById("cantidad").value;

                    let pesosURU = cantidad * 100;

                    let dolaresUSD = pesosURU / 43.38;

                    let comisionEnvio = (pesosURU * 15) / 100;

                    let envio = pesosURU + comisionEnvio;

                    document.getElementById("pesos").innerHTML = pesosURU;

                    document.getElementById("dolares").innerHTML = dolaresUSD.toFixed(2);

                    document.getElementById("envio").innerHTML = envio;

                } if (document.getElementById("dos").checked) {
                    let cantidad = document.getElementById("cantidad").value;

                    let pesosURU = cantidad * 100;

                    let dolaresUSD = pesosURU / 43.38;

                    let comisionEnvio = (pesosURU * 7) / 100;

                    let envio = pesosURU + comisionEnvio;

                    document.getElementById("pesos").innerHTML = pesosURU;

                    document.getElementById("dolares").innerHTML = dolaresUSD.toFixed(2);

                    document.getElementById("envio").innerHTML = envio;

                } if (document.getElementById("tres").checked) {
                    let cantidad = document.getElementById("cantidad").value;

                    let pesosURU = cantidad * 100;

                    let dolaresUSD = pesosURU / 43.38;

                    let comisionEnvio = (pesosURU * 5) / 100;

                    let envio = pesosURU + comisionEnvio;

                    document.getElementById("pesos").innerHTML = pesosURU;

                    document.getElementById("dolares").innerHTML = dolaresUSD.toFixed(2);

                    document.getElementById("envio").innerHTML = envio;

                }

                //Aca se calcula los metodos de envio
            

            //Con un addEventListener por medio del clicj voy cambiando el valor final
            document.getElementById("cantidad").addEventListener("input", convertir);
            document.getElementById("respuesta").addEventListener("input", convertir);
            function convertir() {
                if (document.getElementById("uno").checked) {
                    let cantidad = document.getElementById("cantidad").value;

                    let pesosURU = cantidad * 100;

                    let dolaresUSD = pesosURU / 43.38;

                    let comisionEnvio = (pesosURU * 15) / 100;

                    let envio = pesosURU + comisionEnvio;

                    document.getElementById("pesos").innerHTML = pesosURU;

                    document.getElementById("dolares").innerHTML = dolaresUSD.toFixed(2);

                    document.getElementById("envio").innerHTML = envio;

                } if (document.getElementById("dos").checked) {
                    let cantidad = document.getElementById("cantidad").value;

                    let pesosURU = cantidad * 100;

                    let dolaresUSD = pesosURU / 43.38;

                    let comisionEnvio = (pesosURU * 7) / 100;

                    let envio = pesosURU + comisionEnvio;

                    document.getElementById("pesos").innerHTML = pesosURU;

                    document.getElementById("dolares").innerHTML = dolaresUSD.toFixed(2);

                    document.getElementById("envio").innerHTML = envio;

                } if (document.getElementById("tres").checked) {
                    let cantidad = document.getElementById("cantidad").value;

                    let pesosURU = cantidad * 100;

                    let dolaresUSD = pesosURU / 43.38;

                    let comisionEnvio = (pesosURU * 5) / 100;

                    let envio = pesosURU + comisionEnvio;

                    document.getElementById("pesos").innerHTML = pesosURU;

                    document.getElementById("dolares").innerHTML = dolaresUSD.toFixed(2);

                    document.getElementById("envio").innerHTML = envio;

                }
            }




            //Aca se elige el metodo de pago
            document.getElementById("pago").addEventListener("input", metodo);
            function metodo(){
                if (document.getElementById("pagouno").checked) {
                    nCuenta = document.getElementById("numcuenta");
                    nTarjeta = document.getElementById("numtarjeta");
                    nCvc = document.getElementById("cvctarjeta");
                    tarVenci = document.getElementById("ventarjeta");

                    nCuenta.disabled = true;
                    nTarjeta.disabled = false;
                    nCvc.disabled = false;
                    tarVenci.disabled = false;

                } if (document.getElementById("pagodos").checked) {
                    nTarjeta = document.getElementById("numtarjeta");
                    nCvc = document.getElementById("cvctarjeta");
                    tarVenci = document.getElementById("ventarjeta");
                    nCuenta = document.getElementById("numcuenta");
                    nCuenta.disabled = false;
                    nTarjeta.disabled = true;
                    nCvc.disabled = true;
                    tarVenci.disabled = true;
                } 
            }

        }
    });
});





