document.addEventListener("DOMContentLoaded", generateQuestion);

let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("num1").textContent = num1;
    document.getElementById("num2").textContent = num2;
    document.getElementById("answer").value = "";
    document.getElementById("message").textContent = "";
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    let correctAnswer = num1 + num2;

    if (userAnswer === correctAnswer) {
        document.getElementById("message").textContent = "Correct!";
        startFireworks();
    } else {
        document.getElementById("message").textContent = "Try again!";
    }
}

// Fireworks Animation
function startFireworks() {
    let canvas = document.getElementById("fireworksCanvas");
    let ctx = canvas.getContext("2d");
    canvas.style.display = "block";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function createParticles(x, y) {
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: x,
                y: y,
                speedX: (Math.random() - 0.5) * 5,
                speedY: (Math.random() - 0.5) * 5,
                size: Math.random() * 5 + 2,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.size *= 0.95;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            if (p.size < 0.5) particles.splice(index, 1);
        });

        if (particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            canvas.style.display = "none";
        }
    }

    let rect = document.querySelector(".game-container").getBoundingClientRect();
    let x = rect.left + rect.width / 2;
    let y = rect.top + rect.height / 2;
    
    createParticles(x, y);
    animate();
}
