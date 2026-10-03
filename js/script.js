/* ==========================================================================
   INTERACTIVIDAD DE PROYECTO INTEGRADOR WEB
   ========================================================================== */

// Espera a que todo el HTML esté cargado en el navegador antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ El archivo script.js se ha cargado correctamente.');
    
    // Ejecuta las funciones interactivas
    inicializarEfectosImagen();
});

/**
 * Añade interactividad y efectos dinámicos a la imagen del proyecto
 */
function inicializarEfectosImagen() {
    // Selecciona la imagen dentro de la etiqueta <section>
    const imagenProyecto = document.querySelector('section img');
    
    // Si la imagen existe en el HTML, aplica los eventos
    if (imagenProyecto) {
        
        // Estilos iniciales por JavaScript para asegurar una transición suave
        imagenProyecto.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        imagenProyecto.style.cursor = 'pointer';

        // Evento 1: Cuando el usuario pasa el mouse sobre la imagen
        imagenProyecto.addEventListener('mouseenter', () => {
            imagenProyecto.style.transform = 'scale(1.02)';
            imagenProyecto.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });

        // Evento 2: Cuando el usuario quita el mouse de la imagen
        imagenProyecto.addEventListener('mouseleave', () => {
            imagenProyecto.style.transform = 'scale(1)';
            imagenProyecto.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });

        // Evento 3: Al hacer clic
        imagenProyecto.addEventListener('click', () => {
        const contenedorMensaje = document.getElementById('mensaje-alerta');
        if (!contenedorMensaje) return;

        contenedorMensaje.textContent = '¡Estás viendo la vista previa de "Publicación y Despliegue"!';
        contenedorMensaje.hidden = false;
        contenedorMensaje.style.color = '#7a1b5c'; 
        contenedorMensaje.style.fontWeight = 'bold';
        contenedorMensaje.style.fontSize = '1.2rem';
        contenedorMensaje.style.marginTop = '20px';
        contenedorMensaje.style.textAlign = 'center';
        contenedorMensaje.style.animation = 'fadeIn 0.5s ease-in-out';
        });

    }
}
