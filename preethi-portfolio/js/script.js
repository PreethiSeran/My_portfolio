// ===============================================
// THEME TOGGLE (persisted in localStorage)
// ===============================================
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("preethi-portfolio-theme", theme);
}

(function initTheme() {
  const saved = localStorage.getItem("preethi-portfolio-theme");
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }
})();

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// ===============================================
// MOBILE NAV
// ===============================================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// ===============================================
// NAVBAR SCROLL STATE + ACTIVE LINK HIGHLIGHTING
// ===============================================
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

function onScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 20);

  let currentId = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      currentId = section.id;
    }
  });

  navLinkEls.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });

  const scrollTopBtn = document.getElementById("scrollTop");
  scrollTopBtn.classList.toggle("visible", window.scrollY > 500);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===============================================
// SCROLL TO TOP
// ===============================================
document.getElementById("scrollTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===============================================
// SCROLL REVEAL ANIMATIONS
// ===============================================
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// ===============================================
// SKILL BAR FILL ANIMATION (triggered on scroll into view)
// ===============================================
const skillBars = document.querySelectorAll(".skill-bar");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.getAttribute("data-level");
        const fill = bar.querySelector(".skill-bar__fill");
        fill.style.width = `${level}%`;
        skillObserver.unobserve(bar);
      }
    });
  },
  { threshold: 0.4 }
);

skillBars.forEach((bar) => skillObserver.observe(bar));

// ===============================================
// HERO STAT COUNTERS
// ===============================================
const statValues = document.querySelectorAll(".stat__value");

function animateCount(el) {
  const target = parseFloat(el.getAttribute("data-count"));
  const isDecimal = target % 1 !== 0;
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = isDecimal ? value.toFixed(1) : Math.round(value);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

statValues.forEach((el) => statObserver.observe(el));

// ===============================================
// FOOTER YEAR
// ===============================================
document.getElementById("year").textContent = new Date().getFullYear();
