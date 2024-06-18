let currentInput = '';
let previousInput = '';
let operation = null;

// Function to add a number to the current input
function appendNumber(number) {
    currentInput += number; // Add the clicked number to the current input
    updateDisplay(); // Update the display with the current input
}

// Function to add a decimal point to the current input
function appendDecimal() {
    if (!currentInput.includes('.')) { // Only add decimal if it's not already present
        currentInput += '.';
        updateDisplay();
    }
}

// Function to set the operation (+, -, *, /)
function setOperation(op) {
    if (currentInput === '') return; // Do nothing if there's no current input

    if (previousInput !== '') { // If there's already a previous input, calculate the result first
        calculateResult();
    }
    operation = op; // Store the selected operation
    previousInput = currentInput; // Store the current input as the previous input
    currentInput = ''; // Reset the current input
    updateDisplay(); // Update the display to show the operation
}

// Function to clear the display and reset all variables
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}

// Function to delete the last digit from the current input
function deleteNumber() {
    currentInput = currentInput.slice(0, -1); // Remove the last character from the current input
    updateDisplay();
}

// Function to update the calculator display with the current input and operation
function updateDisplay() {
    const display = document.getElementById('inputval'); // Get the display element
    display.value = previousInput + (operation || '') + currentInput; // Set its value to show the previous input, operation, and current input
}

// Function to calculate the result of the operation
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput); // Convert the previous input to a number
    const current = parseFloat(currentInput); // Convert the current input to a number

    if (isNaN(prev) || isNaN(current)) return; // If either input is not a number, do nothing

    switch (operation) { // Perform the operation based on the selected operator
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString(); // Convert the result back to a string
    operation = null; // Reset the operation
    previousInput = ''; // Clear the previous input
    updateDisplay(); // Update the display with the result
}
