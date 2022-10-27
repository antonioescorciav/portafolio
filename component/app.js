
const formulario = document.querySelector('.formulario__box');

document.addEventListener('DOMContentLoaded',()=> {
    validar()
});

const validar = () => {
    const inputs = document.querySelectorAll('.formulario__box [required]');

    //se recorre con un '.forEach' cada elemento del form
    inputs.forEach(input => {
        const p = document.createElement('p');

        //Cada id del párrafo equivaldrá al 'name' de cada input
        p.id = input.name;

        //el contenido del párrafo equivaldrá al content del title
        p.textContent = input.title;

        p.classList.add('error', 'none');

        //usando 'insertAdjacentElement' se agrega un elemento
        input.insertAdjacentElement('afterend', p);
    });

    //sigue cuando el usuario teclea sobre el formulario
    document.addEventListener('keyup', (e) => {

        if (e.target.contains = '.formulario__box [required]'){
            let input = e.target,

            /*se crea un operador de cortocircuito que valida
            si pattern tiene patrón, lo señala, si no, es undefined*/
            pattern = input.pattern || input.dataset.pattern; 
            

            if (pattern && input.value !== ''){
                let expReg = new RegExp(pattern);
                return !expReg.exec(input.value) 
                ? document.getElementById(input.name).classList.add('activo')
                : document.getElementById(input.name).classList.remove('activo');
            }

            if (!pattern){
                return input.value === ''
                ? document.getElementById(input.name).classList.add('activo')
                : document.getElementById(input.name).classList.remove('activo');
            }
        }
    }) 
   
    //interactuando con el botón de envío
    document.addEventListener('submit', () => {
       /*  e.preventDefault(); */
        const cargando = document.querySelector('.loader');
        const respuesta = document.querySelector('.respuesta');
        cargando.classList.remove('none');

        setTimeout(()=> {
            cargando.classList.add('none');
            respuesta.classList.remove('none');
            formulario.reset();
        }, 3000);
    })
}
 