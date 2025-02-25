// script-calculator.js

// Append Value to Display
function appendToDisplay(value) {
    const display = document.getElementById('display');

    // If the display shows '0' or 'Error', replace it
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear Display
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

// Delete Last Character
function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

// Calculate Result
function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.innerText.replace(/÷/g, '/').replace(/×/g, '*');

    try {
        // Check for invalid expressions
        if (/[^0-9+\-*/().]/.test(expression)) {
            throw new Error("Invalid input");
        }

        // Calculate and show the result
        const result = eval(expression);

        // Check if result is undefined or NaN
        if (result === undefined || isNaN(result)) {
            display.innerText = 'Error';
        } else {
            display.innerText = result;
        }
    } catch {
        display.innerText = 'Error';
    }
}
