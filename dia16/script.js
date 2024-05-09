class randomPeople extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.getData();
        this.mouseEvents();
        this.jsonData;
    }
    render(){
        this.innerHTML = `
        <style>@import url('style.css');</style>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
        <main class="container">
            <figure id="photo">
                <img src="" alt="" id="picture">
                <figcaption id="dataText">
                    <h4 id="subTitle">Hi, my name is</h4>
                    <h2 id="title"></h2>
                </figcaption>
            </figure>
            <section class="buttons">
                <div id="name"><i class='bx bx-face' ></i></div>
                <div id="email"><i class='bx bx-envelope'></i></div>
                <div id="birthday"><i class='bx bx-calendar'></i></div>
                <div id="address"><i class='bx bxs-map-pin' ></i></div>
                <div id="phone"><i class='bx bx-phone'></i></div>
                <div id="pass"><i class='bx bx-lock-alt' ></i></div>
            </section>
        </main>
        `;
    }
    writeData(data) {
        let title = document.getElementById('title');
        title.textContent = data
    }
    setData(data) {
        this.jsonData = data;
        console.log(this.jsonData.results[0].picture.large);
        document.getElementById('picture').src=this.jsonData.results[0].picture.large;
        document.getElementById('title').textContent = this.jsonData.results[0].name.first +'' + this.jsonData.results[0].name.last;
    }
    async getData(){
        let URL = 'https://randomuser.me/api/?results=1';
        try {
            const response = await fetch(URL);
            const responseData = await response.json();
            this.setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    
    }
    mouseEvents(){
        let btnName = document.getElementById('name');
        btnName.addEventListener('mouseover', ()=>{
            this.setData(this.jsonData);
        });
        let btnEmail = document.getElementById('email');
        btnEmail.addEventListener('mouseover', ()=>{
            let subtitle = document.getElementById('subTitle');
            subtitle.textContent = 'My email address is';
            this.writeData(this.jsonData.results[0].email);
        });        
        let btnBirthday = document.getElementById('birthday');
        btnBirthday.addEventListener('mouseover', ()=>{
            let subtitle = document.getElementById('subTitle');
            let dob = this.jsonData.results[0].dob.date;
            dob = dob.slice(0, 10);
            let Arraydob = dob.split('-');
            subtitle.textContent = 'My birthday is';
            this.writeData(`${Arraydob[1]}/${Arraydob[2]}/${Arraydob[0]}`);
        });
        let btnPhone = document.getElementById('phone');
        btnPhone.addEventListener('mouseover', () => {
            let subtitle = document.getElementById('subTitle');
            subtitle.textContent = 'My phone number is';
            this.writeData(this.jsonData.results[0].phone);
        });
        let btnAddress = document.getElementById('address');
        btnAddress.addEventListener('mouseover', () => {
            let subtitle = document.getElementById('subTitle');
            subtitle.textContent = 'My address is';
            this.writeData(`${this.jsonData.results[0].location.street.number} ${this.jsonData.results[0].location.street.name}`);
        });
        let pass = document.getElementById('pass');
        pass.addEventListener('mouseover', () => {
            let subtitle = document.getElementById('subTitle');
            subtitle.textContent = 'My password is';
            this.writeData(this.jsonData.results[0].login.password);
        });
}
}

customElements.define('random-people', randomPeople);