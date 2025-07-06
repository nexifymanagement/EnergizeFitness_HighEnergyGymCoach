
        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Dynamic Pulse Animation
        const pulseContainer = document.querySelector('.pulse');
        for (let i = 0; i < 8; i++) {
            const pulse = document.createElement('span');
            pulse.style.left = Math.random() * 100 + '%';
            pulse.style.top = Math.random() * 100 + '%';
            pulse.style.animationDelay = Math.random() * 5 + 's';
            pulseContainer.appendChild(pulse);
        }
   