document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.querySelector('.project-grid');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close');
    const navbar = document.getElementById('navbar');

    if (!projectGrid || !modal || !modalBody || !closeModal || !navbar) {
        console.error('One or more elements are missing from the DOM.');
        return;
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close modal on Esc key press
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = "none";
        }
    });

    // Modal fade-in animation
    modalBody.style.animation = "fadeIn 0.3s";


    // Smooth scroll for navbar links
    document.querySelectorAll('#navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    projectGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-details')) {
            const projectCard = e.target.closest('.project-card');
            const projectIndex = projectCard.dataset.projectIndex;
            console.log('Clicked project index:', projectIndex);  // Debugging line
            showProjectDetails(projectIndex);
        }
    });

    closeModal.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };

    function showProjectDetails(index) {
        console.log('Fetching project details for index:', index);
        fetch(`/project/${index}`)
            .then(response => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(project => {
                console.log('Project data:', project);
                modalBody.innerHTML = `
                    <h2>${project['Project Name']}</h2>
                    <p><strong>Date:</strong> ${project.Date}</p>
                    <p><strong>Description:</strong> ${project.Description}</p>
                    <p><strong>Technologies Used:</strong> ${project['Technologies Used']}</p>
                    <p><strong>Project Link:</strong> <a href="${project['Project Link']}" target="_blank">View Project</a></p>
                    <img src="${project.Image}" alt="${project['Project Name']}" style="max-width: 100%; margin-top: 1rem;">
                `;
                modal.style.display = "block";
            })
            .catch(error => {
                console.error('Fetch error:', error);
                modalBody.innerHTML = `<p>Error loading project details. Please try again later.</p>`;
                modal.style.display = "block";
            });
    }

    // Animate project cards on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    const typingText = document.getElementById('typing-text');
    const phrases = ['AI development', 'machine learning', 'data analysis', 'innovative solutions', 'Python programming'];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = '';
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentLetter = phrases[phraseIndex][letterIndex];

        if (!isDeleting && letterIndex <= phrases[phraseIndex].length) {
            currentPhrase += currentLetter;
            typingText.textContent = currentPhrase;
            letterIndex++;
        }

        if (isDeleting && letterIndex >= 0) {
            currentPhrase = currentPhrase.slice(0, -1);
            typingText.textContent = currentPhrase;
            letterIndex--;
        }

        if (letterIndex === phrases[phraseIndex].length) {
            isDeleting = true;
            typingSpeed = 50;
        }

        if (isDeleting && letterIndex === 0) {
            currentPhrase = '';
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 100;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to your server
        console.log('Form submitted:', data);

        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});