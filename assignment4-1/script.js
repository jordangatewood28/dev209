const cards = document.querySelectorAll(".game-card");
let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

var attempts = 0;
document.querySelector(".attempts").textContent = attempts;


(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!flippedCard){
        flippedCard = true;
        firstCard = this;
        if (sessionStorage) {
            sessionStorage.setItem('card1', JSON.stringify(firstCard));
        }

        return;
    }

    secondCard = this;
    if (sessionStorage) {
        sessionStorage.setItem('card2', JSON.stringify(secondCard));
    }
    
    checkMatch()
    ++attempts;
    document.querySelector(".attempts").textContent = attempts;
    if (sessionStorage) {
        sessionStorage.setItem('savedAttempts', JSON.stringify(attempts));
    }
}

function checkMatch(){
    let Match = firstCard.dataset.framework === secondCard.dataset.framework;

    Match ? disableCards() : unflipCard();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetCards()
}

function unflipCard(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetCards();
    }, 1000)
}

function resetCards() {
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard))

function restart() {
    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    })();
    resetCards();
    document.querySelectorAll(".game-card").forEach((card) => {
        card.classList.remove("flip");
    });
    flippedCard = false;
    firstCard = null;
    secondCard = null;
    sessionStorage.clear(saveAttempts)
    attempts = 0;
    document.querySelector(".attempts").textContent = attempts;
    flippedCard = false;
    lockBoard = false;
    firstCard, secondCard;
    cards.forEach(card => card.addEventListener('click', flipCard))
}

if (sessionStorage) {
    let saveCard1 = sessionStorage.getItem('card1');
    let saveCard2 = sessionStorage.getItem('card2');
    var saveAttempts = sessionStorage.getItem('savedAttempts');
    console.log(saveCard1);
    console.log(saveCard2)
    if (saveCard1, saveCard2) {
        firstCard = JSON.parse(saveCard1);
        secondCard = JSON.parse(saveCard2)
    }
    console.log(saveAttempts);
    if (saveAttempts) {
        document.querySelector(".attempts").textContent = attempts;
        attempts = JSON.parse(saveAttempts);
    }
}
else {
    console.log("sessionStorage is not supported")
}
