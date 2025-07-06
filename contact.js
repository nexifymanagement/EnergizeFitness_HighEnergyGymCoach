
        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const program = document.getElementById('program').value;
            
            // In a real implementation, you would send this data to a server
            alert(`Thanks ${name}! Your message about our ${program || 'training'} program has been received. We'll contact you shortly.`);
            
            // Reset the form
            contactForm.reset();
        });

        // Animate contact cards on scroll
        const animateCards = () => {
            const cards = document.querySelectorAll('.contact-card');
            cards.forEach((card, index) => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (cardPosition < screenPosition) {
                    card.style.animation = `fadeInUp 0.5s ease ${index * 0.2}s forwards`;
                }
            });
        };

        window.addEventListener('scroll', animateCards);
   