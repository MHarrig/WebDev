
let diceButton = document.getElementById('diceRoll');

diceButton.addEventListener('onclick', rollDice)
  function rollDice() {
    let roll = Math.floor(Math.random() * 6) +1;
    alert(roll);
}
