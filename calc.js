let total = 0;

document.querySelector('#addZero').addEventListener('click', makeZero);
document.querySelector('#addNine').addEventListener('click', makeNine);


function makeZero() {
      total = 0;
      document.querySelector('.result').innerText = total;
}
function makeNine() {
      total =  total + 9;
      document.querySelector('.result').innerText = total;
}