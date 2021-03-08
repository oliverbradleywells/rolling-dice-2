let amount = 1000;

const giveAmount = document.querySelector('#amount');
giveAmount.textContent = amount;

const placeBet = () => {
    const betInput = document.querySelector('#bet');
    const betValue = betInput.value;
    return betValue;
}

let side = 1;

const rollDice = () => {
    side = Math.floor(Math.random() * 6) + 1;

    const dice = document.querySelector('#dice');


    if (side === 1) {
        dice.className = 'side-1';

    } else if (side === 2) {
        dice.className = 'side-2';

    } else if (side === 3) {
        dice.className = 'side-3';

    } else if (side === 4) {
        dice.className = 'side-4';

    } else if (side === 5) {
        dice.className = 'side-5';

    } else if (side === 6) {
        dice.className = 'side-6';

    } else {
        return false;
    }
}

const moneyBet = placeBet();

if (side === 6) {
    amount = amount + (moneyBet * 6)
    amountStart.textContent = amount;

} else {
    amount = amount - moneyBet;
    amountStart.textContent = amount;


}
