
let diceButton = document.getElementById('diceRoll');

const dieTypes = [ 4, 6, 8, 10, 12, 20, 100 ];

function rollDice(dieTypes) {
  let roll = Math.floor(Math.random() * dieTypes) +1;
  alert(roll);
}

var ul = document.createElement('ul');
ul.innerHTML = "Dice List";
ul.id = 'diceList'
document.querySelector('body').append(ul);


//This is the function that dictates the dice rolling buttons.
//It gives the buttons their values of the dice and sets them so that they can only roll within the possible values of the dice.
// I will need to try and separate out the dice rolling function so it can be a global varibale which can be accessible to the advantage and disadvantage functions.

for (const dieType of dieTypes) {
  var btn = document.createElement('button');
  var li = document.createElement('li');
  btn.innerHTML = "D" + `${dieType}`;
  btn.value = dieType;
  ul.append(li);
  li.append(btn);
  btn.addEventListener('click', rollDice)

}

//So far this is the advantage function, will add in a disadvantage function that can do the inverse.

var advantage = document.createElement('button');
advantage.innerHTML = "With Advantage";
document.querySelector('body').append(advantage);
advantage.addEventListener('click', withAdvantage)
  function withAdvantage() {
    let roll1 = Math.floor(Math.random() * 6) +1;
    let roll2 = Math.floor(Math.random() * 6) +1;
    if(roll1 > roll2){
      alert(roll1);
    } else if (roll2 > roll1) {
      alert(roll2);
    }
    console.log(roll1, roll2);
  }

  //For the rolling of any number of dice, will be using a loop function.
  // Going to attempt to use a Do while statement. And introduce a numerical field

  var diceNumber = document.createElement('input');
  diceNumber.innerHTML = "How Many Dice";
  diceNumber.value = 0;
  document.querySelector('body').append(diceNumber);
