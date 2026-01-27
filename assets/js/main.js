// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle ? themeToggle.querySelector('i') : null;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });
}

function updateIcon(theme) {
    if (!icon) return;
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Typing Animation Function
function typeWriter(elementId, text, speed = 100) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Global WhatsApp Button Injection
document.addEventListener('DOMContentLoaded', () => {
    const waBtn = document.createElement('a');
    waBtn.href = 'https://wa.me/917069674591'; 
    waBtn.target = '_blank';
    waBtn.className = 'whatsapp-btn';
    waBtn.setAttribute('aria-label', 'Chat on WhatsApp');
    waBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(waBtn);
});
