let isInHome = true;

// const $menu = document.querySelector('.menu--js');
const $categories = document.querySelector('.categories--js');

const api = axios.create({
  baseURL: 'http://api.escuelajs.co/api/v1',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  }
});

function firstLetterToupperCase(word) {
  return word[0].toUpperCase() + word.substring(1);
}

function renderCategories(items) {
  items.forEach((item) => {
    if(item.id <= 5) {
      const liItem = document.createElement('li');

      const aItem = document.createElement('a');
      aItem.setAttribute('href', '#body');
      aItem.innerText = firstLetterToupperCase(item.name);
      aItem.setAttribute('id', item.id);
      aItem.classList.add('categories--text');

      $categories.appendChild(liItem);
      liItem.appendChild(aItem);
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

// function setMenuSize(size) {
//   if(size == 'mobile') {
//     $menu.classList.add('menu--mobile');
//     $menu.classList.remove('menu--tablet');
//     $menu.classList.remove('menu--desktop');
//   } else if(size == 'tablet'){
//     $menu.classList.add('menu--tablet');
//     $menu.classList.remove('menu--mobile');
//     $menu.classList.remove('menu--desktop');
//   } else if(size == 'desktop'){
//     $menu.classList.add('menu--desktop');
//     $menu.classList.remove('menu--mobile');
//     $menu.classList.remove('menu--tablet');
//   }
// }

// function resizeHandler() {
//   if(isInHome) {
//     if (window.matchMedia("(max-width: 460px)").matches) {
//       setMenuSize('mobile');
//       console.log('mobile')
//     } 
//     else if (window.matchMedia("(max-width: 760px)").matches) {
//       setMenuSize('tablet');
//       console.log('tablet')
//     }
//     else {
//       setMenuSize('desktop');
//       console.log('desktop')
//     }
//   } 
// }

function loadContent() {
  getCategories();
  resizeHandler();
}

window.addEventListener('DOMContentLoaded', loadContent(), false);

// window.addEventListener('resize', resizeHandler);
