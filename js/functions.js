// random Background
let randomBackground = document.querySelectorAll(".random-background span");
//#region Settings Box
let settingsBox = document.querySelector(".settings-box");
let gear = document.querySelector(".settings-box .toggle-settings");
let colorsList = document.querySelectorAll(".settings-box .colors li");
// show Bullets
let bulletsSpans = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocal = localStorage.getItem("bullets-option");
//#region landing page
let toggleMenu = document.querySelector(".landing-page .toggle-menu");
let headerLinks = document.querySelector(".landing-page .links");
let aLinks = document.querySelectorAll(".landing-page .links a");

// background
let landingPage = document.querySelector(".landing-page");
let backOption = localStorage.getItem("backOption");
let backgroundOption = true;
let backgroundInterval;

//* ========================================= *//

//#region functions

// appearing animation for cards
function observeElements(elements, visibleClass = "show", threshold = 0.25) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          obs.unobserve(entry.target); // إيقاف المراقبة بعد الظهور لرفع الأداء
        }
      });
    },
    { threshold },
  );

  // to make targets can be one or array (NodeList/Array)
  const targets =
    elements instanceof NodeList || Array.isArray(elements)
      ? elements
      : [elements];
  targets.forEach((el) => observer.observe(el));
}

function handleActive(ev) {
  ev.currentTarget.parentElement.querySelectorAll(".active").forEach((el) => {
    el.classList.remove("active");
  });
  ev.currentTarget.classList.add("active");
}

const themes = {
  dark: {
    "--background-color": "#000",
    "--section-color": "#333",
    "--paragraph-color": "#ddd",
    "--text-color": "#ffffff",
    "--soft-color": "#2e2e2e",
    "--testimony-color": "#222",
    "--overlay": "rgba(0, 0, 0, 0.95)",
  },
  light: {
    "--background-color": "#ffffff",
    "--section-color": "#eeeeee",
    "--paragraph-color": "#777",
    "--text-color": "#000",
    "--soft-color": "#f6f6f6",
    "--testimony-color": "#eeeeee",
    "--overlay": "rgba(255, 255, 255, 0.95)",
  },
};

function darkMode(isDark) {
  let theme = isDark ? themes.dark : themes.light;
  Object.entries(theme).forEach(([prop, value]) => {
    document.documentElement.style.setProperty(prop, value);
  });
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function scrollToSection(elements) {
  elements.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.currentTarget.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

function applyYesNoOption(containerSelector, isYes) {
  document.querySelectorAll(`${containerSelector} span`).forEach((span) => {
    span.classList.remove("active");
  });
  document
    .querySelector(`${containerSelector} .${isYes ? "yes" : "no"}`)
    .classList.add("active");
}



const colorActiveHandel = function (mainColor) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  colorsList.forEach((color) => {
    color.classList.toggle("active", color.dataset.color === mainColor);
  });
};
//#endregion functions
