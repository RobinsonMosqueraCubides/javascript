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
            delete(dataJson[index]);
            console.log(dataJson);
        }
        else{
            alert('Not found');
        }
    });
}
function editInformation(nameHereo) {
    dataJson.forEach((data, index)=>{
        if (data.nameHero === nameHereo) {
            data.nameHero = document.getElementById('nameHereo').value;
            data.ageActor = document.getElementById('ageActor').value;
            data.nameActor = document.getElementById('nameActor').value;
            data.textUbication = document.getElementById('textUbication').value;
            data.poster = document.getElementById('poster').value;
            data.dateUbication = document.getElementById('dateUbication').value;
            data.productora = document.getElementById('productora').value;
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
let btnEdit = document.getElementById('edit');
btnEdit.addEventListener('click', () => {
    editInformation(document.getElementById('nameHereo').value);
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nameActor').disnabled = false;
    document.getElementById('ageActor').disnabled = false;
    document.getElementById('textUbication').disnabled = false;
    document.getElementById('poster').disnabled = false;
    document.getElementById('dateUbication').disnabled = false;
    document.getElementById('productora').disnabled = false;
    
})