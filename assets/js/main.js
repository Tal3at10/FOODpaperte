jQuery(function ($) {
    'use strict';
    
    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 350){ 
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });

    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".custom-navbar");
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Others Option For Responsive JS
    $(".others-option-for-responsive .dot-menu").on("click", function(){
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });
    
    // Button Hover JS
    $('.default-btn')
    .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });

    // Home Slides
    $('.home-slides').owlCarousel({
        loop: true,
        nav: true,
        rtl: true,
        dots: false,
        autoplayHoverPause: false,
        autoplay: false,
        autoHeight:true,
        items: 1,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    });

    // Expect Slides
    $('.expect-slides').owlCarousel({
        loop: true,
        nav: true,
        rtl: true,
        dots: false,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight:true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    // Testimonial Slides
    $('.testimonial-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight:true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });
    $('.testimonial-slides-two').owlCarousel({
        loop: true,
        nav: true,
        rtl: true,
        dots: false,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight:true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    // Partner Slides
    $('.partner-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        rtl: true,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        autoHeight:true,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    // Count Time 
    function makeTimer() {
        var endTime = new Date("September 30, 2024 17:00:00 PDT"); 
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() { makeTimer(); }, 300);
    
    // Odometer JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // Popup Video
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Count Time 
    function makeTimer() {
        var endTime = new Date("December 30, 2024 17:00:00 PDT"); 
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() { makeTimer(); }, 0);

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } 
        else {
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } 
        else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Input Plus & Minus Number JS
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    // Products Details Image Slides
    $('.products-details-image-slides').slick({
        dots: true,
        speed: 500,
        fade: false,
        slide: 'li',
        rtl: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true
            },
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                variableWidth: false,
                slidesToShow: 1,
                dots: true
            }
        }],
        customPaging: function (slider, i) {
            return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
        }
    });

    // WOW Animation JS
    if($('.wow').length){
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }

    // Go to Top
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    }); 
    $('.go-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });
    
    // Preloader - Enhanced reliable load function with multiple fallbacks
    let preloaderHidden = false;
    
    function hidePreloader() {
        if (preloaderHidden) return;
        preloaderHidden = true;
        
        const preloader = document.querySelector(".preloader");
        if (!preloader) return;
        
        if (typeof gsap !== 'undefined') {
            gsap.to(preloader, { 
                opacity: 0, 
                duration: 0.5, 
                ease: "power2.out", 
                onComplete: () => {
                    preloader.style.display = "none";
                }
            });
        } else if (typeof jQuery !== 'undefined') {
            jQuery(preloader).fadeOut(500);
        } else {
            // Fallback: Direct CSS manipulation
            preloader.style.opacity = "0";
            preloader.style.transition = "opacity 0.5s ease";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }
    }
    
    // Multiple triggers to ensure preloader is hidden
    window.addEventListener('load', hidePreloader);
    
    // Fallback timeout - hide preloader after 5 seconds regardless
    setTimeout(hidePreloader, 5000);
    
    // Additional fallback - hide when DOM is ready and after 2 seconds
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(hidePreloader, 2000);
    });

    // Buy Now Btn
    $('body').append("<a href='https://themeforest.net/checkout/from_item/33849203?license=regular&support=bundle_6month&_ga=2.48357473.634514020.1646539215-1425290503.1590986634' target='_blank' class='buy-now-btn'>Buy Now</a>");

    // Switch Btn
    $('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
        
}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('plonk_rtl_theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('plonk_rtl_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('plonk_rtl_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();


// ========================================================
// ====== حركات GSAP المتقدمة (يجب أن يتم تحميل GSAP قبل هذا الكود) ======
// ========================================================

// ----------------------------------------------------
// دالة مساعدة لتقسيم النصوص إلى كلمات (SplitText البديل)
// ----------------------------------------------------
function splitWords(selector) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    // استبدال النص بالكلمات المغلفة بـ <span>
    // استخدام display: inline-flex; و overflow: hidden; لتجهيز الحركة
    element.innerHTML = element.textContent.split(/\s+/).map(word => 
        `<span style="display: inline-flex; overflow: hidden; white-space: nowrap;">${word}</span>`
    ).join(' '); 
    
    // إرجاع العناصر الجديدة للحركة
    return element.querySelectorAll('span');
}

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Register ScrollTrigger
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    // ----------------------------------------------------
    // 🎯 PROFESSIONAL HERO SECTION ANIMATIONS
    // ----------------------------------------------------
    
    // Elegant navbar entrance
    gsap.from(".custom-navbar", { 
        y: -80, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power2.out",
        delay: 0.2
    });
    
    // Professional hero content entrance
    const heroContent = document.querySelector('.main-slides-content');
    if (heroContent) {
        
        // Split title into words for elegant effect
        const splitTitleWords = splitWords('.main-slides-content h1');
        
        // Set refined initial states
        gsap.set([heroContent.querySelector('p'), heroContent.querySelector('.slides-btn a')], { 
            opacity: 0, 
            y: 30
        });
        gsap.set(splitTitleWords, { 
            opacity: 0, 
            y: 20
        });

        // Create professional timeline
        const heroTimeline = gsap.timeline({ 
            defaults: { duration: 0.6, ease: "power2.out" },
            delay: 0.8
        });

        // Title words with elegant stagger
        heroTimeline.to(splitTitleWords, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out"
        });
        
        // Description with smooth entrance
        heroTimeline.to(heroContent.querySelector('p'), { 
            opacity: 1, 
            y: 0, 
            duration: 0.6
        }, "-=0.2");
        
        // Button with refined entrance
        heroTimeline.to(heroContent.querySelector('.slides-btn a'), { 
            opacity: 1, 
            y: 0, 
            duration: 0.5
        }, "-=0.3");
    }
    
    // ----------------------------------------------------
    // 🎨 PROFESSIONAL SCROLL-TRIGGERED ANIMATIONS
    // ----------------------------------------------------

    // Why Us Section - Elegant entrance
    const whyUsSection = document.getElementById('why-us-section');
    if (whyUsSection) {
        gsap.set("#why-us-section .text-content", { 
            opacity: 0, 
            x: -50
        });
        gsap.set("#why-us-section .image-wrapper", { 
            opacity: 0, 
            x: 50
        });
        gsap.set("#why-us-section .why-list li", { 
            opacity: 0, 
            y: 20
        });
        
        ScrollTrigger.create({
            trigger: "#why-us-section", 
            start: "top 80%",
            once: true,
            
            onEnter: () => {
                const whyUsTimeline = gsap.timeline();

                whyUsTimeline.to("#why-us-section .text-content", { 
                    opacity: 1, 
                    x: 0, 
                    duration: 0.8, 
                    ease: "power2.out"
                }, 0); 

                whyUsTimeline.to("#why-us-section .image-wrapper", { 
                    opacity: 1, 
                    x: 0, 
                    duration: 0.8, 
                    ease: "power2.out" 
                }, 0.2); 
                
                whyUsTimeline.to("#why-us-section .why-list li", {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out"
                }, "-=0.4");
            }
        });
    }
    
    // About Us Section - Professional entrance
    const aboutSection = document.querySelector('.about-us-area');
    if (aboutSection) {
        gsap.set(aboutSection.querySelectorAll('.about-us-image, .about-us-content'), {
            opacity: 0,
            y: 50
        });
        
        ScrollTrigger.create({
            trigger: aboutSection,
            start: "top 80%",
            once: true,
            
            onEnter: () => {
                gsap.to(aboutSection.querySelectorAll('.about-us-image, .about-us-content'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out"
                });
            }
        });
    }
    
    // Products Section - Elegant entrance
    const productItems = gsap.utils.toArray('.single-speakers');
    if (productItems.length > 0) {
        gsap.set(productItems, {
            opacity: 0,
            y: 30
        });
        
        productItems.forEach((item, i) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 85%",
                once: true,
                
                onEnter: () => {
                    gsap.to(item, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: "power2.out"
                    });
                }
            });
        });
    }
    
    // Intro Boxes - Smooth entrance
    const introBoxes = gsap.utils.toArray('.single-intro-box');
    if (introBoxes.length > 0) {
        gsap.set(introBoxes, {
            opacity: 0,
            y: 30
        });
        
        gsap.to(introBoxes, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: 1.2
        });
    }
    
    // ----------------------------------------------------
    // 🎯 PROFESSIONAL HOVER EFFECTS & MICRO-INTERACTIONS
    // ----------------------------------------------------
    
    // Elegant button hover effects
    const buttons = gsap.utils.toArray('.default-btn, .modal-cta-btn');
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
    
    // Refined product hover effects
    productItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                scale: 1.02,
                y: -5,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                scale: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            });
        });
    });
    
    // Subtle intro box hover effects
    introBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            gsap.to(box, {
                scale: 1.03,
                y: -3,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        box.addEventListener('mouseleave', () => {
            gsap.to(box, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
    
    // ----------------------------------------------------
    // 🌟 SUBTLE BACKGROUND ANIMATIONS
    // ----------------------------------------------------
    
    // Gentle floating shapes
    gsap.to(".shape1", {
        y: 20, 
        duration: 8, 
        repeat: -1, 
        yoyo: true, 
        ease: "sine.inOut"
    });
    
    gsap.to(".shape2", {
        x: -20, 
        duration: 10, 
        repeat: -1, 
        yoyo: true, 
        ease: "sine.inOut"
    });
    
    gsap.to(".shape3", {
        y: -15,
        duration: 12, 
        repeat: -1, 
        yoyo: true, 
        ease: "sine.inOut"
    });

    // ----------------------------------------------------
    // 🎨 PROFESSIONAL FOOTER ANIMATION
    // ----------------------------------------------------
    const footer = document.querySelector('.footer-area');
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
    // 🎪 PROFESSIONAL PARTNER LOGOS ANIMATIONS
    // ----------------------------------------------------
    const partnerLogos = gsap.utils.toArray('.single-partner');
    if (partnerLogos.length > 0) {
        gsap.set(partnerLogos, {
            opacity: 0,
            y: 30
        });
        
        gsap.to(partnerLogos, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: 2
        });
    }

    // ----------------------------------------------------
    // 6. Session-Controlled Intro Modal
    // ----------------------------------------------------
    
    // Check if modal has been shown before
    const modalShown = localStorage.getItem('modalShown');
    
    if (!modalShown) {
        // Show modal after 3 seconds with GSAP animation
        setTimeout(() => {
            const modal = document.getElementById('intro-modal');
            if (modal) {
                // Set initial state
                gsap.set(modal, { 
                    visibility: 'visible',
                    opacity: 0,
                    scale: 0.8
                });
                
                // Animate modal entrance
                gsap.to(modal, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                });
            }
        }, 3000);
        
        // Close modal functionality
        const closeModal = () => {
            const modal = document.getElementById('intro-modal');
            if (modal) {
                gsap.to(modal, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                        modal.style.visibility = 'hidden';
                        // Set flag to prevent showing again
                        localStorage.setItem('modalShown', 'true');
                    }
                });
            }
        };
        
        // Add event listeners for closing modal
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-modal-btn') || 
                e.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }


});

