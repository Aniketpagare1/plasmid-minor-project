// Getting the display element
const display = document.getElementById('display');

// Initial display value
let displayValue = '0';

// Event listeners for number buttons
document.querySelectorAll('.btn-light').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (displayValue === '0') {
            displayValue = value;
        } else {
            displayValue += value;
        }
        updateDisplay();
    });
});

// Event listeners for operation buttons
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        performOperation(value);
    });
});

// Event listener for equals button
document.getElementById('equals').addEventListener('click', () => {
    calculateResult();
});

// Event listener for clear button
document.getElementById('clear').addEventListener('click', () => {
    displayValue = '0';
    updateDisplay();
});

// Function to update the display
function updateDisplay() {
    display.innerText = displayValue;
}

// Function to perform operations
function performOperation(operation) {
    if (operation === 'x²') {
        displayValue = (parseFloat(displayValue) ** 2).toString();
    } else {
        displayValue += ` ${operation} `;
    }
    updateDisplay();
}

// Function to calculate the result
function calculateResult() {
    try {
        displayValue = eval(displayValue.replace('x²', '**2')).toString();
    } catch (e) {
        displayValue = 'Error';
    }
    updateDisplay();
}
