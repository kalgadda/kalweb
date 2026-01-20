// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to system preference
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }

    // Default to system
    return 'system';
}

// Set theme on page load
function setTheme(theme) {
    if (theme === 'dark-mode') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else if (theme === 'system') {
        body.classList.remove('light-mode', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
    localStorage.setItem('theme', theme);
}

// Initialize theme
const preferredTheme = getPreferredTheme();
setTheme(preferredTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    let currentTheme;
    if (body.classList.contains('light-mode')) {
        currentTheme = 'light-mode';
    } else if (body.classList.contains('dark-mode')) {
        currentTheme = 'dark-mode';
    } else {
        currentTheme = 'system';
    }

    let newTheme;
    if (currentTheme === 'light-mode') {
        newTheme = 'system';
    } else if (currentTheme === 'system') {
        newTheme = 'dark-mode';
    } else {
        newTheme = 'light-mode';
    }

    setTheme(newTheme);
});

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // Only auto-switch if theme is set to system
        if (localStorage.getItem('theme') === 'system') {
            const newTheme = e.matches ? 'dark-mode' : 'light-mode';
            setTheme(newTheme);
        }
    });
}

// Headshot Image Loading
const headshotImg = document.getElementById('headshot');
const headshotPlaceholder = document.querySelector('.headshot-placeholder');

// Force image to load and display
headshotImg.src = headshotImg.src; // Force reload
headshotImg.style.display = 'block'; // Ensure it's visible

// Try to load the headshot image
headshotImg.addEventListener('load', function () {
    this.classList.add('loaded');
    headshotPlaceholder.querySelector('.headshot-fallback').style.display = 'none';
    console.log('Headshot loaded successfully');
});

headshotImg.addEventListener('error', function () {
    // Keep fallback visible if image fails to load
    this.style.display = 'none';
    console.log('Headshot failed to load');
});

// Lightning effect for smashing cards
function createLightningEffect() {
    const metricsGrid = document.querySelector('.metrics-grid');
    const lightning = document.createElement('div');
    lightning.className = 'lightning-effect';
    metricsGrid.appendChild(lightning);

    // Remove lightning after animation
    setTimeout(() => {
        lightning.remove();
    }, 600);
}

// Trigger lightning effect when cards smash
setTimeout(() => {
    createLightningEffect();
}, 600); // Time when cards collide

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to sections
// Apply fade-in to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Optional: Animate icon
        const isOpen = navLinks.classList.contains('active');
        mobileMenuBtn.innerHTML = isOpen
            ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        });
    });
}
