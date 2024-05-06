document.addEventListener("DOMContentLoaded", function() {
    const menuOptions = document.querySelectorAll(".portfolio__menu .portfolio__option");
    const projects = document.querySelectorAll(".portfolio__gallery .gallery__item");
    

    menuOptions.forEach(option => {
        option.addEventListener("click", function(event) {
            event.preventDefault();
            const filter = this.dataset.filter;

            menuOptions.forEach(option => {
                option.classList.remove("portfolio__option--active");
            });
            this.classList.add("portfolio__option--active");

            projects.forEach(project => {
                if (filter === "all" || project.classList.contains(filter)) {
                    project.classList.add("show");
                } else {
                    project.classList.remove("show");
                }
            });

            const redesSocialesWork = document.querySelector(".redes-sociales--work");
            if (filter === "redes-sociales") {
                redesSocialesWork.style.display = "block";
            } else {
                redesSocialesWork.style.display = "none";
            }
        });
    });

    // Agregar la clase "show" a todos los proyectos inicialmente
    projects.forEach(project => {
        project.classList.add("show");
    });    
    
});