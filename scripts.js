// smooth scrolling (completo https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link), revisar
// smooth scrolling (completo https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link), revisar

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
