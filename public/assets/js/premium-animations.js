document.addEventListener("DOMContentLoaded", () => {
    // 1. 3D Tilt Effect for Hero Dashboard
    const tiltWrapper = document.querySelector('.tilt-wrapper');
    const tiltCard = document.querySelector('.inner-tilt');
    
    if (tiltWrapper && tiltCard) {
        tiltWrapper.addEventListener('mousemove', (e) => {
            const rect = tiltWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation based on cursor position (max 15 degrees)
            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;
            
            // Apply 3D transform with depth
            tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        tiltWrapper.addEventListener('mouseleave', () => {
            // Snap back to original
            tiltCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            tiltCard.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
        });
        
        tiltWrapper.addEventListener('mouseenter', () => {
            tiltCard.style.transition = 'transform 0.1s ease-out';
        });
    }

    // 2. GSAP Initial Hero Load Animation
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero text stagger animation on page load
        gsap.fromTo(".gsap-hero-item", 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
        );

        // Hero Dashboard slide-in animation
        gsap.fromTo(".gsap-hero-dashboard",
            { x: 100, opacity: 0, rotateY: -15 },
            { x: 0, opacity: 1, rotateY: 0, duration: 1.2, ease: "power4.out", delay: 0.5 }
        );

        // 3. Apple-Style Scroll Revelations
        // Select grid cards to fade up dynamically as you scroll down
        const scrollCards = document.querySelectorAll('.services-box, .store-box li, .metric-card');
        
        scrollCards.forEach((el, index) => {
            gsap.fromTo(el,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%", // Triggers when element is near the bottom
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );
        });
    }
});
