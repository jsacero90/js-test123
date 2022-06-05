// Import stylesheets
import './style.css';

// Write Javascript code!

const array = [1, 2, 3, 4];

const appDiv = document.querySelector('#app');
const listUl = document.createElement('ul');
let listString = '';
array.forEach((data) => (listString += `<li>${data}</li>`));
listUl.innerHTML = listString;
appDiv.appendChild(listUl);
