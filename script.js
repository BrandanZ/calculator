function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

function operate(firstNum, operator, secondNum) {
    if (operator === '+') {
        return add(firstNum, secondNum)
    } else if (operator === '-') {
        return subtract(firstNum, secondNum)
    } else if (operator === 'x') {
        return multiply(firstNum, secondNum)
    } else if (operator === '÷') {
        return divide(firstNum, secondNum)
    } else {
        return "Invalid operator"
    }
}

let calculation = {
  firstNum: null,
  operator: null,
  secondNum: null
};

let displayValue = '';
let isNewCalculation = false;

function calculate() {
  if (calculation.firstNum !== null && calculation.operator && calculation.secondNum !== null) {
    let result = operate(parseFloat(calculation.firstNum), calculation.operator, parseFloat(calculation.secondNum));
    
    if (typeof result === "number") {
        result = parseFloat(result.toFixed(2));
    }
    
    displayValue = '' + result;
    calculation.firstNum = displayValue;
    calculation.operator = null;
    calculation.secondNum = null;
    displayNumber.textContent = displayValue;
  }
}

let displayNumber = document.querySelector('.display-number');
let numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === "." && displayValue.includes('.')) {
      return;
    }
    if (isNewCalculation) {
      displayValue = '';
      isNewCalculation = false;
    }
    displayValue += button.textContent;
    displayNumber.textContent = displayValue;
    if (calculation.operator) {
      calculation.secondNum = displayValue;
    } else {
      calculation.firstNum = displayValue;
    }
  });
});

let clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
  calculation.firstNum = null;
  calculation.operator = null;
  calculation.secondNum = null;
  displayValue = '';
  displayNumber.textContent = displayValue;
  isNewCalculation = false;
});

let operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (calculation.firstNum !== null && calculation.operator && calculation.secondNum !== null) {
      calculate();
      isNewCalculation = true;
    }
    calculation.operator = button.textContent;
    displayValue = '';
  });
});

let equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
  calculate();
  isNewCalculation = true;
});