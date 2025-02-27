// ===========================
// Dice Game JavaScript
// ===========================

// Function to roll all 6 dice
function rollAllDice() {
    const numRolls = parseInt(document.getElementById('numRolls').value);
    if (isNaN(numRolls) || numRolls <= 0) {
        alert("Please enter a valid number of rolls.");
        return;
    }

    // Initialize counters
    let counts = [0, 0, 0, 0, 0, 0];

    // Roll all 6 dice for numRolls times
    for (let i = 0; i < numRolls; i++) {
        for (let j = 1; j <= 6; j++) {
            const roll = Math.floor(Math.random() * 6) + 1;
            counts[roll - 1]++;
        }
    }

    // Display dice images and results
    for (let i = 0; i < counts.length; i++) {
        document.getElementById(`dice${i + 1}`).src = `images/dice${i + 1}.jpg`;
        document.getElementById(`count${i + 1}`).innerText = counts[i];
    }
}

// Function to clear the results
function clearResults() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`count${i}`).innerText = "0";
    }
    document.getElementById('numRolls').value = "";
}

// 📌 Signature  
// ───── ByteShifter ─────  
// Crafted with 💻 & ☕  
