// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
navbar.classList.toggle("active");
});

// Smooth scroll for navigation links
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
    navbar.classList.remove("active");
  });
});

// Go Up Button
const goUpBtn = document.getElementById("goUpBtn");
window.addEventListener("scroll", () => {
  goUpBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
goUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Auto Scroll Certifications =====
const certScroll = document.getElementById("certScroll");
let scrollSpeed = 1;
let scrollInterval;

function autoScrollCerts() {
  scrollInterval = setInterval(() => {
    certScroll.scrollLeft += scrollSpeed;
    if (certScroll.scrollLeft + certScroll.clientWidth >= certScroll.scrollWidth) {
      certScroll.scrollLeft = 0; // Loop back to start
    }
  }, 20);
}

// Pause when hovered
certScroll.addEventListener("mouseenter", () => clearInterval(scrollInterval));
certScroll.addEventListener("mouseleave", autoScrollCerts);

// Start auto-scroll
autoScrollCerts();

