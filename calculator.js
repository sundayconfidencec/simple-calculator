let result = document.getElementById('result');
let calculation = '';

function appendValue(value) {
  calculation += value;
  result.value = calculation;
}

function calculate() {
  try {
    result.value = eval(calculation);
    calculation = result.value;
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  calculation = '';
  result.value = '';
}
