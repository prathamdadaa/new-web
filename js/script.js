document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Safe & Dynamic Year Generator (Prevents manual hardcoding)
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        // textContent is safer than innerHTML as it escapes potential script execution
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Interactive Event Handler for Button
    const ctaButton = document.getElementById("ctaButton");
    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            alert("Welcome! The system state is initialized securely.");
        });
    }

    // 3. Subtle, Secure Mouse-tracking Background Parallax Effect
    window.addEventListener("mousemove", (e) => {
        // Calculate coordinate percentages to gently displace the background blur elements
        const moveX = (e.clientX / window.innerWidth) * 15;
        const moveY = (e.clientY / window.innerHeight) * 15;
        
        const circles = document.querySelectorAll(".circle");
        circles.forEach((circle, index) => {
            const factor = index === 0 ? 1 : -1;
            circle.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
        });
    });
});
