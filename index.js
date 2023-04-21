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
document.querySelector('.lds-ring').style.display = 'none'
// 
// FOR THE TUTORIAL PART
const spin = document.getElementById("spin");
const show = document.getElementById("show");
const videoList = document.querySelector(".video-card");
const search = document.getElementById("search");
const button = document.querySelector("#btn");
const [... pop] = document.querySelectorAll(".list");
const errorCan = document.querySelector('.errorCan')
let api_key = "AIzaSyCv5xnjDSLOc5u_xlpvwipdwRrwxzROTsU";
let videohttp = "https://www.googleapis.com/youtube/v3/videos?";
let queryLink = "https://www.googleapis.com/youtube/v3/search?";
let channelhttp = "https://www.googleapis.com/youtube/v3/channels?";



const video = (search) => {
  document.querySelector('.lds-ring').style.display = 'grid'
  console.log(search)
  const data = fetch(
    queryLink +
    new URLSearchParams({
      key: api_key,
      type: "videos",
      part: "snippet",
      maxResults: 1000,
      q: search ,
    })
    )
    .then((res) => {
      console.log(res)
      return res.json();
    })
    .then((data) => {
      document.querySelector('.lds-ring').style.display = 'none'
      videoList.style.display = "block"
      data.items.forEach(item => {
        let eachvideo = `
        <iframe width='350' height='300' src='http://www.youtube.com/embed/${item.id.videoId}' frameborder='0' allowfullscreen></iframe>
        `;
        videoList.insertAdjacentHTML('beforeend', eachvideo);
      });
    })
    .catch((err)  => {console.error(err)
      const insert = `<p class="error"> Error Loading Video: ${err.msg}</p>`
      errorCan.insertAdjacentHTML('afterbegin', insert)
    })
    // search = document.getElementById('search').value = " ";
    errorCan.remove('p')
  };
  button.addEventListener('click', (e) =>
  {
    e.preventDefault;
    videoList.style.display = 'none'
    let search = document.getElementById('search').value;
    console.log(search)
    button.style.backgroundColor = 'dodgerblue'
    video(search);
  })
  search.addEventListener('keypress', (e) => {
    e.preventDefault;
    videoList.style.display = 'none'
  let search = document.getElementById('search').value;
  if(e.key === 'Enter') {console.log(search);video(search)}
})
pop.map(el => el.addEventListener('click', (e) => {
  e.preventDefault;
  let text = el.textContent; 
  console.log(text); 
  video(text)
}))