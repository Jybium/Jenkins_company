// FOR THE SCROLL ANIMATION

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("shown");
    } else {
      entry.target.classList.remove("shown");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// FOR THE HAMBURGER PART

let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("active");
};

// FOR THE TYPING EFFECT

let display = "STOP. SHOP. REPEAT.";
let ded = document.getElementById("demo");
let speed = 200;
let i = 0;

function dis() {
  if (i < display.length) {
    ded.innerHTML += display[i];
    i++;
    setTimeout(dis, speed);
  }
}

dis();
let play = "Experience The Beauty Of Clicking Away Your Needs.";
let j = 0;
let demo = document.getElementById("dead");
let fast = 100;
function news() {
  if (j < play.length) {
    demo.innerHTML += play[j];
    j++;
    setTimeout(news, fast);
  }
}
news();

window.addEventListener("click", function () {
  console.log("this is the window");
});

const greet = (greeting) => (mane) => console.log(`${greeting}, ${mane}`);

greet("Good morning")("Tola");
