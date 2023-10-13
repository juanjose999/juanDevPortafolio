document.addEventListener('DOMContentLoaded', function () {
    let menuBtn = document.getElementById('menuBtn');
    let options = document.getElementById('options');

    menuBtn.addEventListener('click', function (event) {
        // Togglear la visibilidad del menú
        options.classList.toggle('show');

        // Si el menú está abierto, agregar la clase 'clicked'; si está cerrado, removerla
        menuBtn.classList.toggle('clicked', options.classList.contains('show'));

        // Posicionar las opciones 100px hacia la izquierda si están visibles
        if (options.classList.contains('show')) {
            let rect = menuBtn.getBoundingClientRect();
            options.style.left = rect.left - 100 + 'px';
        }

        // Detener la propagación del evento para evitar que el clic se propague al documento
        event.stopPropagation();
    });

    // Agregar un listener para cerrar las opciones cuando se hace clic fuera de ellas
    document.addEventListener('click', function () {
        options.classList.remove('show');
        menuBtn.classList.remove('clicked');
    });

    // Evitar que el clic en las opciones se cierre debido al listener del documento
    options.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
