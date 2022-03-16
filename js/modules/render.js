function render(data) {
    const resultsWrapper = document.querySelector('.results-wrapper');

    const results = data.results;
    console.dir(results);
    results.forEach((item, i) => {
        const html = `
            <article>
                <div>
                    <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
                </div>
                <div>
                    <h3>${item.titles[0]}</h3>
                    <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                </div>
        `;
        resultsWrapper.insertAdjacentHTML('beforeend', html);
   
    });
}

export { render }