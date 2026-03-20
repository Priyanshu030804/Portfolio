// Navbar scroll effect
const navbar = document.getElementById('navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    });
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);
        if(navLink) {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal');

function reveal() {
    const windowHeight = window.innerHeight;
    const elementVisible = windowHeight * 0.15; // 15% of window height

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
// Trigger reveal once on load
reveal();

// Certificate Modal Logic
window.openCertModal = function(imageSrc) {
    const certModal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');
    if (certModal && modalImg) {
        modalImg.src = imageSrc;
        certModal.style.display = "flex";
        // Small timeout to allow display:flex to apply before adding opacity class
        setTimeout(() => {
            certModal.classList.add('show');
        }, 10);
    }
};

window.closeCertModal = function() {
    const certModal = document.getElementById('certModal');
    if (certModal) {
        certModal.classList.remove('show');
        setTimeout(() => {
            certModal.style.display = "none";
        }, 300); // Wait for transition
    }
};

// Close modal when clicking outside the image
window.addEventListener('click', (e) => {
    const certModal = document.getElementById('certModal');
    if (certModal && e.target === certModal) {
        window.closeCertModal();
    }
});

// Close modal on escape key
window.addEventListener('keydown', (e) => {
    const certModal = document.getElementById('certModal');
    if (e.key === "Escape" && certModal && certModal.classList.contains('show')) {
        window.closeCertModal();
    }
});
