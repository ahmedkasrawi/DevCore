//#region gear settings
gear.onclick = () => {
  settingsBox.classList.toggle("appear");
  gear.children[0].classList.toggle("fa-spin");
};

// color of colors
let mainColors = localStorage.getItem("color_option");
if (mainColors) {
  colorActiveHandel(mainColors);
}

colorsList.forEach((li) => {
  li.addEventListener("click", (e) => {
    let color = e.currentTarget.dataset.color;
    colorActiveHandel(color);
    localStorage.setItem("color_option", color);
  });
});

// dark and light theme
let theme = localStorage.getItem("theme");
let toggleCheckbox = document.querySelector(
  ".settings-box .option-box .toggle-checkbox",
);

toggleCheckbox.checked = theme === "dark";
darkMode(theme === "dark");

toggleCheckbox.addEventListener("click", () => {
  darkMode(toggleCheckbox.checked);
});
// show Bullets
if (bulletLocal !== null) {
  let showBullets = bulletLocal === "block";
  bulletsContainer.style.display = bulletLocal;
  applyYesNoOption(".bullets-option", showBullets);
}

bulletsSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    let show = e.currentTarget.dataset.display === "show";
    bulletsContainer.style.display = show ? "block" : "none";
    localStorage.setItem("bullets-option", bulletsContainer.style.display);
    handleActive(e);
  });
});
// rest local storage
document.querySelector(".reset-options").onclick = function () {
  localStorage.clear();
  window.location.reload();
};


//#endregion gear settings






//#region Our Skills
const skillsPage = document.querySelectorAll(".skills-page .skill-card");
observeElements(skillsPage, "skills-visible", 0.5);
//#endregion Our Skills

//#region Our Feature
const featureSection = document.querySelector(".feature");
const featBoxes = document.querySelectorAll(".feature .feat-box");

featBoxes.forEach((box, index) => {
  const img = box.querySelector("img");
  if (!img) return;

  const number = document.createElement("span");
  number.className = "feat-number";
  number.textContent = String(index + 1).padStart(2, "0");
  box.prepend(number);

  const iconWrap = document.createElement("div");
  iconWrap.className = "feat-icon";
  img.before(iconWrap);
  iconWrap.appendChild(img);
});

observeElements(featBoxes, "feature-visible", 0.5);
//#endregion Our Feature

//#region Testimonials
const testimonialsSection = document.querySelector(".testimonials");
const testimonialBoxes = document.querySelectorAll(".testimonials .box");

testimonialBoxes.forEach((box) => {
  const personInfo = box.querySelector(".person-info");
  const quoteText = box.querySelector(":scope > p");
  const quoteIcon = document.createElement("i");
  quoteIcon.className = "fa-solid fa-quote-left testimonial-quote";
  box.prepend(quoteIcon);
  const stars = document.createElement("div");
  stars.className = "testimonial-stars";
  stars.innerHTML = '<i class="fa-solid fa-star"></i>'.repeat(5);
  quoteText.before(stars);
  box.appendChild(personInfo);
});

observeElements(testimonialsSection, "testimonials-visible", 0.45);
//#endregion Testimonials

//#region Bullets and links
const bullets = document.querySelectorAll(".nav-bullets .bullet");
const links = document.querySelectorAll(".header-area .links a");
scrollToSection(links);
scrollToSection(bullets);
//#endregion Bullets and links

//#region timeline

let timelineDivs = document.querySelectorAll(
  ".timeline .left, .timeline .right",
);

observeElements(timelineDivs, "show", 0.45);
//#endregion timeline

// top-btn
const topAnchor = document.getElementById("topAnchor");
const scrollBtn = document.getElementById("scrollToTioBtn");

const btnObserver = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) { 
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
btnObserver.observe(topAnchor);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});