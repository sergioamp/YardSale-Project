let isInHome = true;
let isUserLoggedIn = false;

const logo = document.querySelector('.yardsale-logo');
const menu = document.querySelector('.menu');
const categories = document.querySelector('.menu--left');
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');
const userNameDesktop = document.querySelector('.username-desktop');
const userNameMobile = document.querySelector('.username-mobile');
const icons = document.querySelector('.icons');
const hamburguerIcon = document.querySelector('.hambuguer-icon');
const cartIcon = document.querySelector('.cart-icon');
const cartIconSvg = document.querySelector('.cart-icon__svg');
const loginSection = document.querySelector('.login-section');
const email = document.getElementById('email');
const password = document.getElementById('password');
const signupSection = document.querySelector('.signup-section');
const newName = document.getElementById('new-name');
const newEmail = document.getElementById('new-email');
const newPassword = document.getElementById('new-password1');
const confirmNewPassword = document.getElementById('new-password2');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCategories = document.querySelector('.mobile-menu__categories');
const mobileMenuUser = document.querySelector('.mobile-menu__user');
const mobileMenuLogin = document.querySelector('.mobile-menu__login');

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
});

function upperCase(word) {
  return word[0].toUpperCase() + word.substring(1);
}

function renderCategories(items) {
  items.forEach((item) => {
    const liItem1 = document.createElement('li');

    const aItem1 = document.createElement('a');
    aItem1.setAttribute('href', 'javascript:void(0)');
    aItem1.classList.add('margin--right', 'primary-text');
    aItem1.innerText = upperCase(item);

    categories.appendChild(liItem1);
    liItem1.appendChild(aItem1);

    const liItem2 = document.createElement('li');
    liItem2.classList.add('margin--top0_8', 'margin--left', 'margin--right');

    const aItem2 = document.createElement('a');
    aItem2.setAttribute('href', 'javascript:void(0)');
    aItem2.classList.add('primary-text');
    aItem2.innerText = upperCase(item);
    
    mobileMenuCategories.appendChild(liItem2);
    liItem2.appendChild(aItem2);
  });
}

const getCategories = async() => {
  try {
    const response = await api.get('/categories');
    renderCategories(response.data);
  } catch(error) {
    alert(error);
  }
}

function toggleMenu(state) {
  if(state == 'inactive') {
    menu.classList.add('inactive');
    menu.classList.remove('active');
  } else if(state == 'active'){
    menu.classList.remove('inactive');
    menu.classList.add('active');
  }
}

function toggleHamburguerIcon(state) {
  if(state == 'visible') {
    hamburguerIcon.classList.remove('invisible');
  } else if(state == 'invisible'){
    hamburguerIcon.classList.add('invisible');
  }
  
}

function toggleHamburguerIconSize(size) {
  if(size == 'medium') {
    hamburguerIcon.classList.remove('icon--large');
    hamburguerIcon.classList.add('icon--medium');
  } else if(size == 'large'){
    hamburguerIcon.classList.add('icon--large');
    hamburguerIcon.classList.remove('icon--medium');
  }
  
}

function toggleIcons(device) {
  if(device == 'mobile') {
    icons.classList.add('icons--mobile');
    icons.classList.remove('icons--desktop');
  } else if(device == 'desktop'){
    icons.classList.add('icons--desktop');
    icons.classList.remove('icons--mobile');
  }
}

function toggleLogoSize(size) {
  if(size == 'medium') {
    logo.classList.remove('logo--large');
  } else if(size == 'large'){
    logo.classList.add('logo--large');
  }
}

function toggleCartIconSize(size) {
  if(size == 'medium') {
    cartIcon.classList.remove('icon--large');
    cartIcon.classList.add('icon--medium');
    cartIconSvg.classList.remove('icon__svg--large');
  } else if(size == 'large'){
    cartIcon.classList.remove('icon--medium');
    cartIcon.classList.add('icon--large');
    cartIconSvg.classList.add('icon__svg--large');
  }
}

function mediumAndLargeScreens() {
  toggleLogoSize('medium');
  toggleIcons('desktop');
  toggleHamburguerIconSize('medium');
  toggleCartIconSize('medium');
}

function toggleMobileMenuSize(size) {
  if(size == 'small') {
    mobileMenu.classList.add('mobile-menu--small');
    mobileMenu.classList.remove('mobile-menu--medium');
  } else if(size == 'medium'){
    mobileMenu.classList.add('mobile-menu--medium');
    mobileMenu.classList.remove('mobile-menu--small');
  }
}

