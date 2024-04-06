let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let currentOperation = null;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    operand1 = '';
    operand2 = '';
    currentOperation = null;
}

function operation(op) {
    operand1 = display.value;
    display.value = '';
    currentOperation = op;
}

function calculate() {
    operand2 = display.value;
    let result = 0;
    switch (currentOperation) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    display.value = result;
    operand1 = '';
    operand2 = '';
    currentOperation = null;
}

function calculatePercentage() {
    let result;
    let value = parseFloat(operand2);
    switch (currentOperation) {
        case '+':
            result = operand1 + (operand1 * (value / 100));
            break;
        case '-':
            result = operand1 + (operand1 * (value / 100));
            break;
        case '*':
            result = operand1 + (operand1 * (value / 100));
            break;
        case '/':
            result = operand1 + (operand1 * (value / 100));
            break;
    }
    
    display.value = result;
}

function calculateSquare() {
    display.value = Math.pow(parseFloat(display.value), 2);
}

function calculateSqrt() {
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculateSin() {
    display.value = Math.sin(parseFloat(display.value) * (Math.PI / 180));
}

function calculateCos() {
    display.value = Math.cos(parseFloat(display.value) * (Math.PI / 180));
}

function calculateTan() {
    display.value = Math.tan(parseFloat(display.value) * (Math.PI / 180));
}

function calculateCot() {
    display.value = 1 / Math.tan(parseFloat(display.value) * (Math.PI / 180));
}

function calculateLog() {
    display.value = Math.log10(parseFloat(display.value));
}

