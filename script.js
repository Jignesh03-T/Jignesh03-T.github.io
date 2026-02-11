// =====================
// SCROLL REVEAL ANIMATION
// =====================

const revealElements = document.querySelectorAll(".project-card, .skill-card");

function revealOnScroll() {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// =====================
// OPTIONAL TYPING EFFECT
// (Runs ONLY if #typing exists)
// =====================

const typingSpan = document.getElementById("typing");

if (typingSpan) {
    const roles = ["Python Developer", "Web Developer", "Frontend Developer"];
    let i = 0, j = 0, deleting = false;

    function typeText() {
        const speed = deleting ? 70 : 120;
        typingSpan.textContent = roles[i].slice(0, j);

        j += deleting ? -1 : 1;

        if (j === roles[i].length) {
            deleting = true;
            setTimeout(typeText, 1000);
            return;
        }

        if (deleting && j === 0) {
            deleting = false;
            i = (i + 1) % roles.length;
        }

        setTimeout(typeText, speed);
    }

    typeText();
}


// =====================
// NAVBAR HAMBURGER TOGGLE
// =====================

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// =====================
// CUBE CAROUSEL (FINAL WORKING VERSION)
// =====================

let cubes = document.querySelectorAll(".cube");

cubes.forEach(cube => {
    let index = 0;

    function rotateCube() {
        cube.classList.remove("rot0","rot1","rot2","rot3");
        cube.classList.add("rot" + index);
        index = (index + 1) % 4;
    }

    let timer = setInterval(rotateCube, 2500);

    // Pause on hover
    cube.addEventListener("mouseenter", () => clearInterval(timer));
    cube.addEventListener("mouseleave", () => {
        timer = setInterval(rotateCube, 2500);
    });
});




// END JS
