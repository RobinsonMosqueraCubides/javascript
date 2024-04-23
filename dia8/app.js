function hogar(hogar, url, especies) {
    let array = [hogar, url, especies];
    let array2 = ['Hogar','URL', 'Especies'];
    for (let i = 0; i < array.length; i++) {
    fetch(array[i])
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo obtener la información');
        }
        return response.json();
    })
    .then(data => {
        let base = `<p class="h2">${array2[i]}: ${data.name}</p><br>`;
        let tdiv = document.createElement('div');
        tdiv.innerHTML = base;
        let cont = document.getElementById('contenedor');
        cont.appendChild(tdiv);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
}
function Search(id) {
    let url = `https://swapi.py4e.com/api/people/${id}/`;
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo obtener la información');
        }
        return response.json();
    })
    .then(data => {
        hogar(data.homeworld, data.url, data.species);
        let base = `<p class="h2">Nombre: ${data.name}</p><br>
        <p class="h2">Cumpleaños: ${data.birth_year}</p><br>
        <p class="h2">Color de ojos ${data.eye_color}</p><br>
        <p class="h2">Genero: ${data.gender}</p><br>
        <p class="h2">Color de cabello: ${data.hair_color}</p><br>
        <p class="h2">Altura: ${data.height}</p><br>
        <p class="h2">Peso Kg: ${data.mass}</p><br>
        <p class="h2">Color de piel: ${data.skin_color}</p><br>
        <p class="h2">Creado: ${data.created}</p><br>
        <p class="h2">Editado: ${data.edited}</p><br>`;
        let cont = document.getElementById('contenedor');
        cont.innerHTML = base;

    })
    .catch(error => {
        console.error('Error:', error);
    });
}

let btn = document.getElementById('boton');
btn.addEventListener('click', () => {
    let id = document.getElementById('nombre').value;
    Search(id);
});