const skib = document.querySelector(".left");
const rizz = document.querySelector("#sd");
const texty = document.querySelector(".title");
const about = document.querySelector(".about");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const ah = document.querySelector(".booty");
const dialog = document.querySelector(".dialog");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  dialog.showModal();
  document.body.classList.add("noscroll");
});

close.addEventListener("click", () => {
  dialog.close();
  document.body.classList.remove("noscroll");
});

const the = "OOO-Outplay Outrun Outjuke";
const letters = the.split("");

skib.addEventListener("mouseenter", () => {
  rizz.style.opacity = 0;

  setTimeout(() => {
    rizz.style.opacity = 1;
    rizz.innerHTML = "Outplay, Outrun, Outjuke";
  }, 400);
});

skib.addEventListener("mouseleave", () => {
  rizz.style.opacity = 0;

  setTimeout(() => {
    rizz.style.opacity = 1;
    rizz.innerHTML = "OOO";
  }, 500);
});

letters.forEach((letter, i) => {
  setTimeout(() => {
    texty.innerHTML += letter;
  }, 100 * i);
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-wrap");

  const ul = document.createElement("ul");
  ul.className = "circles";

  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
  }

  container.appendChild(ul);
});

a.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

ah.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  reveals.forEach((el) => {
    observer.observe(el);
  });
});
