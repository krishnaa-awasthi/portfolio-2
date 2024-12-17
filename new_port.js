// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust for sticky header
            behavior: 'smooth'
        });
    });
});

// Form Submission Alert
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset(); // Clear the form fields
});

// Animation on Scroll
const projects = document.querySelectorAll('#projects .project');

window.addEventListener('scroll', () => {
    projects.forEach(project => {
        const projectTop = project.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (projectTop < windowHeight - 100) {
            project.style.opacity = 1;
            project.style.transform = 'translateY(0)';
        }
    });
});