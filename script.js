// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("fade-out");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});
// Snow Animation
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flakes = [];

for (let i = 0; i < 120; i++) {
    flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedY: Math.random() * 1 + 0.5,
        speedX: Math.random() * 0.5 - 0.25
    });
}

function snow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    flakes.forEach(flake => {
        flake.y += flake.speedY;
        flake.x += flake.speedX;

        if (flake.y > canvas.height) flake.y = -5;
        if (flake.x > canvas.width) flake.x = 0;
        if (flake.x < 0) flake.x = canvas.width;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    });

    requestAnimationFrame(snow);
}

snow();

// Cotton Candy Reaction
const btn = document.getElementById("cottonCandyBtn");
const reaction = document.getElementById("reactionText");

btn.addEventListener("click", () => {
    const reactions = [
        "H-hey! It's not like I'm happy or anything... yayy! 🍭😳",
        "Waaaah thank you!! 🍭💖",
        "I-I don’t need it… okay maybe one bite. 🍭🐾",
    ];

    reaction.textContent = reactions[Math.floor(Math.random() * reactions.length)];
});


// Doctor Mode
const doctorToggle = document.getElementById("doctorToggle");

doctorToggle.addEventListener("change", () => {
    const body = document.body;

    if (doctorToggle.checked) {
        body.classList.add("doctor-mode-on");
    } else {
        body.classList.remove("doctor-mode-on");
    }
});