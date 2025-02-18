// Fireworks effect using Fireworks.js
const fireworksContainer = document.createElement("div");
fireworksContainer.style.position = "fixed";
fireworksContainer.style.top = "0";
fireworksContainer.style.left = "0";
fireworksContainer.style.width = "100vw";
fireworksContainer.style.height = "100vh";
fireworksContainer.style.pointerEvents = "none";
document.body.appendChild(fireworksContainer);

// Fireworks.js library setup
const fireworks = new Fireworks(fireworksContainer, {
  maxRockets: 5, // Number of fireworks at a time
  rocketSpawnInterval: 200, // How fast rockets launch (milliseconds)
  numParticles: 100, // Number of particles per explosion
  explosionMinHeight: 0.2, // Min explosion height (percentage of screen)
  explosionMaxHeight: 0.9, // Max explosion height
  explosionChance: 0.08, // Chance of a random explosion
});

// Function to trigger fireworks when the answer is correct
function triggerFireworks() {
  fireworks.start();
  setTimeout(() => {
    fireworks.stop();
  }, 3000); // Stop after 3 seconds
}

// Modify your existing checkAnswer function to trigger fireworks
function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === correctAnswer) {
    document.getElementById("result").textContent = "🎉 Correct!";
    triggerFireworks();
  } else {
    document.getElementById("result").textContent = "❌ Try again!";
  }
}
