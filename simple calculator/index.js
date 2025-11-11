let displayValue = '';
let num1 = '';
let num2 = '';
let operator = '';

function appendNumber(number) {
  if (operator === '') {
    num1 += number.toString();
    displayValue += number.toString();
  } else {
    num2 += number.toString();
    displayValue += number.toString();
  }
  document.getElementById('display').value = displayValue;
}

function appendOperator(op) {
  if (num1 !== '') {
    operator = op;
    displayValue += op.toString();
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  if (num1 !== '' && num2 !== '' && operator !== '') {
    let result;
    if (operator === '+') {
      result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === '-') {
      result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === '*') {
      result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === '/') {
      if (num2 !== '0') {
        result = parseFloat(num1) / parseFloat(num2);
      } else {
        document.getElementById('display').value = 'Error';
        return;
      }
    }
    displayValue = result.toString();
    num1 = result.toString();
    num2 = '';
    operator = '';
    document.getElementById('display').value = displayValue;
  }
}

function clearDisplay() {
  displayValue = '';
  num1 = '';
  num2 = '';
  operator = '';
  document.getElementById('display').value = '';
}

function deleteNumber() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === '') {
    displayValue = '0';
  }
  document.getElementById('display').value = displayValue;
}