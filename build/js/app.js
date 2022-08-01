// MENU HAMBURGUESA
const nav = document.querySelector('.barra-nav');
const btn = document.querySelector('.header-burger-btn');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

// Formulario
const formulario = document.querySelector('#form');
const email = document.querySelector('.form-control');
const enviar = document.querySelector('#form-submit');
const error = document.querySelector('.error-no');
const expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


document.addEventListener('DOMContentLoaded', () => {
    body.style.overflowX = "hidden";
    formulario.addEventListener('submit', validarFormulario);
});

btn.addEventListener('click', () => {
    const visible = nav.getAttribute('data-visible', true);

    console.log(visible);

    if(visible === 'false') {
        nav.setAttribute('data-visible', true);
        btn.setAttribute('aria-expanded', true);
        overlay.classList.add('overlay-active');
        body.style.overflow = 'hidden';
    } else {
        nav.setAttribute('data-visible', false);
        btn.setAttribute('aria-expanded', false);
        overlay.classList.remove('overlay-active');
        body.style.overflowY = 'auto';
    }
});


function validarFormulario(e) {
    if(expReg.test(email.value)) {
        email.classList.remove('form-campo-error');
        error.classList.remove('error-si');

    } else {
        e.preventDefault();
        email.classList.add('form-campo-error');
        error.classList.add('error-si')
    }   
}