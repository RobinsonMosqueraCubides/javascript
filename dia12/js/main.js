let playerScore = 0, comScore = 0;
function playerWin() {
    document.getElementById('playerScore').style.color = 'green';
    document.getElementById('playerScore').style.fontWeight = 'bold';
    document.getElementById('playerScore').style.fontSize = '20px';
    document.getElementById('playerScore').style.textTransform = 'uppercase';
    document.getElementById('playerScore').style.textShadow = '0 0 10px green';
    document.getElementById('playerScore').textContent = 'You Win';
    document.getElementById('hit').disabled=true;
    document.getElementById('stay').disabled=true;
}
function playerLoss(){
    document.getElementById('playerScore').style.color ='red';
    document.getElementById('playerScore').style.fontWeight = 'bold';
    document.getElementById('playerScore').style.fontSize = '20px';
    document.getElementById('playerScore').style.textTransform = 'uppercase';
    document.getElementById('playerScore').style.textShadow = '0 0 10px red';
    document.getElementById('playerScore').textContent = 'You Loss';
    document.getElementById('hit').disabled=true;
    document.getElementById('stay').disabled=true;
}
function getPlayerScore(valueCard1, valueCard2=0) {
    playerScore += (isNaN(valueCard1) ? 10 : parseInt(valueCard1)) + (isNaN(valueCard2) ? 10 : parseInt(valueCard2));
    document.getElementById('playerScore').textContent = playerScore;
    if (playerScore > 21) {
        playerLoss();
    }
    else if (playerScore == 21) {
        playerWin();
    }
}
function updateCom(deck){
    document.getElementById('card3').src = deck[0].image;
    document.getElementById('card4').src = deck[1].image;
}
function updatePlayer(deck) {
    const playerCards = document.querySelectorAll('img.playerCards');
    if (playerCards.length >= 2) {
        let newCard = document.createElement('img');
        newCard.src = deck[0].image;
        newCard.alt = "";
        newCard.id = `card${playerCards.length + 1}`;
        newCard.classList.add('playerCards');
        document.querySelector('.playerContCards').appendChild(newCard);
        getPlayerScore(deck[0].value);
    }
    else {
        let newCard = document.createElement('img');
        newCard.src = deck[0].image;
        newCard.alt = "";
        newCard.id = `card${playerCards.length + 1}`;
        newCard.classList.add('playerCards');
        document.querySelector('.playerContCards').appendChild(newCard);
        let newCard2 = document.createElement('img');
        newCard2.src = deck[1].image;
        newCard2.alt = "";
        newCard2.id = `card${playerCards.length + 2}`;
        newCard2.classList.add('playerCards');
        document.querySelector('.playerContCards').appendChild(newCard2);
        getPlayerScore(deck[0].value, deck[1].value);
    }
}

function getCards(id, flag) {
    if (!flag) {
    id.forEach((deckId, index) => {
        let url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (index === 0) updatePlayer(data.cards);
                else if (index === 1) updateCom(data.cards);
            })
            .catch(error => console.error('Hubo un error en la solicitud:', error));
    });}
    else{
        id.forEach((deckId, index) => {
            let url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (index === 0) updateCom(data.cards);
                })
                .catch(error => console.error('Hubo un error en la solicitud:', error));
        });
    }
}
function getIdDeck(urls, flag = false) {
    let promises = urls.map(url =>
        fetch(url)
            .then(response => response.json())
            .then(({ deck_id }) => deck_id)
    );

    Promise.all(promises)
        .then(array => getCards(array, flag))
        .catch(error => console.error('Hubo un error en la solicitud:', error));
}
document.addEventListener('DOMContentLoaded', () =>{
    let numRandom1 = Math.floor(Math.random() * 10) + 1;
    let numRandom2 = Math.floor(Math.random() * 10) + 1;
    const urls = [`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numRandom1}`, `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numRandom2}`];
    getIdDeck(urls);
});
let btnDrop = document.getElementById('hit');
btnDrop.addEventListener('click', () => {
    let numRandom1 = Math.floor(Math.random() *10) + 1;
    const urls = [`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numRandom1}`]
    getIdDeck(urls);
});
let btnStay = document.getElementById('stay');
btnStay.addEventListener('click', () => {
    let numRandom1 = Math.floor(Math.random() *10) + 1;
    const urls = [`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numRandom1}`]
    getIdDeck(urls, flag = true);
});
