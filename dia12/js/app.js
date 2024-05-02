const PLAYER_WIN = 'You Win';
const PLAYER_LOSS = 'You Loss';

let playerScore = 0;
let comScore = 0;

function updateScoreDisplay(score, color) {
    const playerScoreDisplay = document.getElementById('playerScore');
    playerScoreDisplay.style.color = color;
    playerScoreDisplay.style.fontWeight = 'bold';
    playerScoreDisplay.style.fontSize = '20px';
    playerScoreDisplay.style.textTransform = 'uppercase';
    playerScoreDisplay.style.textShadow = `0 0 10px ${color}`;
    playerScoreDisplay.textContent = score;
    document.getElementById('hit').disabled = true;
    document.getElementById('stay').disabled = true;
}

function playerWin() {
    updateScoreDisplay(PLAYER_WIN, 'green');
}

function playerLoss() {
    updateScoreDisplay(PLAYER_LOSS, 'red');
}

function calculateScore(valueCard1, valueCard2 = 0) {
    return (isNaN(valueCard1) ? 10 : parseInt(valueCard1)) + (isNaN(valueCard2) ? 10 : parseInt(valueCard2));
}

function updateScore(score, flag) {
    if (flag) {
        playerScore += score;
        document.getElementById('playerScore').textContent = playerScore;
    } else {
        comScore += score;
        console.log(comScore);
    }

    if (playerScore > 21) {
        playerLoss();
    } else if (playerScore === 21) {
        playerWin();
    }
}

function updateCards(deck, selector) {
    const cardsContainer = document.querySelector(selector);

    deck.forEach((card, index) => {
        const newCard = document.createElement('img');
        newCard.src = card.image;
        newCard.alt = '';
        newCard.id = `card${index + 1}`;
        newCard.classList.add('playerCards');
        cardsContainer.appendChild(newCard);
    });
}

function drawCards(deckId, count, flag) {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            updateCards(data.cards, flag ? '.playerContCards' : '.comContcards');
            return data;
        })
        .catch(error => console.error('Hubo un error en la solicitud:', error));
}

function playGame(deckId, flag) {
    const cardCount = flag ? 2 : 1;
    return drawCards(deckId, cardCount, flag)
        .then(data => {
            const score = flag ? calculateScore(data.cards[0].value, (cardCount === 2 ? data.cards[1].value : 0)) : calculateScore(data.cards[0].value);
            updateScore(score, flag);
            return data;
        })
        .catch(error => console.error('Hubo un error en la solicitud:', error));
}

function startGame() {
    const numRandom1 = Math.floor(Math.random() * 10) + 1;
    const numRandom2 = Math.floor(Math.random() * 10) + 1;
    const urls = [`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numRandom1}`, `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numRandom2}`];

    Promise.all(urls.map(url => fetch(url).then(response => response.json()).then(({ deck_id }) => deck_id)))
        .then(([playerDeckId, comDeckId]) => {
            return playGame(playerDeckId, true).then(() => playGame(comDeckId, false));
        })
        .catch(error => console.error('Hubo un error en la solicitud:', error));
}

document.addEventListener('DOMContentLoaded', startGame);

const hitButton = document.getElementById('hit');
hitButton.addEventListener('click', () => {
    const numRandom1 = Math.floor(Math.random() * 10) + 1;
    const urls = [`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numRandom1}`];
    getIdDeck(urls);
});
function getIdDeckCom() {
    if (comScore < 21) {
        const numRandom1 = Math.floor(Math.random() * 10) + 1;
        const urls = [`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numRandom1}`];
        Promise.all(urls.map(url => fetch(url).then(response => response.json()).then(({ deck_id }) => deck_id)))
            .then(([comDeckId]) => playGame(comDeckId, false))
            .catch(error => console.error('Hubo un error en la solicitud:', error));
    } else if (comScore > 21) {
        playerWin();
    } else if (comScore >= playerScore) {
        playerLoss();
    }
}
const stayButton = document.getElementById('stay');
stayButton.addEventListener('click', () => {
    console.log('hold');
    document.querySelector('.comContcards #card1').style.display = 'block';
    getIdDeckCom();
});

