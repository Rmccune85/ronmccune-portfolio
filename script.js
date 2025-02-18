let num1, num2, correctAnswer;

function newQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    document.getElementById("question").innerText = `${num1} + ${num2} = ?`;
    document.getElementById("feedback").innerText = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerText = "Correct!";
    } else {
        document.getElementById("feedback").innerText = "Try again!";
    }
}

// Generate first question when page loads
window.onload = newQuestion;
