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



const svgAbrirCarrito = document.getElementById('abrir_carrito');
const modalCarrito = document.getElementById('modal_carrito');
const cerrarModalCarrito = document.querySelector('.cerrar_modal');
const contenidoCarrito = document.getElementById('contenido_carrito');
const botonesAgregarCarrito = document.querySelectorAll('#agregar_adidas, .main__boton[aria-label^="Agregar"]');
const notificacionCarrito = document.getElementById('notificacion_carrito');
const totalElement = document.getElementById('total');

let contadorProductos = 0;
let total = 0;

botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', function() {
        const producto = boton.closest('.main__contenedor__hombres, .main__contenedor__hombres__2, .main__productos');
        const imagenSrc = producto.querySelector('img').src;
        const nombreProducto = producto.querySelector('h2').textContent;
        const precioProducto = parseFloat(producto.querySelector('h3').textContent.replace('$', ''));

        const productoHTML = `
            <div class="producto_carrito">
                <img src="${imagenSrc}" alt="${nombreProducto}">
                <h2>${nombreProducto}</h2>
                <h3>$${precioProducto.toFixed(2)}</h3>
            </div>
        `;

        contenidoCarrito.innerHTML += productoHTML;

        // Actualizar contador y notificación
        contadorProductos++;
        notificacionCarrito.textContent = contadorProductos;
        notificacionCarrito.style.display = 'inline';

        // Actualizar total
        total += precioProducto;
        totalElement.textContent = total.toFixed(2);
    });
});

svgAbrirCarrito.addEventListener('click', function() {
    modalCarrito.style.display = 'block';
});

if (cerrarModalCarrito) {
    cerrarModalCarrito.addEventListener('click', function() {
        modalCarrito.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    if (event.target == modalCarrito) {
        modalCarrito.style.display = 'none';
    }
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


