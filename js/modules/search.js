function searchQuery(searchValue) {
    searchValue = document.querySelector('input').value;
    console.log(searchValue)
    routie(`zoeken/${searchValue}`);
}

export { searchQuery }