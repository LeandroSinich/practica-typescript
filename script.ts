import {home,variables,types,clases, Informacion } from './informacion'

let subtitulo = document.getElementById('subtitulo');
let informacion = document.getElementById('info');
let navegacion = document.querySelectorAll('a');

type ContenidoKeys = 'Home' | 'Variables' | 'Types' | 'Clases';

const contenido: Record<ContenidoKeys, Informacion> = {
    'Home': home,
    'Variables': variables,
    'Types': types,
    'Clases': clases
};

navegacion.forEach((navegador)=>{
    navegador.addEventListener('click', ()=>{
        navegacion.forEach((navegador)=>{
            navegador.classList.remove('active')
        })
        navegador.classList.add('active')
        if(navegador.textContent != null){

            let contenido = obtenerContenido(navegador.textContent as ContenidoKeys);
            if(subtitulo != null){

                subtitulo.innerText = contenido.subtitulo;
            }
            if(informacion != null){

                informacion.innerText = contenido.info;
            }
        }
    })
})

function obtenerContenido(clave: ContenidoKeys): Informacion {
    return contenido[clave];
}