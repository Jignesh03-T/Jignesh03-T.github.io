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
// OPTIONAL: TYPING TEXT EFFECT
// (ONLY works if you add <span id="typing"></span> in HTML)
// =====================

// Uncomment this section if you want animated typing role text:


const roles = ["Python Developer", "Web Developer", "Frontend Developer"];
let i = 0, j = 0, deleting = false;

function typeText() {
    const speed = deleting ? 70 : 120;
    document.getElementById("typing").textContent = roles[i].slice(0, j);

    if (!deleting) j++;
    else j--;

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

