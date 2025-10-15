// Copyright © 2025 Moritz Wendt. Alle Rechte vorbehalten. v.3.6.5



/* ############################# 1️⃣ SCROLL-FUNKTIONEN ############################# */

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

const losGehts = document.getElementById("losGehts");
losGehts.addEventListener('click', () => {
    scrollToElement('.header');
});



/* ############################# 2️⃣ MODAL-FENSTER ############################# */

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0]; 

// Startzustand
modal.classList.remove("show");
modal.style.display = "none";

// Öffnen
btn.onclick = function() {
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

// Schließen über X
span.onclick = function() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// Schließen durch Klick außerhalb
window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}



/* ############################# 3️⃣ AUTO-SCROLL ############################# */

let scrollDirection = 1;
let scrolling = false;
let scrollAnimation;

function autoScroll() {
    if (!scrolling) return;

    if (window.scrollY >= document.documentElement.scrollHeight - window.innerHeight) {
        scrollDirection = -1;
    }

    if (window.scrollY <= 0) {
        scrollDirection = 1;
    }

    window.scrollBy(0, scrollDirection);
    scrollAnimation = requestAnimationFrame(autoScroll);
}

document.getElementById("startScrollBtn").addEventListener("click", () => {
    scrolling = !scrolling;

    const btn = document.getElementById("startScrollBtn");
    if (scrolling) {
        btn.textContent = "Autoscroll stoppen";
        autoScroll();
    } else {
        btn.textContent = "Autoscroll starten";
        cancelAnimationFrame(scrollAnimation);
    }
});