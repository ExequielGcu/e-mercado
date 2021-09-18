const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://exequielgcu.github.io/api-alternativo/autos-nuevos.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const USUARIOS_URL = "https://exequielgcu.github.io/api-alternativo/usuarios.json";
//informacion de los autos
const AUTO_INFO_UNO = "https://exequielgcu.github.io/api-alternativo/product-info-auto-chevrolet-onxi.json";
const AUTO_INFO_DOS = "https://exequielgcu.github.io/api-alternativo/product-info-auto-fiat-way.json";
const AUTO_INFO_TRES = "https://exequielgcu.github.io/api-alternativo/product-info-auto-susuki-celerio.json";
const AUTO_INFO_CUATRO = "https://exequielgcu.github.io/api-alternativo/product-info-auto-Peugeot-208.json";
//informacion de los autos

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});

function cargarUsuario(){

  let nombre = localStorage.getItem("Usuario");

  document.getElementById("prueba").innerHTML = `
  <span>Usuario: </span>` + nombre;
  }

  cargarUsuario();