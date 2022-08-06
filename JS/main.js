var isUserLoggedIn = 0;
isUserLoggedIn = checkParameters();

function whenIndexPage() {

  const menuIcon = document.querySelector('.navbar__menu-icon');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLogged = document.querySelector('.mobile-menu_logged');
  const signOutButton = document.querySelector('.sign-out');

  renderProducts(createProducts());


  menuIcon.addEventListener('click', toggleMobileMenu);

  signOutButton.addEventListener('click', signOut);
}

function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLogged = document.querySelector('.mobile-menu_logged');
  switch (isUserLoggedIn) {
    case true:
    mobileMenuLogged.classList.toggle('inactive');
    break;
    case false:
    mobileMenu.classList.toggle('inactive');
    break;
  }
}
function signOut() {
  isUserLoggedIn = false;
  const mobileMenuLogged = document.querySelector('.mobile-menu_logged');
  mobileMenuLogged.classList.add('inactive');
  window.location.href="./index.html";
}

function whenLoginPage() {
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
    // productImg.addEventListener('click', openProductDetail);

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
