// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Intersection observer for section animations
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => observer.observe(section));
}

// Terminal typing effect
function initTerminalEffects() {
    const commands = [
        'ls -la ~/experiments/',
        'cat current_projects.md',
        'git status',
        'tail -f learning.log'
    ];
    
    // Add some random terminal activity
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every interval
            const randomCommand = commands[Math.floor(Math.random() * commands.length)];
            console.log(`polly@lab:~$ ${randomCommand}`);
        }
    }, 5000);
}

// Add glitch effect to random elements
function addRandomGlitches() {
    const cards = document.querySelectorAll('.card-title');
    setInterval(() => {
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        if (Math.random() < 0.05) { // 5% chance
            randomCard.classList.add('glitch');
            randomCard.setAttribute('data-text', randomCard.textContent);
            setTimeout(() => {
                randomCard.classList.remove('glitch');
            }, 300);
        }
    }, 3000);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupScrollAnimations();
    initTerminalEffects();
    addRandomGlitches();
});