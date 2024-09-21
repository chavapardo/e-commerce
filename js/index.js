document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('boton_registrarse').addEventListener('click', function() {
        document.getElementById('modal_registrarse').style.display = 'flex';
    });

document.querySelector('.cerrar_modal').addEventListener('click', function() {
        document.getElementById('modal_registrarse').style.display = 'none';
    });
    
   const botonIniciarSesion = document.getElementById('boton_iniciar_sesion');
   botonIniciarSesion.addEventListener('click', function() {
        const modalIniciarSesion = document.getElementById('modal_iniciar_sesion');
        if (modalIniciarSesion.style.display === 'flex') {
            modalIniciarSesion.style.display = 'none';
        } else {
            modalIniciarSesion.style.display = 'flex';
        }
   });

    const menuButton = document.getElementById('svg-menu');
    const headerMenu = document.getElementById('header-menu');

    menuButton.addEventListener('click', function() {
        headerMenu.classList.toggle('active');
    });
});

document.querySelectorAll('.cerrar_modal').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelectorAll('.modal_carrito').forEach(function(modal) {
            modal.style.display = 'none';
        });
    });
});


const publicidad = [
    { src: 'img/imagen-1-descuentos.jpeg', alt: 'Publicidad de descuentos de hasta un 25% de descuento en todas las marcas' },
    { src: 'img/imagen-1-publicitaria.jpeg', alt: 'Publicidad de mujer modelando sneakers exclusivos y originales' },
    { src: 'img/imagen-2-publicitaria.jpeg', alt: 'Publicidad de hombre modelando sneakers exclusivos y originales ' },
    { src: 'img/imagen-3-publicitaria.jpeg', alt: 'Publicidad de nuevos lanzamientos de sneakers' },
    { src: 'img/imagen-2-descuentos.jpeg', alt: 'Publicidad de meses sin intereses en la compra de unos sneakers' },
    { src: 'img/imagen-4-publicitaria.jpeg', alt: 'Mujer modelando los nuevos y exclusivos snekers ' },
    { src: 'img/imagen-5-publicitaria.jpeg', alt: 'Hombre modelando los nuevos y exclusivos snekers ' }
];

let imagenIndex = 0;

setInterval(() => {
    const publicidadImage = document.getElementById('main__publicidad');
    publicidadImage.style.opacity = '0';

    setTimeout(() => {
        imagenIndex = (imagenIndex + 1) % publicidad.length;
        publicidadImage.src = publicidad[imagenIndex].src;
        publicidadImage.alt = publicidad[imagenIndex].alt;
        publicidadImage.style.opacity = '1';
    }, 1000);
}, 3000);


const productos = [
    { src: 'img/imagen-2-sneakers.jpeg', alt: 'Sneakers exclusivos y originales modelo 2' },
    { src: 'img/imagen-1-sneakers.jpeg', alt: 'Sneakers exclusivos y originales modelo 1' }
];

let productoIndex = 0;

setInterval(() => {
    const productoImage = document.getElementById('main__producto');
    productoImage.style.opacity = '0';

    setTimeout(() => {
        productoIndex = (productoIndex + 1) % productos.length;
        productoImage.src = productos[productoIndex].src;
        productoImage.alt = productos[productoIndex].alt;
        productoImage.style.opacity = '1';
    }, 1000);
}, 3000);



