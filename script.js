document.querySelectorAll('.menu-item').forEach(button => {
    button.addEventListener('click', () => {
        const submenu = button.nextElementSibling;
        const isOpen = submenu.style.display === 'block';

        // Cierra todos los submenús
        document.querySelectorAll('.submenu').forEach(s => s.style.display = 'none');

        // Alterna el actual
        submenu.style.display = isOpen ? 'none' : 'block';
    });
});
