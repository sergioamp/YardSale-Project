const productList = [];
const cardsContainer = document.querySelector('.cards-container');
let isUserLoggedIn = false;
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLogin = document.querySelector('.mobile-menu__login');
const mobileMenuUser = document.querySelector('.mobile-menu__user');
const aside = document.querySelector('.aside');
const productDetail = document.querySelector('#product-detail');
const menuIcon = document.querySelector('.navbar__menu-icon');
const cartIcon = document.querySelector('.shopping-cart-icon');
const myAccount = document.querySelector('.my-account');
const editMyAccount = document.querySelector('.edit-my-account');

function renderProducts(products) {
  for (product of products) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.setAttribute('id','product_'+product.ref);

    const productImg = document.createElement('img');
    productImg.classList.add('product-info__img');
    productImg.setAttribute('src', product.image);
    productImg.setAttribute('id', product.ref);
    productImg.setAttribute('onclick', 'toggleProductDetail()');
    console.log(product.image);

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-info__price');
    productPrice.innerText = '$ ' + product.price;

    const productName = document.createElement('p');
    productName.classList.add('product-info__name');
    productName.innerText = product.name;

    const addToCartIcon = document.createElement('div');
    addToCartIcon.classList.add('add-to-cart');

    cardsContainer.appendChild(productCard);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productImg);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productName);
    productInfo.appendChild(addToCartIcon);
  }
}

