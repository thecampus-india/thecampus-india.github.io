// ========================================
// RITESH BADGOTI - PERSONAL PORTFOLIO
// Enhanced Interactions & Animations
// Naruto & Buddha Theme Edition
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("✨ Portfolio Loaded - 火の意志 Will of Fire");

    // Initialize all features
    initPageLoader();
    initParticles();
    initLotusParticles();
    initScrollReveal();
    initNavigation();
    initMobileMenu();
    initFormHandling();
    initParallax();
    initTypingEffect();
    initQuoteCarousel();
    initSkillBars();
    initTimelineAnimation();
});

// ========================================
// PAGE LOADER
// ========================================
function initPageLoader() {
    const loader = document.getElementById('pageLoader');
    if (!loader) return;

    // Hide loader after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1500);
    });

    // Fallback - hide after 3 seconds regardless
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 3000);
}

// ========================================
// KONOHA LEAF PARTICLE EFFECT
// ========================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 30;

    // Create Konoha leaf SVG particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'leaf-particle';

        const size = Math.random() * 15 + 10;
        const duration = Math.random() * 15 + 20;
        const delay = Math.random() * 10;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.3 + 0.1};
            animation: leafFloat ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
        `;

        // Create leaf SVG
        particle.innerHTML = `
            <svg viewBox="0 0 24 24" fill="rgba(212, 168, 83, 0.6)" style="width:100%;height:100%;">
                <path d="M12 2C7 7 4 12 4 16c0 4 3 6 8 6s8-2 8-6c0-4-3-9-8-14z"/>
            </svg>
        `;

        container.appendChild(particle);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes leafFloat {
            0%, 100% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0.1;
            }
            25% {
                transform: translateY(-50px) translateX(30px) rotate(45deg);
                opacity: 0.3;
            }
            50% {
                transform: translateY(-30px) translateX(-20px) rotate(90deg);
                opacity: 0.2;
            }
            75% {
                transform: translateY(-70px) translateX(40px) rotate(135deg);
                opacity: 0.4;
            }
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// LOTUS PETAL PARTICLES (Buddha Theme)
// ========================================
function initLotusParticles() {
    const container = document.getElementById('lotusParticles');
    if (!container) return;

    const petalCount = 15;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'lotus-petal';

        const size = Math.random() * 12 + 8;
        const duration = Math.random() * 20 + 25;
        const delay = Math.random() * 15;

        petal.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size * 1.5}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.2 + 0.05};
            animation: petalFloat ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
            background: radial-gradient(ellipse at center, rgba(236, 64, 122, 0.5), transparent);
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        `;

        container.appendChild(petal);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes petalFloat {
            0%, 100% {
                transform: translateY(0) translateX(0) rotate(0deg) scale(1);
                opacity: 0.1;
            }
            33% {
                transform: translateY(-40px) translateX(25px) rotate(60deg) scale(1.1);
                opacity: 0.2;
            }
            66% {
                transform: translateY(-20px) translateX(-15px) rotate(120deg) scale(0.9);
                opacity: 0.15;
            }
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('reveal');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll(`
        .philosophy-card,
        .about-card,
        .social-card,
        .contact-form-wrapper,
        .contact-info,
        .nindo-scroll,
        .nindo-value,
        .skill-card,
        .timeline-item
    `);

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        observer.observe(el);
    });

    // Section titles animation
    const sectionTitles = document.querySelectorAll('.section-title, .section-subtitle');
    sectionTitles.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    const nav = document.querySelector('.floating-nav');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Scroll effect on nav
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 15, 0.95)';
            nav.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.03)';
            nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        }

        // Hide/show nav on scroll direction
        if (currentScroll > lastScroll && currentScroll > 500) {
            nav.style.transform = 'translateX(-50%) translateY(-100px)';
        } else {
            nav.style.transform = 'translateX(-50%) translateY(0)';
        }
        lastScroll = currentScroll;
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = 100;
                const targetPosition = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    });
}

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = mobileMenu?.querySelectorAll('a');

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when link is clicked
    menuLinks?.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';

            if (targetSection) {
                setTimeout(() => {
                    const offset = 80;
                    const targetPosition = targetSection.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }, 300);
            }
        });
    });
}

