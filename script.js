let num1, num2, correctAnswer;

function generateProblem() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 + num2;
    document.getElementById("problem").innerHTML = `
        <div>${num1}</div>
        <div>+</div>
        <div>${num2}</div>
        <hr style="width: 100px; margin: auto;">
    `;
    document.getElementById("answer").value = "";
    document.getElementById("message").innerHTML = "";
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    if (userAnswer === correctAnswer) {
        document.getElementById("message").innerHTML = "Correct!";
        triggerFireworks();
    } else {
        document.getElementById("message").innerHTML = "Try Again!";
    }
}

function triggerFireworks() {
    let fireworks = document.getElementById("fireworks");
    fireworks.style.display = "block";
    
    setTimeout(() => {
        fireworks.style.display = "none";
    }, 3000);
}

// Run on page load
generateProblem();
