
let diceButton = document.getElementById('diceRoll');

const dieTypes = [ 4, 6, 8, 10, 12, 20, 100 ];


var ul = document.createElement('ul');
ul.innerHTML = "Dice List";
ul.id = 'diceList'
document.querySelector('body').append(ul);



for (const dieType of dieTypes) {
  var btn = document.createElement('button');
  var li = document.createElement('li');
  btn.innerHTML = "D" + `${dieType}`;
  btn.value = dieType;
  ul.append(li);
  li.append(btn);
  btn.addEventListener('click', rollDice)
    function rollDice(dieTypes) {
      let roll = Math.floor(Math.random() * dieType) +1;
      alert(roll);
  }

}