// ========================================
// TYPING EFFECT
// ========================================
function initTypingEffect() {
    const tagline = document.getElementById('heroTagline');
    if (!tagline) return;

    const text = tagline.textContent;
    tagline.textContent = '';
    tagline.style.borderRight = '2px solid var(--accent-gold)';

    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            // Remove cursor after typing
            setTimeout(() => {
                tagline.style.borderRight = 'none';
            }, 1000);
        }
    }, 80);
}

// ========================================
// QUOTE CAROUSEL
// ========================================
function initQuoteCarousel() {
    const carousel = document.getElementById('quoteCarousel');
    const dotsContainer = document.getElementById('quoteDots');
    const prevBtn = document.querySelector('.quote-prev');
    const nextBtn = document.querySelector('.quote-next');

    if (!carousel || !dotsContainer) return;

    const slides = carousel.querySelectorAll('.quote-slide');
    let currentSlide = 0;
    let autoplayInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'quote-dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.quote-dot');

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    startAutoplay();

    // Navigation buttons
    prevBtn?.addEventListener('click', () => {
        stopAutoplay();
        prevSlide();
        startAutoplay();
    });

    nextBtn?.addEventListener('click', () => {
        stopAutoplay();
        nextSlide();
        startAutoplay();
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
}

// ========================================
// SKILL BARS ANIMATION
// ========================================
function initSkillBars() {
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => observer.observe(card));
}

// ========================================
// TIMELINE ANIMATION
// ========================================
function initTimelineAnimation() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('reveal');
                }, index * 200);
            }
        });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));
}

// ========================================
// FORM HANDLING
// ========================================
function initFormHandling() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Collect form data
        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        // Simulate form submission (replace with actual API call)
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success state
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

            // Reset form
            form.reset();

            // Reset button after delay
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);

            // Show success notification
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

        } catch (error) {
            submitBtn.innerHTML = '<i class="fas fa-times"></i> Failed to Send';
            submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);

            showNotification('Failed to send message. Please try again.', 'error');
        }
    });

    // Input focus animations
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        background: ${type === 'success'
            ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(22, 163, 74, 0.9))'
            : 'linear-gradient(135deg, rgba(239, 68, 68, 0.9), rgba(220, 38, 38, 0.9))'};
        color: white;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        animation: slideInNotification 0.5s ease, slideOutNotification 0.5s ease 4s forwards;
    `;

    document.body.appendChild(notification);

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInNotification {
            from { transform: translateX(120%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutNotification {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(120%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => notification.remove(), 5000);
}

// ========================================
// PARALLAX EFFECTS
// ========================================
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    const heroBgImage = document.querySelector('.hero-bg-image');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        if (heroBgImage && scrolled < window.innerHeight) {
            heroBgImage.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
            heroBgImage.style.opacity = Math.max(0.15 - (scrolled * 0.0003), 0);
        }
    });

    // Mouse parallax on hero
    document.addEventListener('mousemove', (e) => {
        if (!heroBgImage) return;
        if (window.pageYOffset > window.innerHeight / 2) return;

        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        heroBgImage.style.transform = `translate(calc(-50% + ${xPos}px), calc(-50% + ${yPos}px))`;
    });

    // Card hover effects with 3D tilt
    const cards = document.querySelectorAll('.philosophy-card, .about-card, .skill-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ========================================
// CHAKRA EFFECT ON AVATAR (Optional)
// ========================================
function initChakraEffect() {
    const avatar = document.querySelector('.avatar-container');
    if (!avatar) return;

    avatar.addEventListener('mouseenter', () => {
        const pulse = avatar.querySelector('.chakra-pulse');
        if (pulse) {
            pulse.style.animationPlayState = 'running';
        }
    });
}

// Initialize chakra effect
document.addEventListener('DOMContentLoaded', initChakraEffect);
