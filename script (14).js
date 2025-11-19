// Typing Animation for "I am" tagline
const texts = ['a Software Engineer', 'a Problem Solver', 'a Code Enthusiast', 'Innovative'];
let currentIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById('typing-text');

function type() {
    if (charIndex < texts[currentIndex].length) {
        typingElement.textContent += texts[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = texts[currentIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

// Start typing animation
type();

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add scroll animation to hobby items
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.hobby-item').forEach(item => {
    observer.observe(item);
});
