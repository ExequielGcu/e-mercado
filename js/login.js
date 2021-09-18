//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});

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

function usuario(){


    let username = document.getElementById("username").value; 
    
    localStorage.setItem("Usuario", username);
    }