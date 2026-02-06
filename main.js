// ===== Mobile Menu =====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ===== Smooth Scroll =====
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth"
    });
    navbar.classList.remove("active");
  });
});

// ===== Go Up Button =====
const goUpBtn = document.getElementById("goUpBtn");

window.addEventListener("scroll", () => {
  goUpBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

goUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Scroll Reveal Animations =====
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));
