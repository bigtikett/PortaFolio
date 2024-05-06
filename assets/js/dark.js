document.addEventListener('DOMContentLoaded', () => {
    let switcher = document.querySelector('.switcher__btn');
    let light = document.querySelector('.menu__option-light--theme');
    let dark = document.querySelector('.menu__option-dark--theme');

    // Verifica si hay un tema guardado en el almacenamiento local
    let savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyDarkTheme();
    }

    switcher.addEventListener('click', () => {
        let head = document.head;

        if (dark.style.display === 'none') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    });

    function applyDarkTheme() {
        let head = document.head;

        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'assets/css/dark.css';
        link.id = 'theme-dark';

        let theme_dark = document.querySelector('#theme-dark');

        if (!theme_dark) {
            head.appendChild(link);
        }

        // Agregar una clase para iniciar la transición
        document.documentElement.classList.add('theme-transition');

        // Esperar un breve período de tiempo para que la transición comience
        setTimeout(() => {
            light.style.display = 'block';
            dark.style.display = 'none';

            // Eliminar la clase para detener la transición
            document.documentElement.classList.remove('theme-transition');
        }, 10); // Puedes ajustar este valor según sea necesario

        // Guarda el tema seleccionado en el almacenamiento local
        localStorage.setItem('theme', 'dark');
    }

    function applyLightTheme() {
        let theme_dark = document.querySelector('#theme-dark');

        if (theme_dark) {
            theme_dark.remove();
        }

        // Agregar una clase para iniciar la transición
        document.documentElement.classList.add('theme-transition');

        // Esperar un breve período de tiempo para que la transición comience
        setTimeout(() => {
            light.style.display = 'none';
            dark.style.display = 'block';

            // Eliminar la clase para detener la transición
            document.documentElement.classList.remove('theme-transition');
        }, 10); // Puedes ajustar este valor según sea necesario

        // Guarda el tema seleccionado en el almacenamiento local
        localStorage.setItem('theme', 'light');
    }
});
