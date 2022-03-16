import {url} from './variables.js'
import { loadingState, errorState } from './states.js';
import { render } from './render.js';

function getData(url) {
    loadingState()
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
        });   
}

export { getData }