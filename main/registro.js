const formulario = document.getElementById('form');
const listar = document.getElementById('listar');
let datos = [];
formulario.addEventListener('submit', e => {
    e.preventDefault();
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let telefono = document.getElementById('inputTelefono').value;
    let direccion = document.getElementById('inputDireccion').value;
    let observaciones = document.getElementById('Observaciones').value;
    validarDatos(nombre, apellido, telefono, direccion, observaciones);
    agregarUsuario(nombre, apellido, telefono, direccion, observaciones);
    guardarDatos();
})

function validarDatos(nombre, apellido, telefono, direccion, observaciones) {
    //validar  nombre
    if (nombre == 0 || nombre == "" || /^\s+$/.test.nombre) {
        alert('Debes escribir tu  nombre');
        return false;
    }
    //validar apellidos
    else if (apellido == 0 || apellido == "" || /^\s+$/.test.apellido) {
        alert('Los apellidos estan vacio');
        return false;
    } //validar  Telefono 
    else if (telefono == 0 || telefono == "" || /^\s+$/.test.telefono) {
        alert('Ecribe un numero telefonico');
        return false;
    } else if (isNaN(telefono)) {
        alert('El telefono no es un numero');
        return false;
    } //validar direccion
    else if (direccion == 0 || direccion == "" || /^\s+$/.test.direccion) {
        alert('Escribe una direccion valida');
        return false;
        //validar Observaciones 
    } else if (observaciones == 0 || observaciones == "" || /^\s+$/.test.observaciones) {
        alert('Escribe tus observaciones ');
        return false;

    } else {
        alert('gracias por completar el formulario');

    }

}
const agregarUsuario = (nombre, apellido, telefono, direccion, observaciones) => {
        let = registro = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            direccion: direccion,
            observaciones: observaciones

        }
        datos.push(registro);
    }
    //Almacenamos y enviamos los datos al localstorage (setItem)
const guardarDatos = () => {
        localStorage.setItem('usuario', JSON.stringify(datos))
        listarDatos();
    }
    //convertimos de nuevo los datos para nosotros usarlos(getItem) 
const listarDatos = () => {
    listar.innerHTML = " ";
    datos = JSON.parse(localStorage.getItem("usuario"))
    datos.forEach(element => {
        const { nombre, apellido, telefono, direccion, observaciones } = element
        listar.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Nombre:${nombre}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Apellido:${apellido}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Telefono:${telefono}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Direccion;${direccion}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Observaciones:${observaciones}</h6>
        </div>
      </div>
 `
    })
}