
let diceButton = document.getElementById('diceRoll');

diceButton.addEventListener('click', rollDice)
  function rollDice() {
    let roll = Math.floor(Math.random() * 6) +1;
    alert(roll);
}
const dieTypes = [ 4, 6, 8, 10, 12, 20, 100 ];

for (const dieType of dieTypes) {
  document.appendChild('diceList');
}
