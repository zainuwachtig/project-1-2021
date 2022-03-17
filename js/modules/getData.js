import { loadingState, errorState } from './states.js';
import { render } from './render.js';

function getData(categorie) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const query = categorie;
    const key = '76f45dfa187d66be5fd6af05573eab04';
    const detail = 'Default';

    const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            render(data)
        })
        .catch(err => {
            console.log(err);
            errorState()
        })
}

export { getData }