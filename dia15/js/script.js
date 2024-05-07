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
    let email = document.getElementById('title');
    let subtitle = document.getElementById('subTitle');
    subtitle.textContent = 'My email address is';
    email.textContent = jsonData.results[0].email;
});
let btnBirthday = document.getElementById('birthday');
btnBirthday.addEventListener('mouseover', ()=>{
    let birthday = document.getElementById('title');
    let subtitle = document.getElementById('subTitle');
    subtitle.textContent = 'My birthday is';
    birthday.textContent = jsonData.results[0].dob.date;
});
let btnPhone = document.getElementById('phone');
btnPhone.addEventListener('mouseover', () => {
    let phone = document.getElementById('title');
    let subtitle = document.getElementById('subTitle');
    subtitle.textContent = 'My phone number is';
    phone.textContent = jsonData.results[0].phone;
});
let btnAddress = document.getElementById('address');
btnAddress.addEventListener('mouseover', () => {
    let address = document.getElementById('title');
    let subtitle = document.getElementById('subTitle');
    subtitle.textContent = 'My address is';
    address.textContent = `${jsonData.results[0].location.street.number} ${jsonData.results[0].location.street.name}, ${jsonData.results[0].location.city}, ${jsonData.results[0].location.state}, ${jsonData.results[0].location.postcode}`;
});
let pass = document.getElementById('pass');
pass.addEventListener('mouseover', () => {
    let password = document.getElementById('title');
    let subtitle = document.getElementById('subTitle');
    subtitle.textContent = 'My password is';
    password.textContent = jsonData.results[0].login.password;
});
getData();