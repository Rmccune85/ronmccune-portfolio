function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.innerText.replace(/÷/g, '/').replace(/×/g, '*');
    try {
        display.innerText = eval(expression);
    } catch {
        display.innerText = 'Error';
    }
}
