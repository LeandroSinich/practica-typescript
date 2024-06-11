import { home, variables, types, clases } from './informacion';
let subtitulo = document.getElementById('subtitulo');
let informacion = document.getElementById('info');
let navegacion = document.querySelectorAll('a');
const contenido = {
    'Home': home,
    'Variables': variables,
    'Types': types,
    'Clases': clases
};
navegacion.forEach((navegador) => {
    navegador.addEventListener('click', () => {
        navegacion.forEach((navegador) => {
            navegador.classList.remove('active');
        });
        navegador.classList.add('active');
        if (navegador.textContent != null) {
            let contenido = obtenerContenido(navegador.textContent);
            if (subtitulo != null) {
                subtitulo.innerText = contenido.subtitulo;
            }
            if (informacion != null) {
                informacion.innerText = contenido.info;
            }
        }
    });
});
function obtenerContenido(clave) {
    return contenido[clave];
}
