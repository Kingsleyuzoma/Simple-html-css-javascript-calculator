
let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    const lastChar = currentInput.slice(-1);
    if ('+-*/'.includes(lastChar)) return;
    currentInput += op;
    updateDisplay();   
}

function clearDisplay() {
    currentInput = '' ;
    updateDisplay()
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay()
    } catch  {
        currentInput = 'Error';
        updateDisplay()
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput || '0'
}