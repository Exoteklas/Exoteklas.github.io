document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a, .footer-nav ul li a');
    const sections = document.querySelectorAll('.content-section');
    const mainImage = document.querySelector('.main-image');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
            mainImage.style.display = 'none'; // Ocultar la imagen principal al hacer clic en una categoría
        });
    });
});
