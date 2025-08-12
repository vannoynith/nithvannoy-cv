// Enhanced for performance and modern features

// Initialize AOS with refined settings
AOS.init({
    duration: 1000,
    easing: 'ease-out',
    once: true,
    mirror: false,
    offset: 200
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            } else {
                window.location.href = targetId;
            }
        });
    });

    // Navbar shrink on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.5rem 0';
                navbar.style.background = 'rgba(255, 255, 255, 0.15)';
            } else {
                navbar.style.padding = '1rem 0';
                navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        }
    });

    // Animate skill bars on intersection
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.skill-progress').forEach(bar => {
                        const width = bar.getAttribute('data-width') || '0%';
                        bar.style.width = width;
                    });
                    progressObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.width = '0%'; // Reset width initially
        });
        progressObserver.observe(skillsSection);
    }
});