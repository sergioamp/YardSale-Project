const logo = document.querySelector('.yardsale-logo');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.icons');
const hamburguerIcon = document.querySelector('.hambuguer-icon');
const cartIcon = document.querySelector('.cart-icon');
const cartIconSvg = document.querySelector('.cart-icon__svg');

const categories = document.querySelector('.menu--left');

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
    const liItem = document.createElement('li');

    const aItem = document.createElement('a');
    aItem.setAttribute('href', 'javascript:void(0)');
    aItem.classList.add('category');
    aItem.innerText = upperCase(item);

    categories.appendChild(liItem);
    liItem.appendChild(aItem);
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


function menuInactive() {
  menu.classList.add('inactive');
  menu.classList.remove('active');
}

function mediumAndLargeScreens() {
  logo.classList.remove('logo--large');

  icons.classList.add('icons--desktop');
  icons.classList.remove('icons--mobile');

  hamburguerIcon.classList.remove('icon--large');
  hamburguerIcon.classList.add('icon--medium');
  cartIcon.classList.remove('icon--large');
  cartIcon.classList.add('icon--medium');
  cartIconSvg.classList.remove('icon__svg--large');
}

function hamburguerIconVisible() {
  hamburguerIcon.classList.remove('invisible');
}

function resizeHandler() {
 
  if (window.matchMedia("(max-width: 460px)").matches) {
    logo.classList.add('logo--large');

    menuInactive();

    icons.classList.add('icons--mobile');
    icons.classList.remove('icons--desktop');

    hamburguerIconVisible()

    hamburguerIcon.classList.remove('icon--medium');
    hamburguerIcon.classList.add('icon--large');
    cartIcon.classList.remove('icon--medium');
    cartIcon.classList.add('icon--large');
    cartIconSvg.classList.add('icon__svg--large');
  } 
  else if (window.matchMedia("(max-width: 760px)").matches) {
    menuInactive();
    mediumAndLargeScreens();
    hamburguerIconVisible()
  }
  else {
    mediumAndLargeScreens();

    menu.classList.remove('inactive');
    menu.classList.add('active');
     
    hamburguerIcon.classList.add('invisible');
  } 
}

function loadContent() {
  getCategories();
  resizeHandler();
}

window.addEventListener('DOMContentLoaded', loadContent(), false);

window.addEventListener('resize', resizeHandler);




