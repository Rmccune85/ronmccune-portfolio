let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    
    document.getElementById("num1").innerText = num1;
    document.getElementById("num2").innerText = num2;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    let correctAnswer = num1 + num2;

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "✅ Correct!";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerText = "❌ Wrong, try again!";
        document.getElementById("result").style.color = "red";
    }
}

// Ensure the first question loads when the page opens
document.addEventListener("DOMContentLoaded", generateQuestion);
