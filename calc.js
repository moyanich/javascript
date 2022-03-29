let total = 0;

document.querySelector('#addZero').addEventListener('click', makeZero);
document.querySelector('#addThree').addEventListener('click', makeThree);
document.querySelector('#addNine').addEventListener('click', makeNine);
document.querySelector('#addTwelve').addEventListener('click', makeTwelve);
document.querySelector('#add15').addEventListener('click', addFifteen);
document.querySelector('#minusThirty').addEventListener('click', minusThirty);

function makeZero() {
      total = total + 0;
      document.querySelector('.result').innerText = total;
}
function makeThree() {
      total =  total + 3;
      document.querySelector('.result').innerText = total;
}
function makeNine() {
      total =  total + 9;
      document.querySelector('.result').innerText = total;
}
function makeTwelve() {
      total =  total + 12;
      document.querySelector('.result').innerText = total;
}
function addFifteen() {
      total =  total + 15;
      document.querySelector('.result').innerText = total;
}

function minusThirty() {
      total =  total - 30;
      document.querySelector('.result').innerText = total;
}

