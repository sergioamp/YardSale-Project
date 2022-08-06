const menuIcon = document.querySelector('.navbar__menu-icon');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLogged = document.querySelector('.mobile-menu_logged');
const signOutButton = document.querySelector('.sign-out');
const aside = document.querySelector('.aside');
const productDetail = document.querySelector('#product-detail');
const closeProductDatail = document.querySelector('.product-detail_close');
const myAccount = document.querySelector('.my-account');
const editMyAccount = document.querySelector('.edit-my-account');
let isUserLoggedIn = 0;
isUserLoggedIn = checkParameters();

function whenIndexPage() {
  renderProducts(createProducts());

  menuIcon.addEventListener('click', toggleMobileMenu);
  signOutButton.addEventListener('click', signOut);
  closeProductDatail.addEventListener('click', closeAll);
}

function toggleMobileMenu() {
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isMobileMenuLoggedClose = mobileMenuLogged.classList.contains('inactive');

  switch (isUserLoggedIn) {
    case true:
    if (isMobileMenuLoggedClose){
        closeAll();
    }
    mobileMenuLogged.classList.toggle('inactive');
    break;
    case false:
    if (isMobileMenuClose){
        closeAll();
    }
    mobileMenu.classList.toggle('inactive');
    break;
  }
}

function openMyAccount() {
  closeAll();
  menuIcon.classList.add('inactive');
  cartIcon.classList.add('inactive');
  aside.classList.remove('inactive');
  myAccount.classList.remove('inactive');
}

function openEditWindow() {
  myAccount.classList.add('inactive');
  editMyAccount.classList.remove('inactive');
}

function closeEditWindow() {
  myAccount.classList.remove('inactive');
  editMyAccount.classList.add('inactive');
}

function goToHome() {
  menuIcon.classList.remove('inactive');
  cartIcon.classList.remove('inactive');
  aside.classList.add('inactive');
  myAccount.classList.add('inactive');
}

function signOut() {
  isUserLoggedIn = false;
  mobileMenuLogged.classList.add('inactive');
  window.location.href="./index.html";
}

function openProductDetail() {
  closeAll();
  aside.classList.remove('inactive');
  productDetail.classList.remove('inactive');
}

function closeAll() {
  mobileMenuLogged.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
  aside.classList.add('inactive');
}

function redirectIndex() {
  const email = document.querySelector('#email').value;
  window.location.href="./index.html?email="+email;
}

function checkParameters() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userEmail = urlParams.get("email");
  if(userEmail !== null) {
    const emailLbl1 = document.querySelector('#emailText1');
    emailLbl1.text = userEmail;
    const emailLbl2 = document.querySelector('#emailText2');
    emailLbl2.text = userEmail;
    return true;
    } else return false;
}

function createProducts() {
  const productList = [];
  productList.push ({
      name: 'Aceite de Cáñamo',
      price: '20',
      image: 'https://images.pexels.com/photos/7796453/pexels-photo-7796453.jpeg?auto=compress&cs=tinysrgb&w=800',
  });
  productList.push ({
      name: 'Aceite de Rosas',
      price: '18',
      image: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  productList.push ({
      name: 'Aceite de Lavanda',
      price: '15',
      image: 'https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  productList.push ({
      name: 'Aceite de Limonaria',
      price: '20',
      image: 'https://images.pexels.com/photos/5462207/pexels-photo-5462207.jpeg?auto=compress&cs=tinysrgb&w=800',
  });
  productList.push ({
      name: 'Aceite de Naranja',
      price: '18',
      image: 'https://images.pexels.com/photos/3273989/pexels-photo-3273989.jpeg?auto=compress&cs=tinysrgb&w=800',
  });
  productList.push ({
      name: 'Aceite de Canela',
      price: '15',
      image: 'https://images.pexels.com/photos/7795850/pexels-photo-7795850.jpeg?auto=compress&cs=tinysrgb&w=800',
  });
  productList.push ({
      name: 'Aceite de Romero',
      price: '15',
      image: 'https://images.pexels.com/photos/7796377/pexels-photo-7796377.jpeg?auto=compress&cs=tinysrgb&w=800',
  });
  productList.push ({
      name: 'Aceite de Menta',
      price: '15',
      image: 'https://images.pexels.com/photos/7795814/pexels-photo-7795814.jpeg?auto=compress&cs=tinysrgb&w=800',
  });
  return productList;
}

function renderProducts(arr) {
  const cardsContainer = document.querySelector('.cards-container');
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productImg = document.createElement('img');
    productImg.classList.add('product-info__img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-info__price');
    productPrice.innerText = '$ ' + product.price;

    const productName = document.createElement('p');
    productName.classList.add('product-info__name');
    productName.innerText = product.name;

    const addToCartIcon = document.createElement('img');
    addToCartIcon.classList.add('add-to-cart');
    addToCartIcon.setAttribute('src', '../Assets/icons/bt_add_to_cart.svg');

    cardsContainer.appendChild(productCard);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productImg);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productName);
    productInfo.appendChild(addToCartIcon);
  }
}
