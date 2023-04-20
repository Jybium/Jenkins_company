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
// let stopShopRepeat = document.querySelector('')


// FOR THE SPINNER
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 2000);
}
function showPage() {
  document.getElementById("spin").style.display = "none";
  document.getElementById("show").style.display = "block";
}
// FOR THE TUTORIAL PART
const spin = document.getElementById("spin");
const show = document.getElementById("show");
const videoList = document.querySelector(".video-card");
const search = document.getElementById("search");
const button = document.querySelector("#btn");
const pop = document.querySelectorAll(".list");
let api_key = "AIzaSyDBKYHEqw1rwW7C7hRaQ0EAszBmsop6Pyc";
let videohttp = "https://www.googleapis.com/youtube/v3/videos?";
let queryLink = "https://www.googleapis.com/youtube/v3/search?";
let channelhttp = "https://www.googleapis.com/youtube/v3/channels?";




const video = (search) => {
  const data = fetch(
    queryLink +
      new URLSearchParams({
        key: api_key,
        type: "videos",
        part: "snippet",
        maxResults: 100,
        q: search ,
      })
  )
    .then((res) => {
      console.log(data);
      return res.json();
    })
    .then((data) => {
      console.log(data)
      // const [...el] = data.items
      data.items.forEach(item => {
        let eachvideo = `
        <iframe width='350' height='300' src='http://www.youtube.com/embed/${item.id.videoId}' frameborder='0' allowfullscreen></iframe>
        `;
        videoList.insertAdjacentHTML('beforeend', eachvideo);
      });
    });
};

button.addEventListener('click', () =>
{
  const search = document.getElementById('search').value;
  console.log(search)
  video(search);
})