const head = document.querySelector(".bn");
const head2 = document.querySelector(".img");
const about = document.querySelector("#ayy");
const coole = document.querySelector("#cooli2");
const clown = document.querySelector("#clown223");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollY > 0) {
    head.classList.add("scrolled");
    head2.classList.add("scrolled");
  } else {
    head.classList.remove("scrolled");
    head2.classList.remove("scrolled");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

function updateText() {
  if (window.innerWidth <= 600) {
    about.textContent = "Abt";
    coole.textContent = "👑";
    clown.textContent = "🤡 ";
  } else {
    about.textContent = "About & Projects";
    coole.textContent = "👑 Cool People";
    clown.textContent = "🤡 Clowns";
  }
}

window.addEventListener("resize", updateText);
window.addEventListener("load", updateText);
