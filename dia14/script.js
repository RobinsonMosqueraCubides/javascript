let dataJson =[];
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('characterName').disabled=true;
    document.getElementById('actorName').disabled=true;
    document.getElementById('age').disabled=true;
    document.getElementById('cityName').disabled=true;
    document.getElementById('poster').disabled=true;
    document.getElementById('dateAppears').disabled=true;
    document.getElementById('producer').disabled=true;
    document.getElementById('addSuite').disabled=true;
});
let btnNewHereo = document.getElementById('newHereo');
btnNewHereo.addEventListener('click',() =>{
    document.getElementById('characterName').disabled=false;
    document.getElementById('actorName').disabled=false;
    document.getElementById('age').disabled=false;
    document.getElementById('cityName').disabled=false;
    document.getElementById('poster').disabled=false;
    document.getElementById('dateAppears').disabled=false;
    document.getElementById('producer').disabled=false;
    document.getElementById('addSuite').disabled=false;
});
function getInformation() {
    let temDict ={nameHero: document.getElementById('characterName').value,
    ageActor: document.getElementById('actorName').value,
    nameActor: document.getElementById('age').value,
    textUbication: document.getElementById('cityName').value,
    poster: document.getElementById('poster').value,
    dateUbication: document.getElementById('dateAppears').value,
    productora: document.getElementById('producer').value
    }
    dataJson.push(temDict);
    console.log(dataJson);
}
let btnSaveHereo = document.getElementById('saveHereo');
btnSaveHereo.addEventListener('click',() =>{
    getInformation();
});
let btnCancel = document.getElementById('cancel');
btnCancel.addEventListener('click',() =>{
    document.getElementById('characterName').value = '';
    document.getElementById('actorName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('cityName').value = '';
    document.getElementById('poster').value = '';
    document.getElementById('dateAppears').value = '';
});