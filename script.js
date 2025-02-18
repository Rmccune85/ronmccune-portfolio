// Fireworks effect setup
const fireworksContainer = document.getElementById("fireworks-container");
const fireworks = new Fireworks(fireworksContainer, {
    maxRockets: 5, // Max simultaneous fireworks
    rocketSpawnInterval: 200, // Rocket spawn speed
    numParticles: 100, // Number of particles per explosion
    explosionMinHeight: 0.2, // Minimum explosion height
    explosionMaxHeight: 0.9, // Maximum explosion height
    explosionChance: 0.08, // Random explosion chance
});

let num1, num2, correctAnswer;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    
    document.getElementById("num1").textContent = num1;
    document.getElementById("num2").textContent = num2;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    
    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "🎉 Correct!";
        fireworks.start();
        setTimeout(() => fireworks.stop(), 3000); // Stop fireworks after 3 seconds
    } else {
        document.getElementById("result").textContent = "❌ Try again!";
    }
}

// Generate the first question on page load
generateQuestion();
