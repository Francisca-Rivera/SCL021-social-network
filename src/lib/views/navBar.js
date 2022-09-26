const navBar = () => {
// barra de navegación de abajo.
/*const navegationBarDiv = document.createElement('div');
navegationBarDiv.className = 'navegationBarDiv';*/
const navegationBar = document.createElement('nav');
navegationBar.className = 'navegationBar';

// Boton de casa
const homeButtonLink = document.createElement('a');
homeButtonLink.href = '#/home'; // aqui no sé a qué dirige.
homeButtonLink.className = 'navIcon';
const homeButton = document.createElement('img');
homeButton.className = 'navegationButton';
homeButton.src = './images/home.png';
homeButtonLink.appendChild(homeButton);

// Boton buscar posteos
const searchButtonLink = document.createElement('a');
searchButtonLink.href = '#/error404'; // aqui no sé a qué dirige.
searchButtonLink.className = 'navIcon';
const searchButton = document.createElement('img');
searchButton.className = 'navegationButton';
searchButton.src = './images/search.png';
searchButtonLink.appendChild(searchButton);

// Boton crear post nuevo
const addPostButtonLink = document.createElement('a');
addPostButtonLink.href = '#/createPost'; 
addPostButtonLink.className = 'navIcon';
const addPostButton = document.createElement('img');
addPostButton.className = 'navegationButton';
addPostButton.src = './images/add.png';
addPostButtonLink.appendChild(addPostButton);

// Revisar post guardados
const savedPostButtonLink = document.createElement('a');
savedPostButtonLink.href = '#/error404'; // aqui no sé a qué dirige.
savedPostButtonLink.className = 'navIcon';
const savedPostButton = document.createElement('img');
savedPostButton.className = 'navegationButton';
savedPostButton.src = './images/sparkles.png';
savedPostButtonLink.appendChild(savedPostButton);

// Perfil de usuario
const profileButtonLink = document.createElement('a');
profileButtonLink.href = '#/error404'; // aqui no sé a qué dirige.
profileButtonLink.className = 'navIcon';
const profileButton = document.createElement('img');
profileButton.className = 'navegationButton';
profileButton.src = './images/following.png';
profileButtonLink.appendChild(profileButton);

navegationBar.appendChild(homeButtonLink);
navegationBar.appendChild(searchButtonLink);
navegationBar.appendChild(addPostButtonLink);
navegationBar.appendChild(savedPostButtonLink);
navegationBar.appendChild(profileButtonLink);
/*navegationBarDiv.appendChild(navegationBar);*/


if (window.matchMedia("(min-width: 991px)").matches) {
//AÑADIR EN ESTE IF EL LOGO Y EL BOTON DE CERRAR SESION
const homeButtonText = document.createElement('p');
homeButtonText.innerText = 'Home';
homeButtonText.className = 'iconButtonText';
const searchButtonText = document.createElement('p');
searchButtonText.innerText = 'Buscar';
searchButtonText.className = 'iconButtonText';
const newPostButtonText = document.createElement('p');
newPostButtonText.innerText = 'Nueva Publicacion';
newPostButtonText.className = 'iconButtonText';
const savedButtonText = document.createElement('p');
savedButtonText.innerText = 'Favoritos';
savedButtonText.className = 'iconButtonText';
const porfileButtonText = document.createElement('p');
porfileButtonText.innerText = 'Perfil';
porfileButtonText.className = 'iconButtonText';
homeButtonLink.appendChild(homeButtonText);
searchButtonLink.appendChild(searchButtonText);
addPostButtonLink.appendChild(newPostButtonText);
savedPostButtonLink.appendChild(savedButtonText);
profileButtonLink.appendChild(porfileButtonText);
}


return navegationBar
};

export default navBar

