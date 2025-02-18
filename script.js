let num1, num2;

// Generate a New Question
function generateQuestion() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    document.getElementById("question").innerHTML = `
        <div class="math-problem">
            <div>${num1}</div>
            <div>+</div>
            <div>${num2}</div>
            <div>_____</div>
        </div>
    `;
    document.getElementById("result").innerHTML = "";
}

// Check Answer
function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    if (userAnswer == (num1 + num2)) {
        document.getElementById("result").innerHTML = "🎉 Correct!";
        startFireworks(); // Show fireworks on correct answer
    } else {
        document.getElementById("result").innerHTML = "❌ Incorrect, try again!";
    }
}

// Fireworks Effect
function startFireworks() {
    const container = document.body;
    const fireworks = new Fireworks(container, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 100,
        trace: 3,
        explosion: 5,
        intensity: 40,
        flickering: 50,
        lineStyle: 'round',
        hue: { min: 0, max: 360 },
        delay: { min: 30, max: 60 }
    });

    fireworks.start();

    // Stop fireworks after 3 seconds
    setTimeout(() => {
        fireworks.stop();
    }, 3000);
}

// Load the first question when the page loads
window.onload = generateQuestion;
