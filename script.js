// Array of reasons why I love you
const reasons = [
    "❤️ Because you have the most beautiful smile that brightens my darkest days",
    "💕 Because you make me laugh when I'm feeling down",
    "🌹 Because your kindness and compassion inspires me every single day",
    "✨ Because you're my best friend and my greatest love",
    "🌟 Because you believe in me when I doubt myself",
    "💝 Because your touch makes me feel safe and loved",
    "🎯 Because you support all my dreams and goals",
    "👑 Because you're the most beautiful person inside and out",
    "🌈 Because life is a rainbow when you're by my side",
    "💫 Because you make every moment feel special and magical",
    "🎵 Because your love is like a beautiful melody in my heart",
    "🏔️ Because you're my rock, my strength, my everything",
    "🌊 Because you're calm when life gets chaotic",
    "🔥 Because your passion and energy inspire me",
    "🌸 Because you're graceful and elegant in every way",
    "💎 Because you're precious and irreplaceable",
    "🎨 Because you paint my life with beautiful colors",
    "🌍 Because you're my whole world",
    "💪 Because you're stronger than you believe",
    "👼 Because you're my angel in human form",
    "🎁 Because knowing you is the greatest gift of my life",
    "🌙 Because you're my moon and stars",
    "☀️ Because you're my sunshine on cloudy days",
    "❤️ Because I'm truly, madly, deeply in love with you"
];

// Generate random reason
function generateReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    const reasonDisplay = document.getElementById('reasonDisplay');
    reasonDisplay.innerHTML = `<p>${reasons[randomIndex]}</p>`;
}

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Heart Canvas Animation
const canvas = document.getElementById('heartCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = 500;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Heart particles
    let particles = [];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 8;
            this.vy = -Math.random() * 8 - 2;
            this.life = 1;
            this.decay = Math.random() * 0.01 + 0.01;
            this.size = Math.random() * 3 + 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += 0.1; // Gravity
            this.life -= this.decay;
        }

        draw(ctx) {
            ctx.save();
            ctx.globalAlpha = this.life;
            ctx.fillStyle = `hsl(${Math.random() * 20 + 340}, 100%, ${50 + Math.random() * 20}%)`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function drawHearts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles = particles.filter(p => p.life > 0);
        particles.forEach(p => {
            p.update();
            p.draw(ctx);
        });

        requestAnimationFrame(drawHearts);
    }

    // Click on canvas to create hearts
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create multiple particles
        for (let i = 0; i < 10; i++) {
            particles.push(new Particle(x, y));
        }
    });

    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        for (let i = 0; i < 10; i++) {
            particles.push(new Particle(x, y));
        }
    });

    // Start animation loop
    drawHearts();
}

// Floating hearts in background
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 1500);

// Random floating hearts on scroll
window.addEventListener('scroll', () => {
    if (Math.random() > 0.7) {
        createFloatingHeart();
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Add confetti on special occasions
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = ['❤️', '💕', '🌹', '✨'][Math.floor(Math.random() * 4)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-20px';
        confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
        confetti.style.animation = `float ${Math.random() * 3 + 2}s ease-in forwards`;
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}

// Create confetti on button clicks
document.querySelectorAll('.cta-button, .reason-button').forEach(button => {
    button.addEventListener('click', () => {
        createConfetti();
    });
});

// Initialize with a random reason on page load
window.addEventListener('load', () => {
    generateReason();
    // Create initial confetti for welcome
    createConfetti();
});

// Mouse following effect (subtle)
document.addEventListener('mousemove', (e) => {
    // Can be used for any mouse-tracking effects
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
});

// Show message on page load
window.addEventListener('load', () => {
    console.log('%c💕 Happy Valentine\'s Day! 💕', 'color: #ff1744; font-size: 20px; font-weight: bold;');
    console.log('%cMade with love for my beautiful wife', 'color: #ff5252; font-size: 14px;');
});
