// Copyright © 2025 Moritz Wendt. Alle Rechte vorbehalten. v.3.6.5

function scrollToElement(selector, instance = 0, offset = 0) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > instance) {
        const element = elements[instance];
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const targetPosition = elementPosition - offset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
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
    scrollToElement('.scrollToHeader', 0, 45);
});

/* ########################################################## */

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0]; 

modal.classList.remove("show");
modal.style.display = "none";

btn.onclick = function() {
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

span.onclick = function() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}

/* ########################################################## */

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