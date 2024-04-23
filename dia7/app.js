function buscarSuperheroePorId(id) {

    let url = `https://superheroapi.com/api/b263cb697abdfe978c51bbfee48142b1/${id}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la información del superhéroe.');
            }
            return response.json();
        })
        .then(data => {
            console.log(url);
            console.log(data.name);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
let btn = document.getElementById('boton');
btn.addEventListener('click', () => {
    buscarSuperheroePorId(document.getElementById('nombre').value);
});

