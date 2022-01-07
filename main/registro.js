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
    agregarUsuario(nombre, apellido, telefono, direccion, observaciones);
    guardarDatos();
})
const agregarUsuario = (nom, apell, tel, direc, obs) => {
        let = registro = {
            nombre: nom,
            apellido: apell,
            telefono: tel,
            direccion: direc,
            observaciones: obs

        }
        datos.push(registro);

    }
    //Almacenamos y enviamos los datos al localstorage (setItem)

const guardarDatos = () => {
        localStorage.setItem("usuario", JSON.stringify(datos))
        listarDatos();

    }
    // //convertimos de nuevo los datos para nosotros usarlos (getItem)
const listarDatos = () => {
    listar.innerHTML = " ";
    datos = JSON.parse(localStorage.getItem("usuario"))
    datos.forEach(element => {
        const { nombre, apellido, telefono, direccion, observaciones } = element
        listar.innerHTML += ` <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${apellido}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${telefono}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${direccion}</h6>
          <h6 class="card-subtitle mb-2 text-muted">${observaciones}</h6>
        </div>
      </div>
         `
    })
}