let numberInput = document.getElementById('numberguest');
let minusButton = document.getElementById('min');
let plusButton = document.getElementById('pl');

minusButton.addEventListener('click', function() {
  let currentValue = parseInt(numberInput.value);
  if (currentValue > 0)
  {
    numberInput.value = currentValue - 1;
  }
});

plusButton.addEventListener('click', function() {
  let currentValue = parseInt(numberInput.value);
  numberInput.value = currentValue + 1;
});