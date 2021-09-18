
//Aca empieza la abrida y cerrada de la ventana modal
const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

//Aca termina la abrida y cerrada de la ventana modal


/*Validaciones*/
var username = document.getElementById("username"); 
var contraseña = document.getElementById("password"); 
var error = document.getElementById("error_login"); 
error.style.color = 'red';

function enviarFormulario(){


    var mensajesError = []; 
        if((username.value === "Jap2021" && contraseña.value === "123456789") || (username.value === "ExequielxC" && contraseña.value === "SOFIA2015") ){
            window.location =  'principal.html'
        }if(username.value === null || username.value === "" || username.value !== "Jap2021" || username.value !== "ExequielxC"){
            mensajesError.push("Usuario invalido o campo vacio");
        }if(contraseña.value === null || contraseña.value === "" || contraseña.value !== "123456789" || contraseña.value !== "SOFIA2015"){
            mensajesError.push("Contraseña invalida o campo vacio");
        }
    
       error.innerHTML = mensajesError.join(', ');

       var usuarioFinal = document.getElementById("username").value; 
       localStorage.setItem("Usuario", usuarioFinal);
    return false;
    }


/*Fin de validaciones */