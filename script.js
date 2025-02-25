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

// 🚀 Final Fireworks Effect - Looks Like Real Fireworks!
function startFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";

    let particles = [];
    const colors = ["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#0000FF", "#FF00FF"];

    function createExplosion(x, y) {
        for (let i = 0; i < 80; i++) { // More particles for bigger explosion
            particles.push({
                x: x,
                y: y,
                radius: Math.random() * 5 + 2,
                speedX: (Math.random() - 0.5) * 12,
                speedY: (Math.random() - 0.5) * 12,
                color: colors[Math.floor(Math.random() * colors.length)],
                gravity: 0.2, // Gravity effect
                life: 80 + Math.random() * 50
            });
        }
    }

    function animateFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.speedY += p.gravity; // Gravity pulls particles down
            p.life -= 1;
            p.radius *= 0.98;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            if (p.life <= 0) {
                particles.splice(index, 1);
            }
        });

        if (particles.length > 0) {
            requestAnimationFrame(animateFireworks);
        } else {
            canvas.style.display = "none";
        }
    }

    // Launch 4 Fireworks at Different Positions
    for (let i = 0; i < 4; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height * 0.4;
        createExplosion(x, y);
    }

    animateFireworks();
}

// Load the first question when the page loads
window.onload = generateQuestion;
