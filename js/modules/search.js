function searchQuery(searchValue, e) {
    e.preventDefault();
    searchValue = document.querySelector('input').value;
    console.log(searchValue)
    routie(`zoeken/${searchValue}`);
}

export { searchQuery }