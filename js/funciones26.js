///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS I
 * Origin: Video26.html ==> Dibujando con HTML5
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemento;

//1.1 Extracción de elementos desde HTML
elemento = document.getElementById('lienzo');

//2. Definición de Funciones
function comenzar() {
    'use strict';
    lienzo = elemento.getContext('2d');
    lienzo.fillStyle = "#405CD2";
    lienzo.strokeStyle = "f8C30D";
    lienzo.globalAlpha = 0.3;
    lienzo.strokeRect(100,80,200,200);
    lienzo.fillRect(120,100,160,160);
    lienzo.clearRect(140,120,120,120);
}


function cargarDocumento () {
    comenzar();
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded', cargarDocumento, false);
