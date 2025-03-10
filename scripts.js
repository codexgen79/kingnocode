// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.9)";
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Explosion effect for CTA buttons
document.querySelectorAll(".explosion-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
});

// Infinite testimonial carousel clone
const testimonialTrack = document.querySelector(".testimonial-track");
if (testimonialTrack) {
  const clone = testimonialTrack.cloneNode(true);
  testimonialTrack.appendChild(clone.children[0]);
}

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".hero-section");

  parallaxElements.forEach((element) => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
// Add this to your existing scripts.js file

// Glow effect for price cards
document.addEventListener("DOMContentLoaded", function () {
  const priceCards = document.querySelectorAll(".price-card");

  priceCards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      this.style.setProperty("--x", `${x}%`);
      this.style.setProperty("--y", `${y}%`);
    });
  });
});

