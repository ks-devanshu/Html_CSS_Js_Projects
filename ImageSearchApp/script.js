// acess-key SNAh2rCdpcnoKYTrkuUcQBuhovLFLnUVIWOJOmY4AsQ
// unsplash api
// username - havard_melai
// email - xacela6715@luxudata.com

const apiKey = 'SNAh2rCdpcnoKYTrkuUcQBuhovLFLnUVIWOJOmY4AsQ';
const inputEl = document.getElementById('search-term');
const searchBtnEl = document.getElementById('search-btn');
const catalogEl = document.getElementById('catalogs');
const loadBtnEl = document.getElementById('load-btn');

let page = 1;

searchBtnEl.addEventListener("click", () => {
    catalogEl.innerHTML = '';
    searchImage(inputEl.value);
    loadBtnEl.style.display = inputEl.value ? 'inline-block' : 'none';
});

loadBtnEl.addEventListener("click", () => {
    page++;
    searchImage(inputEl.value);
})

async function searchImage(term) {
    if (!term) {
        catalogEl.innerHTML = '';
        return;
    }
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?per_page=50&page=${page}&query=${term}&client_id=${apiKey}`);

        if (!response.ok)
            throw new Error('Network Error');

        const data = await response.json();
        updateView(data.results);
        catalogEl.style.display = 'flex';

    } catch (error) {
        console.log(error.message);
    }
}

function updateView(data) {
    for (let i = 0; i<data.length; i++) {
        catalogEl.innerHTML = catalogEl.innerHTML+`<div class="card">
                <a href=${data[i].links.html} target='_blank' class='link'>
                <img id="img-id" src=${data[i].urls.small} alt="searched-image">
                </a>
                <div class='pdiv'>
                    <p id="desc">${data[i].alt_description}</p>
                </div>
        </div>`;
    }
}