function createProducts() {
  productList.push ({
    ref: 1,
    name: 'Aceite de Palo Santo',
    price: '20',
    image: 'https://images.pexels.com/photos/7796453/pexels-photo-7796453.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: `Conocido como Madera Sagrada, es amaderado, balsámico y con un toque dulce. El aceite esencial de palo santo ha sido utilizado para inducir la calma, relajar y crear una atmósfera de espiritualidad.

    Tiene propiedades sedantes y relajantes, actúa contra la tristeza y el abatimiento.

    Es un excelente repelente de mosquitos natural.

    Se emplea para expulsar las energías negativas y atraer las energías positivas.`
  });
  productList.push ({
    ref: 2,
    name: 'Aceite de Rosas',
    price: '18',
    image: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: `El aceite esencial de rosas, es una sustancia concentrada extraída de los pétalos de la flor, es el alma de la planta. Ayuda a elevar el espíritu y favorece la conexión con lo sutil.

    Al ser una sustancia orgánica, tiende a actuar en armonía con nuestro cuerpo creando una verdadera alquimia (transformación).

    Los efectos de los aceites esenciales son fisiológicos y psicológicos. Su principal característica es que tiene la capacidad de elevar la vibración del cuerpo a 320 mhz, más alto que cualquier otro aceite esencial.`
  });
  productList.push ({
    ref: 3,
    name: 'Aceite de Lavanda',
    price: '15',
    image: 'https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: `Un aroma floral que calma la mente y es perfecto para un sueño más dulce y profundo. Calma el estrés y la ansiedad. Alivia dolores de cabeza y migrañas.

    Transmite en los espacios una sensación de tradición, pureza, limpieza y bienestar.

    Ayuda a descongestionar el sistema respiratorio, ya que humedece espacios en los que el ambiente es seco.`
  });
  productList.push ({
    ref: 4,
    name: 'Aceite de Limón',
    price: '20',
    image: 'https://images.pexels.com/photos/5462207/pexels-photo-5462207.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: `El olor del limón se valora por su capacidad para agudizar la concentración y afinar los sentidos en muchas culturas.

    Elimina la negatividad y alegra tu estado de ánimo. Además, es ideal para estimular la creatividad y aporta energía.

    Limpiador natural para el hogar, es un buen purificante del ambiente y superficies.`
  });
  productList.push ({
    ref: 5,
    name: 'Aceite de Naranja',
    price: '18',
    image: 'https://images.pexels.com/photos/3273989/pexels-photo-3273989.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: `Estimulante, confiere energía positiva en situaciones de cansancio y falta de vitalidad. Se usa para favorecer la paz y la tranquilidad y evitar el estrés y la ansiedad.

    Funciona como relajante del sistema nervioso,  además de tener un poder regenerador y antioxidante.  Mejora la calidad del sueño.

    Limpia y purifica los olores.`
  });
  productList.push ({
    ref: 6,
    name: 'Aceite de Canela',
    price: '15',
    image: 'https://images.pexels.com/photos/7795850/pexels-photo-7795850.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: `Esta fragancia es una de las más antiguas y apreciadas del mundo. Es un aroma persistente, cálido, chispeante, embriagador y refinado.

    Estimula los sentidos, cambia el estado de ánimo y genera pensamientos positivos. Relaja la tensión nerviosa, la fatiga y ayuda en tratamientos antidepresivos.

    Aviva el amor y la pasión.  Purifica y limpia, creando ambientes pacíficos, sugerentes, románticos y sensuales.

    Estimula la mente, la capacidad cerebral, atención y concentración. Fomenta la creatividad y la fluidez de las ideas, agudiza la memoria visual y capacidad de recordar.`
  });
  productList.push ({
    ref: 7,
    name: 'Aceite de Romero',
    price: '15',
    image: 'https://images.pexels.com/photos/7796377/pexels-photo-7796377.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: `Renueva la concentración y la memoria, nos protege de posibles virus y estimular nuestro sistema inmune. Vitalidad y energía, efecto vigorizante, claridad mental, confianza en uno mismo.

    Alivia el dolor y las molestias musculares y articulares.

    Refresca y purifica el aire.`
  });
  productList.push ({
    ref: 8,
    name: 'Aceite de Menta',
    price: '15',
    image: 'https://images.pexels.com/photos/7795814/pexels-photo-7795814.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: `Su aroma fresco es un gran energizante y refrescante, despertando la creatividad y mejorando la autoestima.

    Alivia las dificultades respiratorias, refresca sus sentidos y alivia los resfriados matutinos para un flujo de trabajo fluido y sin interrupciones.

    Limpia y desinfecta el ambiente.`
  });
  userLoggedIn();
  renderProducts(productList);
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
  const desktopUser = document.querySelector('.desktop__user');
  const desktopLogin = document.querySelector('.desktop__login');
  if (isUserLoggedIn) {
    mobileMenuLogin.classList.add('inactive');
    mobileMenuUser.classList.remove('inactive');
    desktopUser.classList.remove('inactive');
    desktopLogin.classList.add('inactive');
  } else {
    mobileMenuLogin.classList.remove('inactive');
    mobileMenuUser.classList.add('inactive');
    desktopUser.classList.add('inactive');
    desktopLogin.classList.remove('inactive');
  }
}

function closeOpenwindows() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isProductDetailOpen = !productDetail.classList.contains('inactive');
  const isMyAccountOpen = !myAccount.classList.contains('inactive');

  if (isMobileMenuOpen){
    mobileMenu.classList.add('inactive');
  }
  if (isProductDetailOpen || isMyAccountOpen){
    productDetail.classList.add('inactive');
    aside.classList.add('inactive');
    myAccount.classList.add('inactive');
  }
}

function toggleMobileMenu() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  if (isMobileMenuOpen){
    mobileMenu.classList.add('inactive');
  } else {
    closeOpenwindows()
    mobileMenu.classList.remove('inactive');
  }
}

function renderProductDetail(productRef) {
  const productImg = document.querySelector('#product-detail__image');
  productImg.setAttribute('src', productList[productRef - 1].image);

  const productPrice = document.querySelector('.product-detail__price');
  productPrice.innerText = '$ ' + productList[productRef - 1].price;

  const productName = document.querySelector('.product-detail__name');
  productName.innerText = productList[productRef - 1].name;

  const productDescription = document.querySelector('.product-detail__description');
  productDescription.innerText = productList[productRef - 1].description;

}

function toggleProductDetail() {
  const isProductDetailOpen = !productDetail.classList.contains('inactive');
  const element = event.target.getAttribute("id");
  if (isProductDetailOpen){
    aside.classList.add('inactive');
    productDetail.classList.add('inactive');
  } else {
    closeOpenwindows();
    renderProductDetail(element);
    aside.classList.remove('inactive');
    productDetail.classList.remove('inactive');
  }
}

function openMyAccount() {
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
