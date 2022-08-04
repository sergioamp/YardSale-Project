let URLactual = window.location;
// alert(URLactual);

if(URLactual == 'http://127.0.0.1:5500/HTML/index.html') {
    const menuIcon = document.querySelector('.navbar__menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuIcon.addEventListener('click', toggleMobileMenu);

    function toggleMobileMenu(){
        mobileMenu.classList.toggle('inactive');
    }

}
if(URLactual == 'http://127.0.0.1:5500/HTML/login.html') {

}