let a = document.getElementById("userValue01");
let b = document.getElementById("decre");
let c = document.getElementById("incre");


b.addEventListener("click", decrement01);

function decrement01(){
  let previous = a.value;
  let new01 = parseInt(previous) - 10;
  a.value = new01;

}
c.addEventListener("click", increment01);

function increment01(){
  let previous = a.value;
  let new01 = parseInt(previous) + 10;
  a.value = new01;

}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('startButton').addEventListener('click', function() {
  var selectedNumber = null;
  var numberButtons = document.querySelectorAll('.butn03');
  var resultElement = document.getElementById('res');
  for (var i = 0; i < numberButtons.length; i++) {
    if (numberButtons[i].classList.contains('selected')) {
      selectedNumber = numberButtons[i];
      break;
    }
  }
  if (!selectedNumber) {
    resultElement.innerText = "Please select a card first.";
    resultElement.style.color = "yellow";
    return;
  }
  var diceElement = document.getElementById('dice');
  diceElement.style.animation = 'rotate 5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards';
  var diceSound = new Audio('diceanimation.mp3');
  diceSound.play();

  setTimeout(function() {
    diceElement.style.animation = 'none';
    diceSound.pause();
    var faces = document.getElementsByClassName('face');
    var randomIndex = getRandomInt(0, faces.length - 1);
    var randomFace = faces[randomIndex];
    var randomNumbers = [];
    for (var i = 0; i < faces.length; i++) {
      randomNumbers[i] = getRandomInt(1, 6);
    }
    for (var i = 0; i < faces.length; i++) {
      faces[i].innerHTML = randomNumbers[i];
    }

    var generatedNumber = randomNumbers[0];
    var message = "";
    if (parseInt(selectedNumber.innerText) === generatedNumber) {
      message = "Congratulations! You won. The Generated number is: " + generatedNumber;
      resultElement.style.color = "green";
    } else {
      message = "Sorry, you lose. Please try again. The Generated number is: " + generatedNumber;
      resultElement.style.color = "red";
    }
    resultElement.innerText = message;
  }, 2000);
});

var numberButtons = document.querySelectorAll('.butn03');
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function() {
    var prevSelected = document.querySelector('.butn03.selected');
    if (prevSelected) {
      prevSelected.classList.remove('selected');
      prevSelected.style.backgroundColor = '';
    }
    this.classList.add('selected');
    this.style.backgroundColor = 'green';
  });
}

function resetSelection() {
  var selectedButton = document.querySelector('.butn03.selected');
  var resultElement = document.getElementById('res');
  if (selectedButton) {
    selectedButton.classList.remove('selected');
    selectedButton.style.backgroundColor = '';
  }
  resultElement.innerText = '';
  resultElement.style.color = '';
}

var resetButton = document.getElementById('restar');
resetButton.addEventListener('click', resetSelection);





















  
  
































  