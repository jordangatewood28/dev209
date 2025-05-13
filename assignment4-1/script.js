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

        return;
    }

    if (localStorage) {
        localStorage.setItem('flippedCard', JSON.stringify(cards));
    }

    secondCard = this;
    checkMatch()
    ++attempts;
    document.querySelector(".attempts").textContent = attempts;
    if (localStorage) {
        localStorage.setItem('savedAttempts', JSON.stringify(attempts));
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
    if (localStorage) {
        localStorage.setItem('flippedCard', JSON.stringify(cards));
    }
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
    localStorage.clear(saveAttempts)
    document.querySelector(".attempts").textContent = attempts;
    flippedCard = false;
    lockBoard = false;
    firstCard, secondCard;
    cards.forEach(card => card.addEventListener('click', flipCard))
}

if (localStorage) {
    const saveCardState = localStorage.getItem('flippedCard');
    var saveAttempts = localStorage.getItem('savedAttempts');
    console.log(saveCardState);
    if (saveCardState) {
        const cards = JSON.parse(saveCardState);
    }
    console.log(saveAttempts);
    if (saveAttempts) {
        attempts = JSON.parse(saveAttempts);
    }
}
else {
    console.log("localstorage is not supported")
}