function openLoginSection() {
  isInHome = false;
  toggleMenu('inactive');
  closeSignupSection();
  toggleHamburguerIcon('invisible');
  cartIcon.classList.add('invisible');
  loginSection.classList.remove('inactive');
}

function closeLoginSection() {
  cartIcon.classList.remove('invisible');
  email.value = '';
  password.value = '';
  loginSection.classList.add('inactive');
}

function openSignupSection() {
  isInHome = false;
  toggleMenu('inactive');
  closeLoginSection();
  toggleHamburguerIcon('invisible');
  cartIcon.classList.add('invisible');
  signupSection.classList.remove('inactive');
}

function closeSignupSection() {
  cartIcon.classList.remove('invisible');
  newName.value = '';
  newEmail.value = '';
  newPassword.value = '';
  confirmNewPassword.value = '';
  signupSection.classList.add('inactive');
}

function userLoggingIn() {
  window.location.href="./index.html?email="+email.value;
  goToHome();
}

function userLoggedIn() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userEmail = urlParams.get("email");
  if(userEmail !== null) {
    userNameDesktop.classList.remove('inactive');
    mobileMenuUser.classList.remove('inactive');
    loginLink.classList.add('inactive');
    signupLink.classList.add('inactive');
    mobileMenuLogin.classList.add('inactive');
    userNameDesktop.text = userEmail;
    userNameMobile.text = userEmail;
    isUserLoggedIn = true;
    } else {
      userNameDesktop.classList.add('inactive');
      mobileMenuUser.classList.add('inactive');
      loginLink.classList.remove('inactive');
      signupLink.classList.remove('inactive');
      mobileMenuLogin.classList.remove('inactive');
      isUserLoggedIn = false;
    }
}

function userLoggedOut() {
  isUserLoggedIn = false;
  window.location.href="./index.html";
}

function toggleDesktopMenu() {
  const isDesktopMenuOpen = !desktopMenu.classList.contains('close');
  if (isDesktopMenuOpen){
    desktopMenu.classList.add('close');
    desktopMenu.classList.remove('desktop-menu--open');
    desktopMenu.classList.add('desktop-menu--close');
  } else {
    desktopMenu.classList.remove('close');
    desktopMenu.classList.add('desktop-menu--open');
    desktopMenu.classList.remove('desktop-menu--close');
  }
}

function toggleMobileMenu() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('close');
  if (isMobileMenuOpen) {
    hamburguerIcon.classList.remove('hambuguer-icon--open');
    mobileMenu.classList.add('close');
    mobileMenu.classList.remove('mobile-menu--open');
    mobileMenu.classList.add('mobile-menu--close');
  } else {
    hamburguerIcon.classList.add('hambuguer-icon--open');
    mobileMenu.classList.remove('close');
    mobileMenu.classList.add('mobile-menu--open');
    mobileMenu.classList.remove('mobile-menu--close');
  }
}

function closeMenus() {
  mobileMenu.classList.remove('close');
  toggleMobileMenu();
  desktopMenu.classList.remove('close');
  toggleDesktopMenu();
}

function resizeHandler() {
  closeMenus();
  if(isInHome) {
    if (window.matchMedia("(max-width: 460px)").matches) {
      toggleLogoSize('large');
      toggleMenu('inactive');
      toggleIcons('mobile');
      toggleHamburguerIcon('visible');
      toggleHamburguerIconSize('large');
      toggleCartIconSize('large');
      toggleMobileMenuSize('small');
    } 
    else if (window.matchMedia("(max-width: 760px)").matches) {
      toggleMenu('inactive');
      mediumAndLargeScreens();
      toggleHamburguerIcon('visible');
      toggleMobileMenuSize('medium');
    }
    else {
      toggleMenu('active');
      mediumAndLargeScreens();
      toggleHamburguerIcon('invisible');
    }
  } 
}

function goToHome() {
  isInHome = true;
  resizeHandler();
  closeLoginSection();
  closeSignupSection();
  userLoggedIn();
  closeMenus();
}

function loadContent() {
  getCategories();
  resizeHandler();
  userLoggedIn();
}

window.addEventListener('DOMContentLoaded', loadContent(), false);

window.addEventListener('resize', resizeHandler);


