
let diceButton = document.getElementById('diceRoll');

diceButton.addEventListener('click', rollDice)
  function rollDice() {
    let roll = Math.floor(Math.random() * 6) +1;
    alert(roll);
}
const dieTypes = [ 4, 6, 8, 10, 12, 20, 100 ];


var ul = document.createElement('ul');
ul.innerHTML = "Dice List";
ul.id = 'diceList'
document.querySelector('body').append(ul);



for (const dieType of dieTypes) {
  var btn = document.createElement('button');
  var li = document.createElement('li');
  btn.innerHTML = "Dice";
  ul.append(li);
  li.append(btn);
}
