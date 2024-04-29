async function help(data) {
    let URL = `https://pokeapi.co/api/v2/pokemon/${data}`;
    try {
        const response = await fetch(URL);
        const responseData = await response.json();
        writeData(responseData.name, responseData.id, responseData.sprites.versions['generation-v']['black-white'].front_default);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function writeData(name, id, animated) {
    if (animated === null) help(id);
    let divName = document.getElementById('name');
    let divId = document.getElementById('pokeId');
    let divImg = document.getElementById('animated');
    divName.textContent = name;
    divId.textContent = id;
    divImg.setAttribute('src', animated);
}
async function getDataPokedex(data) {
    let URL = `https://pokeapi.co/api/v2/pokemon/${data}`;
    try {
        const response = await fetch(URL);
        const responseData = await response.json();
        writeData(responseData.name, responseData.id, responseData.sprites.versions['generation-v']['black-white'].animated.front_default);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
let btn = document.getElementById('btnBuscar');
btn.addEventListener('click', () => {
    getDataPokedex(document.getElementById('input').value);
});
document.addEventListener('DOMContentLoaded', async () => {
    await getDataPokedex('bulbasaur');
});
let btnNext = document.getElementById('nextButton');

btnNext.addEventListener('click', () => {
    let pokeIdText =document.getElementById('pokeId').textContent;
    let pokeId = parseInt(pokeIdText) + 1;
    getDataPokedex(pokeId);
});

let btnPrev = document.getElementById('prevButton');

btnPrev.addEventListener('click', () => {
    let pokeIdText =document.getElementById('pokeId').textContent;
    let pokeId = parseInt(pokeIdText) - 1;
    getDataPokedex(pokeId);
});