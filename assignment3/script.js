const cards = document.querySelectorAll(".game-card");
let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let attempts = 0;
document.querySelector(".attempts").textContent = attempts;
attempts++;

let startTime;
let timerStarted = false;
let timerInterval;

function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos
    });
};

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!flippedCard){
        flippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkMatch()
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

function restart() {
    resetCards();
    shuffle();
    attempts = 0;
    document.querySelector(".attempts").textContent = attempts;
}

cards.forEach(card => card.addEventListener('click', flipCard))