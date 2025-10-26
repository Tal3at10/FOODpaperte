// ========================================================
// ====== UNIVERSAL PROFESSIONAL ANIMATIONS ======
// ========================================================

// Helper function to split words for elegant text animations
function splitWords(selector) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    element.innerHTML = element.textContent.split(/\s+/).map(word => 
        `<span style="display: inline-flex; overflow: hidden; white-space: nowrap;">${word}</span>`
    ).join(' '); 
    
    return element.querySelectorAll('span');
}

// Universal page animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Register ScrollTrigger if GSAP is available
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    // ----------------------------------------------------
    // 🎯 PROFESSIONAL PAGE ENTRANCE ANIMATIONS
    // ----------------------------------------------------
    
    // Elegant navbar entrance
    gsap.from(".custom-navbar, .navbar", { 
        y: -80, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power2.out",
        delay: 0.2
    });
    
    // Professional page content entrance
    gsap.from("main, .main-content, .container", { 
        opacity: 0, 
        y: 30, 
        duration: 0.8, 
        ease: "power2.out",
        delay: 0.5
    });
    
    // ----------------------------------------------------
    // 🎨 UNIVERSAL SCROLL-TRIGGERED ANIMATIONS
    // ----------------------------------------------------
    
    // Animate all sections with professional entrance
    const sections = document.querySelectorAll('section, .section, .area');
    sections.forEach((section, index) => {
        gsap.set(section, { opacity: 0, y: 50 });
        
        ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            once: true,
            
            onEnter: () => {
                gsap.to(section, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // Animate all cards and boxes
    const cards = document.querySelectorAll('.card, .box, .item, .single-item, .col-lg-3, .col-lg-4, .col-lg-6');
    cards.forEach((card, index) => {
        gsap.set(card, { opacity: 0, y: 30 });
        
        ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            once: true,
            
            onEnter: () => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // ----------------------------------------------------
    // 🎯 PROFESSIONAL HOVER EFFECTS
    // ----------------------------------------------------
    
    // Elegant button hover effects
    const buttons = document.querySelectorAll('.btn, .default-btn, .button, a[class*="btn"]');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // Refined card hover effects
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                y: -5,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        });
    });
    
    // ----------------------------------------------------
    // 🌟 PROFESSIONAL TEXT ANIMATIONS
    // ----------------------------------------------------
    
    // Animate all headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading, index) => {
        gsap.set(heading, { opacity: 0, y: 20 });
        
        ScrollTrigger.create({
            trigger: heading,
            start: "top 85%",
            once: true,
            
            onEnter: () => {
                gsap.to(heading, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // Animate paragraphs
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        gsap.set(p, { opacity: 0, y: 15 });
        
        ScrollTrigger.create({
            trigger: p,
            start: "top 85%",
            once: true,
            
            onEnter: () => {
                gsap.to(p, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // ----------------------------------------------------
    // 🎪 PROFESSIONAL IMAGE ANIMATIONS
    // ----------------------------------------------------
    
    // Animate all images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        gsap.set(img, { opacity: 0, scale: 0.9 });
        
        ScrollTrigger.create({
            trigger: img,
            start: "top 85%",
            once: true,
            
            onEnter: () => {
                gsap.to(img, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // ----------------------------------------------------
    // 🌟 SUBTLE BACKGROUND ANIMATIONS
    // ----------------------------------------------------
    
    // Gentle floating shapes
    const shapes = document.querySelectorAll('.shape, .shape1, .shape2, .shape3');
    shapes.forEach((shape, index) => {
        gsap.to(shape, {
            y: 20 + (index * 5), 
            duration: 8 + (index * 2), 
            repeat: -1, 
            yoyo: true, 
            ease: "sine.inOut"
        });
    });
    
    // ----------------------------------------------------
    // 🎯 PROFESSIONAL FORM ANIMATIONS
    // ----------------------------------------------------
    
    // Animate form elements
    const formElements = document.querySelectorAll('input, textarea, select');
    formElements.forEach((element, index) => {
        gsap.set(element, { opacity: 0, y: 20 });
        
        ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            once: true,
            
            onEnter: () => {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "power2.out"
                });
            }
        });
    });
    
    // ----------------------------------------------------
    // 🎨 PROFESSIONAL FOOTER ANIMATION
    // ----------------------------------------------------
    const footer = document.querySelector('.footer, .footer-area');
    if (footer) {
        gsap.set(footer, { opacity: 0, y: 50 });
        
        ScrollTrigger.create({
            trigger: footer,
            start: "top 90%",
            once: true,
            
            onEnter: () => {
                gsap.to(footer, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
        });
    }
    
    // ----------------------------------------------------
    // 🎪 PROFESSIONAL NAVIGATION ANIMATIONS
    // ----------------------------------------------------
    
    // Animate navigation items
    const navItems = document.querySelectorAll('.nav-item, .nav-link');
    navItems.forEach((item, index) => {
        gsap.set(item, { opacity: 0, x: -20 });
        
        gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: 0.5 + (index * 0.1),
            ease: "power2.out"
        });
    });
    
    // ----------------------------------------------------
    // 🎯 PROFESSIONAL MODAL ANIMATIONS
    // ----------------------------------------------------
    
    // Animate modals
    const modals = document.querySelectorAll('.modal, .popup');
    modals.forEach(modal => {
        gsap.set(modal, { opacity: 0, scale: 0.9 });
        
        // Show modal animation
        const showModal = () => {
            gsap.to(modal, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        };
        
        // Hide modal animation
        const hideModal = () => {
            gsap.to(modal, {
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
                ease: "power2.in"
            });
        };
        
        // Add event listeners for modal triggers
        const modalTriggers = document.querySelectorAll('[data-modal], [data-popup]');
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', showModal);
        });
        
        // Add event listeners for modal close buttons
        const closeButtons = modal.querySelectorAll('.close, .close-btn, [data-close]');
        closeButtons.forEach(button => {
            button.addEventListener('click', hideModal);
        });
    });
    
    // ----------------------------------------------------
    // 🌟 PROFESSIONAL LOADING SEQUENCE
    // ----------------------------------------------------
    
    // Add professional page entrance
    gsap.from("body", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
    
    // Animate page title
    const pageTitle = document.querySelector('h1, .page-title, .main-title');
    if (pageTitle) {
        const splitTitleWords = splitWords('h1, .page-title, .main-title');
        if (splitTitleWords) {
            gsap.set(splitTitleWords, { opacity: 0, y: 20 });
            
            gsap.to(splitTitleWords, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.8
            });
        }
    }
    
    console.log('🎨 Professional animations loaded successfully!');
});
