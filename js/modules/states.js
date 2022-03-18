function loadingState() {
    const melding = document.querySelector('#melding')
    console.log(melding)
}

function errorState() {
    console.log('error')
}

export { loadingState, errorState }