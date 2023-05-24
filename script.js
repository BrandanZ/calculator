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
    else if (operator === 'x') {
        return multiply(firstNum, secondNum)
    }
    else if (operator === '÷') {
        if (secondNum == 0) {
            return 'Cannot divide by zero';
        }
        return divide(firstNum, secondNum)
    }
    else {
        return "Invalid operator"
    }
}

let displayValue = '';

let displayNumber = document.querySelector('.display-number');
let numberButtons = document.querySelectorAll('.number');

let isNewNumber = true;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === "." && displayValue.includes('.')) {
            return;
        }

        if (isNewNumber) {
            displayValue = '';
            isNewNumber = false;
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

let operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNum && operator) {
            secondNum = parseFloat(displayValue);
            let result = operate(parseFloat(firstNum), operator, secondNum);

            result = parseFloat(result.toFixed(2));
            displayValue = '' + result;
            displayNumber.textContent = displayValue;

            firstNum = result;
            operator ='';
        } else {
            firstNum = displayValue;
            operator = button.textContent;  
            isNewNumber = true;     
        }
    });
});

let equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    if (firstNum && operator) {
        secondNum = parseFloat(displayValue);
        let result = operate(parseFloat(firstNum), operator, secondNum);

        result = parseFloat(result.toFixed(2));
        displayValue = '' + result;
        displayNumber.textContent = displayValue;

        firstNum = result;
        operator = '';
    }
    isNewNumber = true;
});