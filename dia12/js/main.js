function updateCom(deck){
    let card1 = deck[0].image;
    let card2 = deck[1].image;
    document.getElementById('card3').src = card1;
    document.getElementById('card4').src = card2;
}
function updatePlayer(deck) {
    const playerCards = document.querySelectorAll('img.playerCards');
    if (playerCards.length >= 2) {
        console.log('hola card');
        let newCard = document.createElement('img');
        newCard.src = deck[0].image;
        newCard.alt = "";
        newCard.id = `card${playerCards.length + 1}`;
        newCard.classList.add('playerCards');
        document.querySelector('.playerContCards').appendChild(newCard);
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
    }
}

function getCards(id) {
    id.forEach((deckId, index) => {
        let url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (index === 0) updatePlayer(data.cards);
                else if (index === 1) updateCom(data.cards);
            })
            .catch(error => console.error('Hubo un error en la solicitud:', error));
    });
}
function getIdDeck(urls) {
    let promises = urls.map(url =>
        fetch(url)
            .then(response => response.json())
            .then(({ deck_id }) => deck_id)
    );

    Promise.all(promises)
        .then(array => getCards(array))
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
