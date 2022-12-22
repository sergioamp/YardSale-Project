
let isInHome = true;
let isUserLoggedIn = false;
let itemsInShoppingCart = 0;

const $logo = document.querySelector('.logo--js');
const $navbarNav = document.querySelector('.navbar-nav--js');
const $categoriesDesktop = document.querySelector('.categories-desktop--js');
const $loginLink = document.querySelector('.login-link--js');
const $signupLink = document.querySelector('.signup-link--js');
const $userNameDesktop = document.querySelector('.username-desktop--js');
const $userNameMobile = document.querySelector('.username-mobile--js');
const $icons = document.querySelector('.icons--js');
const $hamburguerIcon = document.querySelector('.hambuguer-icon--js');
const $cartIcon = document.querySelector('.cart-icon--js');
const $cartIconSvg = document.querySelector('.cart-icon__svg--js');
const $loginSection = document.querySelector('.login-section--js');
const $email = document.getElementById('email');
const $password = document.getElementById('password');
const $signupSection = document.querySelector('.signup-section--js');
const $newUserName = document.getElementById('new-user-name');
const $newUserEmail = document.getElementById('new-user-email');
const $newUserPassword = document.getElementById('new-user-password1');
const $confirmNewUserPassword = document.getElementById('new-user-password2');
const $recoveryPasswordSection = document.querySelector('.recover-password-section--js');
const $sendEmail = document.getElementById('send-email');
const $emailConfirmationSection = document.querySelector('.email-confirmation-section--js');
const $desktopMenu = document.querySelector('.desktop-menu--js');
const $mobileMenu = document.querySelector('.mobile-menu--js');
const $mobileMenuCategories = document.querySelector('.mobile-menu__categories--js');
const $mobileMenuUser = document.querySelector('.mobile-menu__user--js');
const $mobileMenuLogin = document.querySelector('.mobile-menu__login--js');
const $myAccountSection = document.querySelector('.my-account-section--js');
const $editAccountSection = document.querySelector('.edit-account-section--js');
const $newEmail = document.getElementById('new-email');
const $newPassword = document.getElementById('new-password1');
const $confirmNewPassword = document.getElementById('new-password2');
const $cardsContainer = document.querySelector('.cards-container--js');
const $productDetail = document.querySelector('.product-detail--js');
const $addToCart = document.querySelector('.add-to-cart--js');
const $cartIconCount = document.querySelector('.cart-icon__count--js');
const $cartIconNumber = document.querySelector('.cart-icon__number--js');
const $shoppingCart = document.querySelector('.shopping-cart--js');
const $cartContainer = document.querySelector('.cart-container--js');



const api = axios.create({
  baseURL: 'http://api.escuelajs.co/api/v1',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
});


function upperCase(word) {
  return word[0].toUpperCase() + word.substring(1);
}

