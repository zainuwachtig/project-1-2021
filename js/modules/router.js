import { getData, getExternData } from './getData.js'
import { Routie } from './vendor/routie.js'

function handleRoutes() {
    routie({
            'zoeken/:searchValue' : searchValue => {
                getData(searchValue)
            },
            'leiderschap' : () => {
                getData('leiderschap')
            },
            'duurzaam%20ondernemen' : () => {
                getData('duurzaam ondernemen')
            },
            'extern%20materiaal' : () => {
                getExternData('eigen onderneming')
            },
            '' : () => {
                getData('ondernemen')
            }
    })
};

export {handleRoutes}