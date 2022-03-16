// Moet in aparte module en voor ieder boek
const bookWrap = document.querySelector('main article');

function turnBook() {
    bookWrap.classList.toggle('turnbook');
}

bookWrap.addEventListener('click', turnBook);

import { url } from './modules/variables.js'
import { getData } from './modules/getData.js';

getData(url)
