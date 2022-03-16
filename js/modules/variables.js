const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'Geronimo Stilton';
const key = '76f45dfa187d66be5fd6af05573eab04';
const detail = 'Default';

const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

// const secret = '4289fec4e962a33118340c888699438d';
// const config = { Authorization: `Bearer ${secret}` };

export {url}