function renderCategories(items) {
  items.forEach((item) => {
    if(item.id <= 5) {
      const liItem1 = document.createElement('li');

      const aItem1 = document.createElement('a');
      aItem1.setAttribute('href', '#body');
      aItem1.classList.add('margin--right', 'main-text');
      aItem1.classList.add('categories');
      aItem1.innerText = upperCase(item.name);
      aItem1.setAttribute('id', item.id);
  
      $categoriesDesktop.appendChild(liItem1);
      liItem1.appendChild(aItem1);
  
      const liItem2 = document.createElement('li');
      liItem2.classList.add('categories--item');
  
      const aItem2 = document.createElement('a');
      // aItem2.setAttribute('href', 'javascript:void(0)');
      aItem2.setAttribute('href', '#body');
      aItem2.classList.add('main-text', 'categories');
      aItem2.innerText = upperCase(item.name);
      aItem2.setAttribute('id', item.id);
      
      $mobileMenuCategories.appendChild(liItem2);
      liItem2.appendChild(aItem2);
    }

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

function renderProducts(products) {
  $cardsContainer.innerHTML = '';
  products.forEach((product) => {
    if(product.images[0] !== '') {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('card-container');
      cardContainer.setAttribute('id','product_'+product.id);
  
      const cardImages = document.createElement('div');
      cardImages.classList.add('card-images');
  
      const cardImg = document.createElement('img');
      cardImg.classList.add('card-img');
      cardImg.setAttribute('src', product.images[0]);
      cardImg.setAttribute('id', product.id);
  
      const cardIcon = document.createElement('div');
      cardIcon.classList.add('card-icon', 'add-to-cart');
      cardIcon.setAttribute('id', product.id);
      cardIcon.innerHTML = 
      `
      <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 30 30" fill="#474747" class="card-icon__svg" id="${product.id}">
        <path id="${product.id}" d="M29.11,21.11c0,.76-.56,1.32-1.37,1.39-.11,0-.23,0-.34,0H9.4c-1.13,0-1.54-.37-1.75-1.5-1.09-5.96-2.18-11.92-3.27-17.89-.04-.23-.13-.31-.37-.3-.86,.02-1.72,.02-2.58,0-.58-.01-1.05-.24-1.31-.82C-.11,1.45,0,.98,.31,.53,.59,.14,1.01,.02,1.45,.01,2.76,0,4.08,0,5.39,.01c.8,0,1.28,.45,1.44,1.26,.04,.2,.09,.4,.14,.6,.23,1.31,.46,2.63,.7,3.94,.68,3.73,1.36,7.47,2.04,11.2,0,.04,.04,.07,.05,.1,.14,.78,.29,1.56,.41,2.34,.05,.3,.25,.23,.42,.23,5.41,0,10.81,0,16.22,0,.3,0,.61-.02,.91,0,.82,.05,1.38,.64,1.38,1.41Z"/>
        <path id="${product.id}" d="M12.73,27.18c0,1.52-1.23,2.81-2.71,2.82-1.47,.02-2.73-1.27-2.74-2.79-.01-1.52,1.23-2.81,2.71-2.82,1.47-.02,2.73,1.27,2.74,2.8Z"/>
        <path id="${product.id}" d="M29.11,27.2c0,1.52-1.26,2.81-2.73,2.8-1.48,0-2.73-1.3-2.72-2.81,0-1.52,1.26-2.81,2.73-2.8,1.48,0,2.73,1.3,2.72,2.82Z"/>
        <path id="${product.id}" d="M29.94,4.34c-.23-.83-.78-1.26-1.63-1.26H10.09c-.64,0-1.15,.53-1.15,1.19v.12s.01,.09,.02,.13c.12,.68,.23,1.35,.34,2.03,.49,2.89,.99,5.77,1.49,8.66,.01,.05,.01,.09,.03,.13,.11,.54,.57,.94,1.11,.94h13.87c.86,0,1.43-.45,1.65-1.29,.83-3.22,1.65-6.44,2.49-9.67,.08-.32,.09-.65,0-.98Zm-5.59,5.87c0,.38-.31,.69-.69,.69h-2.98v2.98c0,.39-.32,.7-.71,.7h-1.04c-.38,0-.7-.31-.7-.7v-2.98h-2.98c-.38,0-.69-.31-.69-.69v-1.05c0-.39,.31-.7,.69-.7h2.98v-2.98c0-.38,.32-.7,.7-.7h1.04c.39,0,.71,.32,.71,.7v2.98h2.98c.38,0,.69,.31,.69,.7v1.05Z"/>
      </svg>
      `;

  
      const cardPrice = document.createElement('p');
      cardPrice.classList.add('card-price');
      cardPrice.innerText = '$ ' + product.price;
  
      const cardName = document.createElement('p');
      cardName.classList.add('card-name');
      cardName.innerText = product.title;
  
      $cardsContainer.appendChild(productCard);
      productCard.appendChild(cardIcon);
      productCard.appendChild(cardContainer);
      cardContainer.appendChild(cardImg);
      cardContainer.appendChild(cardPrice);
      cardContainer.appendChild(cardName);
    }
  });

  userLoggedIn();
}

const getAllProducts = async() => {
  try {
    const response = await api.get('/products');
    console.log()
    renderProducts(response.data);
  } catch(error) {
    alert(error);
  }
}

const getProductByCategory = async(categoryId) => {
  try {
    if (categoryId === '0') {
      getAllProducts();
    }
    else {
      const response = await api.get(`/categories/${categoryId}/products`);
      renderProducts(response.data);
    }
  } catch(error) {
    alert(error);
  }
}

function renderProductDetail(product) {
  const productImg = document.querySelector('.product-detail__image');
  productImg.setAttribute('src', product.images[0]);

  const productPrice = document.querySelector('.product-detail__price');
  productPrice.innerText = '$ ' + product.price;

  const productName = document.querySelector('.product-detail__name');
  productName.innerText = product.title;

  const productDescription = document.querySelector('.product-detail__description');
  productDescription.innerText = product.description;

  $addToCart.setAttribute('id', product.id);

}

function openProductDetail(product) {
  renderProductDetail(product);
  $productDetail.classList.remove('invisible');
  toggleNavbarNav('inactive');
}

const getProduct = async(id) => {
  try {
    const response = await api.get(`/products/${id}`);
    openProductDetail(response.data);
  } catch(error) {
    alert(error);
  }
}

const addItemToCart = async(id) => {
  try {
    const response = await api.get(`/products/${id}`);
    const product = response.data;
    const shoppingCartProduct = document.createElement('div');
    shoppingCartProduct.classList.add('shopping-cart__product');
    shoppingCartProduct.innerHTML = 
    `
    <figure>
        <img src="${product.images[0]}" alt="Esencia">
    </figure>
    <p>${product.title}</p>
    <p>$ ${product.price}</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 24 24' width='32' height='32' class="close-product">
      <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" class="close-product"></path>
    </svg>
    `;
    $cartContainer.appendChild(shoppingCartProduct);
  } catch(error) {
    alert(error);
  }
}

function toggleCardsContanier(state) {
  if(state == 'visible') {
    $cardsContainer.classList.remove('invisible');
  } else if(state == 'invisible'){
    $cardsContainer.classList.add('invisible');
  }
}

function toggleNavbarNav(state) {
  if(state == 'inactive') {
    $navbarNav.classList.add('inactive');
    $navbarNav.classList.remove('active');
  } else if(state == 'active'){
    $navbarNav.classList.remove('inactive');
    $navbarNav.classList.add('active');
  }
}

function toggleHamburguerIcon(state) {
  if(state == 'visible') {
    $hamburguerIcon.classList.remove('invisible');
  } else if(state == 'invisible'){
    $hamburguerIcon.classList.add('invisible');
  }
}

function toggleHamburguerIconSize(size) {
  if(size == 'medium') {
    $hamburguerIcon.classList.remove('icon--large');
    $hamburguerIcon.classList.add('icon--medium');
  } else if(size == 'large'){
    $hamburguerIcon.classList.add('icon--large');
    $hamburguerIcon.classList.remove('icon--medium');
  }
  
}

function toggleIcons(device) {
  if(device == 'mobile') {
    $icons.classList.add('icons--mobile');
    $icons.classList.remove('icons--desktop');
  } else if(device == 'desktop'){
    $icons.classList.add('icons--desktop');
    $icons.classList.remove('icons--mobile');
  }
}

function toggleLogoSize(size) {
  if(size == 'medium') {
    $logo.classList.remove('logo--large');
  } else if(size == 'large'){
    $logo.classList.add('logo--large');
  }
}

function toggleCartIconSize(size) {
  if(size == 'medium') {
    $cartIcon.classList.remove('icon--large');
    $cartIcon.classList.add('icon--medium');
    $cartIconSvg.classList.remove('icon-svg--large');
  } else if(size == 'large'){
    $cartIcon.classList.remove('icon--medium');
    $cartIcon.classList.add('icon--large');
    $cartIconSvg.classList.add('icon__svg--large');
  }
}

function toggleScrollY(state) {
  if(state == 'inactive') {
    document.body.classList.add('scroll--inactive')
  } else if(state == 'active'){
    document.body.classList.remove('scroll--inactive')
  }
}

function mediumAndLargeScreens() {
  toggleLogoSize('medium');
  toggleIcons('desktop');
  toggleHamburguerIconSize('medium');
  toggleCartIconSize('medium');
}

function userLoggingIn() {
  window.location.href="./index.html?email="+$email.value;
}

function userLoggedIn() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userEmail = urlParams.get("email");
  if(userEmail !== null) {
    $userNameDesktop.classList.remove('inactive');
    $mobileMenuUser.classList.remove('inactive');
    $loginLink.classList.add('inactive');
    $signupLink.classList.add('inactive');
    $mobileMenuLogin.classList.add('inactive');
    $userNameDesktop.text = userEmail;
    $userNameMobile.innerHTML= userEmail;
    isUserLoggedIn = true;
    } else {
      $userNameDesktop.classList.add('inactive');
      $mobileMenuUser.classList.add('inactive');
      $loginLink.classList.remove('inactive');
      $signupLink.classList.remove('inactive');
      $mobileMenuLogin.classList.remove('inactive');
      isUserLoggedIn = false;
    }
}

function userLoggedOut() {
  isUserLoggedIn = false;
  window.location.href="./index.html";
}

function toggleDesktopMenu() {
  const isDesktopMenuOpen = !$desktopMenu.classList.contains('close');
  if (isDesktopMenuOpen){
    $desktopMenu.classList.add('close');
    $desktopMenu.classList.remove('desktop-menu--open');
    $desktopMenu.classList.add('desktop-menu--close');
  } else {
    $desktopMenu.classList.remove('close');
    $desktopMenu.classList.add('desktop-menu--open');
    $desktopMenu.classList.remove('desktop-menu--close');
  }
}

function closeDesktopMenu() {
  $desktopMenu.classList.remove('close');
  toggleDesktopMenu();
}

function toggleMobileMenu() {
  const isMobileMenuOpen = !$mobileMenu.classList.contains('close');
  if (isMobileMenuOpen) {
    $hamburguerIcon.classList.remove('icon—pressed');
    $mobileMenu.classList.add('close');
    $mobileMenu.classList.remove('mobile-menu--open');
    $mobileMenu.classList.add('mobile-menu--close');
    $cartIcon.classList.remove('invisible');
  } else {
    $hamburguerIcon.classList.add('icon—pressed');
    $mobileMenu.classList.remove('close');
    $mobileMenu.classList.add('mobile-menu--open');
    $mobileMenu.classList.remove('mobile-menu--close');
    $cartIcon.classList.add('invisible');
    if (window.matchMedia("(max-width: 460px)").matches) {
      toggleScrollY('inactive');
    }
  }
}

function closeMobileMenu() {
  $mobileMenu.classList.remove('close');
  toggleMobileMenu();
}

function openLoginSection() {
  isInHome = false;
  toggleScrollY('inactive');
  toggleCardsContanier('invisible');
  toggleNavbarNav('inactive');
  closeSignupSection();
  closeRecoveryPasswordSection();
  closeEmailConfirmationSection();
  closeMobileMenu();
  closeDesktopMenu();
  toggleHamburguerIcon('invisible');
  $cartIcon.classList.add('invisible');
  $loginSection.classList.remove('inactive');
}

function closeLoginSection() {
  $cartIcon.classList.remove('invisible');
  $email.value = '';
  $password.value = '';
  $loginSection.classList.add('inactive');
}

function openSignupSection() {
  isInHome = false;
  toggleScrollY('inactive');
  toggleCardsContanier('invisible');
  toggleNavbarNav('inactive');
  closeLoginSection();
  closeRecoveryPasswordSection();
  closeEmailConfirmationSection();
  closeMobileMenu();
  closeDesktopMenu();
  toggleHamburguerIcon('invisible');
  $cartIcon.classList.add('invisible');
  $signupSection.classList.remove('inactive');
}

function closeSignupSection() {
  $cartIcon.classList.remove('invisible');
  $newUserName.value = '';
  $newUserEmail.value = '';
  $newUserPassword.value = '';
  $confirmNewUserPassword.value = '';
  $signupSection.classList.add('inactive');
}

function openRecoveryPasswordSection() {
  isInHome = false;
  toggleNavbarNav('inactive');
  closeLoginSection();
  closeSignupSection();
  closeEmailConfirmationSection();
  closeMobileMenu();
  closeDesktopMenu();
  toggleHamburguerIcon('invisible');
  $cartIcon.classList.add('invisible');
  $recoveryPasswordSection.classList.remove('inactive');
}

function closeRecoveryPasswordSection() {
  $cartIcon.classList.remove('invisible');
  $sendEmail.value = '';
  $recoveryPasswordSection.classList.add('inactive');
}

function openEmailConfirmationdSection() {
  isInHome = false;
  toggleNavbarNav('inactive');
  closeLoginSection();
  closeSignupSection();
  closeRecoveryPasswordSection();
  closeMobileMenu();
  closeDesktopMenu();
  toggleHamburguerIcon('invisible');
  $cartIcon.classList.add('invisible');
  $emailConfirmationSection.classList.remove('inactive');
}

function closeEmailConfirmationSection() {
  $cartIcon.classList.remove('invisible');
  $emailConfirmationSection.classList.add('inactive');
}

function openMyAccount() {
  toggleScrollY('inactive');
  toggleCardsContanier('invisible');
  closeMobileMenu();
  closeDesktopMenu();
  toggleNavbarNav('inactive');
  toggleHamburguerIcon('invisible');
  $cartIcon.classList.add('invisible');
  $myAccountSection.classList.remove('inactive');
}

function closeMyAccount() {
  $cartIcon.classList.remove('invisible');
  $myAccountSection.classList.add('inactive');
}

function openEditMyAccount() {
  $editAccountSection.classList.remove('inactive');
}

function closeEditMyAccount() {
  $editAccountSection.classList.add('inactive');
  $newEmail.value = '';
  $newPassword.value = '';
  $confirmNewPassword.value = '';
}

function toggleShoppingCart() {
  const isShoppingCartOpen = !$shoppingCart.classList.contains('close');
  if (isShoppingCartOpen) {
    $shoppingCart.classList.add('close');
    $shoppingCart.classList.add('invisible');
    toggleNavbarNav('active');
  } else {
    $shoppingCart.classList.remove('close');
    $shoppingCart.classList.remove('invisible');
    toggleNavbarNav('inactive');
  }
}

function resizeHandler() {
  toggleScrollY('active');
  toggleCardsContanier('visible');
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
    } 
    else if (window.matchMedia("(max-width: 760px)").matches) {
      toggleNavbarNav('inactive');
      mediumAndLargeScreens();
      toggleHamburguerIcon('visible');
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
  closeRecoveryPasswordSection();
  closeEmailConfirmationSection();
  closeMyAccount();
  userLoggedIn();
}

const deletProduct = async() => {
  try {
    // const response = await api.delete('https://api.escuelajs.co/api/v1/products/201');
  } catch(error) {
    alert(error);
  }
}

function loadContent() {
  getCategories();
  getAllProducts();
  resizeHandler();
  userLoggedIn();
  deletProduct();
}

window.addEventListener('DOMContentLoaded', loadContent(), false);

window.addEventListener('resize', resizeHandler);

document.addEventListener('click', (e) => {
  console.log(e.target)
  if(e.target.matches('.categories')) {
    const categoryId = e.target.id;
    getProductByCategory(categoryId);
  }
  if(e.target.matches('.card-img')) {
    const productId = e.target.id;
    toggleScrollY('inactive');
    getProduct(productId);
  }
  if(e.target.matches('.close-product')) {
    $productDetail.classList.add('invisible');
    toggleScrollY('active');
    toggleNavbarNav('active');
  }
  if(e.target.matches('.add-to-cart, .add-to-cart *')) {
    itemsInShoppingCart += 1;
    if(itemsInShoppingCart === 1) {
      $cartIconCount.classList.remove('invisible');
    }
    $cartIconNumber.innerText = itemsInShoppingCart;
    const productId = e.target.id;
    console.log(productId)
    addItemToCart(productId);
  }
  if(e.target.matches('.cart-icon, .cart-icon *')) {
    toggleShoppingCart();
  }
});