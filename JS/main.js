let isInHome = true;
let isUserLoggedIn = false;

const logo = document.querySelector('.yardsale-logo');
const navbarNav = document.querySelector('.navbar-nav');
const categories = document.querySelector('.navbar-nav--left');
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
const recoveryPasswordSection = document.querySelector('.recover-password-section');
const sendEmail = document.getElementById('send-email');
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
    aItem1.classList.add('margin--right', 'main-text');
    aItem1.innerText = upperCase(item);

    categories.appendChild(liItem1);
    liItem1.appendChild(aItem1);

    const liItem2 = document.createElement('li');
    liItem2.classList.add('margin--top0_8', 'margin--left', 'margin--right');

    const aItem2 = document.createElement('a');
    aItem2.setAttribute('href', 'javascript:void(0)');
    aItem2.classList.add('main-text');
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

function toggleNavbarNav(state) {
  if(state == 'inactive') {
    navbarNav.classList.add('inactive');
    navbarNav.classList.remove('active');
  } else if(state == 'active'){
    navbarNav.classList.remove('inactive');
    navbarNav.classList.add('active');
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
    cartIconSvg.classList.remove('icon-svg--large');
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
    hamburguerIcon.classList.remove('icon—pressed');
    mobileMenu.classList.add('close');
    mobileMenu.classList.remove('mobile-menu--open');
    mobileMenu.classList.add('mobile-menu--close');
  } else {
    hamburguerIcon.classList.add('icon—pressed');
    mobileMenu.classList.remove('close');
    mobileMenu.classList.add('mobile-menu--open');
    mobileMenu.classList.remove('mobile-menu--close');
  }
}

function closeMobileMenu() {
  mobileMenu.classList.remove('close');
  toggleMobileMenu();
}

function closeDesktopMenu() {
  desktopMenu.classList.remove('close');
  toggleDesktopMenu();
}

function openLoginSection() {
  isInHome = false;
  toggleNavbarNav('inactive');
  closeSignupSection();
  closeRecoveryPasswordSection()
  closeMobileMenu();
  closeDesktopMenu();
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
  toggleNavbarNav('inactive');
  closeLoginSection();
  closeRecoveryPasswordSection()
  closeMobileMenu();
  closeDesktopMenu();
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

function openRecoveryPasswordSection() {
  isInHome = false;
  toggleNavbarNav('inactive');
  closeLoginSection();
  closeSignupSection();
  closeMobileMenu();
  closeDesktopMenu();
  toggleHamburguerIcon('invisible');
  cartIcon.classList.add('invisible');
  recoveryPasswordSection.classList.remove('inactive');
}

function closeRecoveryPasswordSection() {
  cartIcon.classList.remove('invisible');
  sendEmail.value = '';
  recoveryPasswordSection.classList.add('inactive');
}

function resizeHandler() {
  closeMobileMenu();
  closeDesktopMenu();
  if(isInHome) {
    if (window.matchMedia("(max-width: 460px)").matches) {
      toggleLogoSize('large');
      toggleNavbarNav('inactive');
      toggleIcons('mobile');
      toggleHamburguerIcon('visible');
      toggleHamburguerIconSize('large');
      toggleCartIconSize('large');
      toggleMobileMenuSize('small');
    } 
    else if (window.matchMedia("(max-width: 760px)").matches) {
      toggleNavbarNav('inactive');
      mediumAndLargeScreens();
      toggleHamburguerIcon('visible');
      toggleMobileMenuSize('medium');
    }
    else {
      toggleNavbarNav('active');
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
  closeRecoveryPasswordSection()
  userLoggedIn();
}

function loadContent() {
  getCategories();
  resizeHandler();
  userLoggedIn();
}

window.addEventListener('DOMContentLoaded', loadContent(), false);

window.addEventListener('resize', resizeHandler);


