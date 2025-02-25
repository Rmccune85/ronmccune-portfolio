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
    let expression = display.innerText
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/--/g, '+'); // Handle double negatives

    try {
        // Check for invalid expressions or consecutive operators
        if (/[^0-9+\-*/().]/.test(expression) || /[+\-*/]{2,}/.test(expression)) {
            throw new Error("Invalid input");
        }

        // Calculate and show the result
        const result = Function(`"use strict"; return (${expression})`)();

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

// Keyboard Support for Calculator
document.addEventListener("keydown", function(event) {
    const key = event.key;
    const validKeys = "0123456789+-*/.()";

    if (validKeys.includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