// ----------------------------------------------------
// كودك الأصلي يستمر من هنا
// ----------------------------------------------------

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    // autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})


// 

// function startcount (el){
//  let goal = el.dataset.goal;
//  let count = setInterval(()=>{
//    el.textContent++;
//    if(el.textContent == goal){
//      clearInterval(count);
//    }
//  },2000/goal)
//  }
//   startcount(document.querySelectorAll(".nums .purecounter"));

// add btn
const addbtn = document.querySelector(".add");
const input = document.querySelector("#number-ids");
function addinput(){
    const name=document.createElement("input");
    name.type="text";
    name.placeholder ="الرجاء ادخال الاسم"
    const phonenmber= document.createElement("input");
    phonenmber.type="number";
    name.placeholder ="الرجاء ادخال رقم الهاتف"
    const btn= document.createElement("a");
    btn.className ="delete";
    btn.innerHTML = "&item";

    const flex =document.createElement("div");
    flex.className ="flex";

    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(phonenmber);
    flex.appendChild(btn);

}
addbtn.addEventListener("click",addinput);

    // ================== WhatsApp Floating Button Script ==================
    const phoneNumber = "966500000000"; // ← ضع رقمك الدولي بدون +
    const message = "مرحبًا، أريد الاستفسار عن الخدمة."; // الرسالة المسبقة
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const link = document.getElementById("whatsapp-link");
    if (link) link.href = whatsappLink;
    
    const chatBtn = document.getElementById('chatbot-btn');
    const chatBox = document.getElementById('chatbot-box');

    if (chatBtn && chatBox) {
        chatBtn.addEventListener('click', () => {
            chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
        });
    }

});