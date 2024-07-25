document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;

    const showPage = (index) => {
        if (index < 0 || index >= pages.length) return; 
        
        const currentElement = pages[currentPage];
        const nextElement = pages[index];

        gsap.to(currentElement, { opacity: 0, duration: 0.5, onComplete: () => {
            currentElement.classList.remove("active");
            nextElement.classList.add("active");
            
            gsap.fromTo(nextElement, { x: '100%' }, { x: '0%', opacity: 1, duration: 1 });
            gsap.from(nextElement.querySelector('h1'), { y: -50, opacity: 0, duration: 1, delay: 0.5 });
            gsap.from(nextElement.querySelector('p'), { y: 50, opacity: 0, duration: 1, delay: 1 });
            gsap.from(nextElement.querySelector('img'), { scale: 0, duration: 1, delay: 1.5 });
            
            currentPage = index; 
        }});
    };

    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");

    nextButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentPage < pages.length - 1) {
                showPage(currentPage + 1);
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (currentPage > 0) {
                showPage(currentPage - 1);
            }
        });
    });

    showPage(currentPage);

    // Howler.js for background music
    const sound = new Howl({
        src: ['content/soft-piano-100-bpm-121529.mp3'],
        autoplay: true,
        loop: true,
        volume: 2,
    });

    // Example of interactive elements with GSAP animation
    const interactiveElements = document.querySelectorAll(".interactive");
    interactiveElements.forEach(element => {
        element.addEventListener("click", () => {
            gsap.to(element, { scale: 1.5, rotation: 360, duration: 0.5, yoyo: true, repeat: 1 });
        });
        
        element.addEventListener("mouseover", () => {
            gsap.to(element, { scale: 1.2, duration: 0.5 });
        });
        
        element.addEventListener("mouseout", () => {
            gsap.to(element, { scale: 1, duration: 0.5 });
        });
    });
});

