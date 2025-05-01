const gridContainer = document.querySelector(".game-card");
let firstCard, secondCard;
let FlippedCard = false;
let lockBoard = false;
let attempts = 0;

document.querySelector(".attempts").textContent = attempts;

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!FlippedCard){
        FlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    CheckMatch()
}

function CheckMatch(){
    let Match = firstCard.dataset.framework === secondCard.dataset.framework;

    Match ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
}

function unflipCard(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        reset();
    }, 1000)
}

function reset() {
    [FlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard))