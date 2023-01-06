const $hamburguerIcon = document.querySelector('.hambuguer-icon--js');
const $Menu = document.querySelector('.menu--js');
const $cartIcon = document.querySelector('.cart-icon--js');

function toggleMobileMenu() {
  const isMobileMenuOpen = !$Menu.classList.contains('menu--closed');
  if (isMobileMenuOpen) {
    $hamburguerIcon.classList.remove('icon—pressed');
    $Menu.classList.add('menu--closed');
    $Menu.classList.add('invisible');
    $cartIcon.classList.remove('invisible');
  } else {
    $hamburguerIcon.classList.add('icon—pressed');
    $Menu.classList.remove('menu--closed');
    $Menu.classList.remove('invisible');
    $cartIcon.classList.add('invisible');
    if (window.matchMedia("(max-width: 460px)").matches) {
      toggleScrollY('inactive');
    }
  }
}