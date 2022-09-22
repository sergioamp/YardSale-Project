
// let productList = [];
let productId = '';
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
let isUserLoggedIn = false;
const desktopMenu = document.querySelector('.desktop-menu');
const navbarRightGroup = document.querySelector('.navbar__right-group');
const myAccount = document.querySelector('.my-account');
const editMyAccount = document.querySelector('.edit-my-account');

const api = axios.create({
  baseURL: 'http://api.escuelajs.co/api/v1/products',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
});

function renderProducts(products) {
  console.log(products);
  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.setAttribute('id','product_'+product.id);

    const productImg = document.createElement('img');
    productImg.classList.add('product-info__img');
    productImg.setAttribute('src', product.images[0]);
    productImg.setAttribute('id', product.id);

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-info__price');
    productPrice.innerText = '$ ' + product.price;

    const productName = document.createElement('p');
    productName.classList.add('product-info__name');
    productName.innerText = product.title;

    const addToCartIcon = document.createElement('div');
    addToCartIcon.classList.add('add-to-cart');

    cardsContainer.appendChild(productCard);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productImg);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productName);
    productInfo.appendChild(addToCartIcon);
  });

  userLoggedIn();
}

const getAllProducts = async() => {
  try {
    const response = await api.get();
    renderProducts(response.data);
  } catch(error) {
    alert(error);
  }
}

function userLoggedIn() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userEmail = urlParams.get("email");
  if(userEmail !== null) {
    const emailLbl1 = document.querySelector('#emailText1');
    emailLbl1.text = userEmail;
    const emailLbl2 = document.querySelector('#emailText2');
    emailLbl2.text = userEmail;
    isUserLoggedIn = true;
    } else isUserLoggedIn = false;
    toggleLogin();
    return isUserLoggedIn;
}

function toggleLogin() {
  const login = document.querySelector('.login');
  const userEmail = document.querySelector('.user-email');
  const mobileMenuUser = document.querySelector('.mobile-menu__user');
  const mobileMenuLogin = document.querySelector('.mobile-menu__login');
  if (isUserLoggedIn) {
    login.classList.add('inactive');
    userEmail.classList.remove('inactive');
    mobileMenuUser.classList.remove('inactive');
    mobileMenuLogin.classList.add('inactive');
  } else {
  }
}

function closeOpenwindows() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('close');
  const isProductDetailOpen = !productDetail.classList.contains('close');
  const isMyAccountOpen = !myAccount.classList.contains('close');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('close');

  if (isMobileMenuOpen || isDesktopMenuOpen){
    mobileMenu.classList.add('close');
    desktopMenu.classList.add('close');
    menuIcon.classList.remove('open');
  }
  if (isProductDetailOpen || isMyAccountOpen){
    productDetail.classList.add('close');
    myAccount.classList.add('close');
  }
}

function renderProductDetail(product) {
  const productImg = document.querySelector('#product-detail__image');
  productImg.setAttribute('src', product.images[0]);

  const productPrice = document.querySelector('.product-detail__price');
  productPrice.innerText = '$ ' + product.price;

  const productName = document.querySelector('.product-detail__name');
  productName.innerText = product.title;

  const productDescription = document.querySelector('.product-detail__description');
  productDescription.innerText = product.description;

}

function openProductDetail(product) {
  closeOpenwindows();
  renderProductDetail(product);
  productDetail.classList.remove('close');
}

const getProduct = async(id) => {
  try {
    const response = await api.get(`/${id}`);
    console.log(response.data);
    openProductDetail(response.data);
  } catch(error) {
    alert(error);
  }
}

function closeProductDetail() {
  productDetail.classList.add('close');
}

function toggleMobileMenu() {
  const isMobileMenuClose = mobileMenu.classList.contains('close');
  if (isMobileMenuClose) {
    menuIcon.classList.add('open');
    mobileMenu.classList.remove('close');
  } else {
    closeOpenwindows();
    menuIcon.classList.remove('open');
    mobileMenu.classList.add('close');
  }
}

function toggleDesktopMenu() {
  const isDesktopMenuOpen = !desktopMenu.classList.contains('close');
  if (isDesktopMenuOpen){
    desktopMenu.classList.add('close');
  } else {
    closeOpenwindows();
    desktopMenu.classList.remove('close');
  }
}

function openMyAccount() {
  closeOpenwindows();
  menuIcon.classList.add('invisible');
  navbarRightGroup.classList.add('invisible');
  myAccount.classList.remove('close');
}

function openEditWindow() {
  myAccount.classList.add('close');
  editMyAccount.classList.remove('close');
}

function closeEditWindow() {
  myAccount.classList.remove('close');
  editMyAccount.classList.add('close');
}

function goToHome() {
  menuIcon.classList.remove('invisible');
  navbarRightGroup.classList.remove('invisible');
  closeOpenwindows();
}

function signOut() {
  isUserLoggedIn = false;
  window.location.href="./index.html";
}

function redirectIndex() {
  const email = document.querySelector('#email').value;
  window.location.href="./index.html?email="+email;
}

window.addEventListener('DOMContentLoaded', getAllProducts, false);

document.addEventListener('click', (e) => {
  console.log(e.target);
  if(e.target.matches('.product-info__img')) {
    productId = e.target.id;
    console.log(productId);
    getProduct(productId);
  }
  if(e.target.matches('.close-product')) {
    closeProductDetail();
  }
});
