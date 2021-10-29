//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

document.getElementById("guardarDatos").addEventListener('click', function (event) {

    //Trae la informacion del formulario....
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("surname").value;
    let cel = document.getElementById("celular").value;
    let edad = document.getElementById("age").value;
    let genero = document.getElementById("gener").value;
    let email = document.getElementById("email").value;

  /*  Probaba que guardaba todo bien
    alert(nombre);
    alert(apellido);
    alert(cel);
    alert(edad);
    alert(genero);
    alert(email); */

    //Guarda la informacion en localstorage....

    localStorage.setItem("infoUsuario",JSON.stringify({Nombre: nombre, Apellido: apellido, Celular: cel, Edad: edad,Genero: genero,Email: email}));


    //Guarda la informacion del local Storage y la pasa a una variable....
    var guardado = localStorage.getItem('infoUsuario');

    final = JSON.parse(guardado);
   //Guarda la informacion del local Storage y la pasa a una variable....

  
});


document.addEventListener("DOMContentLoaded", function(e){

    //Muestra la informacion que ya teniamos en el usuario...

    var guardado = localStorage.getItem('infoUsuario');

    final = JSON.parse(guardado);

    document.getElementById("nameFinal").innerHTML = "Nombre: " + final.Nombre;

    document.getElementById("surnameFinal").innerHTML = "Apellido: " + final.Apellido;

    document.getElementById("celularFinal").innerHTML = "Celular: " + final.Celular;
    
    document.getElementById("ageFinal").innerHTML = "Edad: " + final.Edad;

    document.getElementById("generFinal").innerHTML = "Genero: " + final.Genero;

    document.getElementById("emailFinal").innerHTML = "Email: " + final.Email;

});
