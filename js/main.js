import { handleRoutes } from './modules/router.js';
import {searchQuery} from './modules/search.js'

handleRoutes()


document.querySelector('form').addEventListener('submit', searchQuery);
