const head = document.querySelector(".bn");
const head2 = document.querySelector(".img");

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
