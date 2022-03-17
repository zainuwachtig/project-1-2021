import { getData } from './getData.js'
import { Routie } from './vendor/routie.js'

function handleRoutes() {
    routie({
            'zoeken/:searchValue' : searchValue => {
                getData(searchValue)
            },
            'leiderschap' : () => {
                getData('leiderschap')
            },
            'duurzaam-ondernemen' : () => {
                getData('duurzaam ondernemen')
            },
            '' : () => {
                getData('ondernemen')
            }
    })
};

export {handleRoutes}