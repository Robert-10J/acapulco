const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const form = document.querySelector('.formulario');

document.addEventListener('DOMContentLoaded', () => {

    nombre.addEventListener('input', validateName);

    email.addEventListener('input', e => {
        console.log(e.target.value);
    });

    total.addEventListener('input', e => {
        console.log(e.target.value);
    });

    form.addEventListener('submit', validateForm);
});

function validateName( e ) {

    if( e.target.value === '' ) {
        alert('Ingrese su nombre')
        return;
    }
}

function validateForm( e ) {
    e.preventDefault();
    alert('Usted se ha inscrito a la actividad seleccionada')
}