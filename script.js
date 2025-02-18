let num1, num2;

// Generate a New Question
function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("num1").innerText = num1;
    document.getElementById("num2").innerText = num2;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
}

// Check Answer
function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    if (userAnswer == (num1 + num2)) {
        document.getElementById("result").innerText = "🎉 Correct!";
        startFireworks();
    } else {
        document.getElementById("result").innerText = "❌ Incorrect, try again!";
    }
}

// Fireworks Effect
function startFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            radius: Math.random() * 4 + 1,
            speedX: Math.random() * 10 - 5,
            speedY: Math.random() * 10 - 5,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        if (particles.length > 0) {
            requestAnimationFrame(animate);
        }
    }

    animate();

    setTimeout(() => {
        particles = [];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 3000);
}

// Load the first question when the page loads
window.onload = generateQuestion;
