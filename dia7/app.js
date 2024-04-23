

function buscarSuperheroePorId(id) {

    let url = `https://superheroapi.com/api.php/b263cb697abdfe978c51bbfee48142b1/${id}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la información del superhéroe.');
            }
            return response.json();
        })
        .then(data => {
            let nombre = document.getElementById('name');
            nombre.textContent = data.name;
            let imagen = document.getElementById('img');
            imagen.setAttribute('src', `https://superheroapi.com/api.php/b263cb697abdfe978c51bbfee48142b1/${id}/appearance`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
let btn = document.getElementById('boton');
btn.addEventListener('click', () => {
    buscarSuperheroePorId(document.getElementById('nombre').value);
});

