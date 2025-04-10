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

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() { 
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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