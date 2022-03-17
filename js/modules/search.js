function searchQuery(searchValue, e) {
    searchValue = document.querySelector('input').value;
    console.log(searchValue)
    routie(`zoeken/${searchValue}`);
    e.preventDefault();
}

export { searchQuery }