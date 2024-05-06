document.addEventListener('DOMContentLoaded', (event) =>{

    setTimeout(() => {
        document.querySelector('#load-iframe-map').innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11932.683870785106!2d2.2298837219270182!3d41.608814484244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c723968e47df%3A0xb12efe3f8664318b!2s08186%20Lli%C3%A7%C3%A0%20d&#39;Amunt%2C%20Barcelona!5e0!3m2!1ses-419!2ses!4v1714230712292!5m2!1ses-419!2ses" ></iframe>
    `
    }, 1500)
    
})