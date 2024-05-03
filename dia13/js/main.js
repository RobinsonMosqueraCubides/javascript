let dataJson = [];
function getInformation() {
    let temDict ={nameHero: document.getElementById('nameHereo').value,
    ageActor: document.getElementById('ageActor').value,
    nameActor: document.getElementById('nameActor').value,
    textUbication: document.getElementById('textUbication').value,
    poster: document.getElementById('poster').value,
    dateUbication: document.getElementById('dateUbication').value,
    productora: document.getElementById('productora').value
    }
    dataJson.push(temDict);
    console.log(dataJson);
}
function deleteInformation(nameHereo) {
    dataJson.forEach((data, index)=>{
        if (data.nameHero === nameHereo) {
            delete(dataJson[0]);
            console.log(dataJson);
        }
        else{
            alert('Not found');
        }
    });
}
let btnSave = document.getElementById('saveHereo');
btnSave.addEventListener('click', () => {
    getInformation();
});
let btnDelete = document.getElementById('delete');
btnDelete.addEventListener('click', () => {
    deleteInformation(document.getElementById('nameHereo').value);
});