const nombreInp = document.getElementById('nombre');
const emailInp = document.getElementById('email');
const totalInp = document.getElementById('total');
const form = document.querySelector('.formulario');

let nombre = '';
let email = '';
let total = '';

document.addEventListener('DOMContentLoaded', () => {
    nombreInp.addEventListener('input', e => {
        nombre = e.target.value;
    });

    emailInp.addEventListener('input', e => {
        email = e.target.value;
    });

    totalInp.addEventListener('input', e => {
        total = e.target.value;
    });

    form.addEventListener('submit', validateForm);
});


function validateForm( e ) {
    e.preventDefault();

    if( nombre === '' && email === '' && total === '') {
        alert('Ingrese todos los datos');
        return;
    }

    alert('Se ha suscrito a la actividad seleccionada');

    nombreInp.value = '';
    emailInp.value = '';
    totalInp.value = '';
}