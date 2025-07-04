const butt = document.querySelector("#ayy");
const weird = document.querySelector(".about");
const lol = document.querySelector(".socials");

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

  if (scrollY + viewportHeight >= pageHeight - 5) {
    lol.classList.add("scrolled");
  } else {
    lol.classList.remove("scrolled");
  }
});
s;
butt.addEventListener("click", () => {
  weird.scrollIntoView({ behavior: "smooth" });
});
