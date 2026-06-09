//----------------------------------------------------

//archivo para manejar logica de la pagina index.html

//----------------------------------------------------

const formularioNombre = document.getElementById('formulario-nombre');
const inputNombre = document.getElementById('nombre')
const mensajeError = document.querySelector('.mensaje-error')

//Valida el nombre ingresado en el input.
function validarNombre(nombre){
    return nombre.trim().length > 2
}

//Se encarga de hacer visible la etiqueta <p></p> e inyecta el error obtenido.
function mostrarError(mensaje){
    mensajeError.textContent = mensaje;
    mensajeError.classList.add("mensaje-error-visible")
}

//Se encarga de limpiar el error.
function limpiarError(){
    mensajeError.textContent = "";
    mensajeError.classList.remove("mensaje-error-visible");
}


// Elimino comportamiento por defecto de submit.
// Si es un nombre INVALIDO, muestro un error.
// Si es VALIDO, redirijo a la seccion de productos.
formularioNombre.addEventListener("submit",e=>{
    e.preventDefault();

    const nombreCliente = inputNombre.value;

    if(!validarNombre(nombreCliente)){
        mostrarError('El nombre NO cumple con los requisitos')
        return;
    }

    localStorage.setItem('usuario', nombreCliente)

    window.location.href = './productos.html'
})