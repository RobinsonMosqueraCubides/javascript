function writeData(name, id, animated) {
    let divName = document.getElementById('name');
    let divId = document.getElementById('pokeId');
    let divImg = document.getElementById('animated');
    divName.textContent = name;
    divId.textContent = id;
    divImg.setAttribute('src', animated);
}
function getDataPokedex(data) {
    let URL = `https://pokeapi.co/api/v2/pokemon/${data}`;
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        writeData(data.name, data.id,data.sprites.versions['generation-v']['black-white'].animated.front_default)
    })
}
let btn = document.getElementById('btnBuscar');
btn.addEventListener('click', () => {
    getDataPokedex(document.getElementById('input').value);
});