document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            // Alterna la clase 'is-open' para mostrar/ocultar el menú
            mobileMenu.classList.toggle('is-open');
            
            // Alterna el atributo aria-expanded para accesibilidad
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Cierra el menú al hacer clic en un enlace
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});