let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};

let display = "STOP. SHOP. REPEAT.";
let h1 = document.querySelector("#h1");

function dis(display) {
  for (let i = 0; i < display.length; i++) {
    h1.innerHTML += display[i];
  }
}
dis(display);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));
