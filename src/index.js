import './style.css';
import homeDisplay from './js/home.js';
import menuDisplay from './js/menu.js';
import aboutDisplay from './js/about.js';

//Element Variables
const content = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

//EventListeners
homeButton.addEventListener("click", homeButtonClicked);
menuButton.addEventListener("click", menuButtonClicked);
aboutButton.addEventListener("click", aboutButtonClicked);

//Interaction
function homeButtonClicked(e) {
    clearContent();
    content.appendChild(homeDisplay());
}

function menuButtonClicked(e) {
    clearContent();
    content.appendChild(menuDisplay());
}

function aboutButtonClicked(e) {
    clearContent();
    content.appendChild(aboutDisplay());
}

//Functions
function clearContent() {
    content.innerHTML = '';
}

//Default Script
content.appendChild(homeDisplay());