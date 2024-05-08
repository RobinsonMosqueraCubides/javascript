let jsonData;
function setData(data) {
    jsonData = data;
    let photo = document.getElementById('picture');
    photo.src = data.results[0].picture.large;
    let title = document.getElementById('title');
    title.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`
    let subtitle = document.getElementById('subTitle');
    subtitle.textContent = 'Hi, my name is';
    console.log(data.results[0]);
}
function writeData(data) {
    let title = document.getElementById('title');
    title.textContent = data
}
async function getData(){
    let URL = 'https://randomuser.me/api/?results=1';
    try {
        const response = await fetch(URL);
        const responseData = await response.json();
        setData(responseData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}
let btnName = document.getElementById('name');
btnName.addEventListener('mouseover', ()=>{
    setData(jsonData);
});
let btnEmail = document.getElementById('email');
btnEmail.addEventListener('mouseover', ()=>{
    let subtitle = document.getElementById('subTitle');
    subtitle.textContent = 'My email address is';
    writeData(jsonData.results[0].email);
});
let btnBirthday = document.getElementById('birthday');
btnBirthday.addEventListener('mouseover', ()=>{
    let subtitle = document.getElementById('subTitle');
    let dob = jsonData.results[0].dob.date;
    dob = dob.slice(0, 10);
    let Arraydob = dob.split('-');
    subtitle.textContent = 'My birthday is';
    writeData(`${Arraydob[1]}/${Arraydob[2]}/${Arraydob[0]}`);
});
let btnPhone = document.getElementById('phone');
btnPhone.addEventListener('mouseover', () => {
    let subtitle = document.getElementById('subTitle');
    subtitle.textContent = 'My phone number is';
    writeData(jsonData.results[0].phone);
});
let btnAddress = document.getElementById('address');
btnAddress.addEventListener('mouseover', () => {
    let subtitle = document.getElementById('subTitle');
    subtitle.textContent = 'My address is';
    writeData(`${jsonData.results[0].location.street.number} ${jsonData.results[0].location.street.name}`);
});
let pass = document.getElementById('pass');
pass.addEventListener('mouseover', () => {
    let subtitle = document.getElementById('subTitle');
    subtitle.textContent = 'My password is';
    writeData(jsonData.results[0].login.password);
});
getData();