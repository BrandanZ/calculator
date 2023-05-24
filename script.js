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
    return a / b;
}

let firstNum = 0;
let operator = '';
let secondNum = 0;

function operate(firstNum, operator, secondNum) {
    if (operator === '+') {
        return add(firstNum,secondNum)
    }
    else if (operator === '-') {
        return subtract(firstNum, secondNum)
    }
    else if (operator === '*') {
        return multiply(firstNum, secondNum)
    }
    else if (operator === '/') {
        return divide(firstNum, secondNum)
    }
    else {
        return "Invalid operator"
    }
}

let displayValue = '';

let displayNumber = document.querySelector('.display-number');
let numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === "." && displayValue.includes('.')) {
            return;
        }
        displayValue += button.textContent;
        displayNumber.textContent = displayValue;            
    });
});

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    displayValue = '';
    displayNumber.textContent = displayValue;
});