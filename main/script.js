import { peliculasTienda } from "../assets/data/data.js";

// declaracion de variable
let contenedorCard = document.querySelector(".contenedor-card");
const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const contenedor = document.getElementById('pruebaDelModal');


peliculasTienda.forEach((pelic) => {
    const { id, Pelicula, Imagen } = pelic;
    templateCard.querySelector('h5').textContent = Pelicula
    templateCard.querySelector('img').setAttribute('src', Imagen);
    templateCard.querySelector('button').setAttribute('id', id);
    const otraTarjeta = templateCard.cloneNode(true)
    fragment.appendChild(otraTarjeta)

});
items.appendChild(fragment)



items.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-primary')) {
        let idp = e.srcElement.id;
        peliculasTienda.forEach(item => {

            const { id, Pelicula, Descripcion, Imagen, Genero, Director, Año } = item;

            if (idp == id) {
                contenedor.innerHTML = ` <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${Pelicula}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <center>
                    <img src="${Imagen}" alt="">
                </center>
                <h3>${Genero}</h3>
                <h3>${Director}</h3>
                <h3>${Año}</h3>
                <p>${Descripcion}</p>
            </div>
                
                   `
            }
        })

    }
})