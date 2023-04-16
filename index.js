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

// let display = "STOP. SHOP. REPEAT.";
// let ded = document.getElementById("demo");
// let speed = 200;
// let i = 0;

//  function dis() {
//     if (i < display.length) {
//      ded.innerHTML+= display[i];
//      i++;
//      setTimeout(dis, speed);
//    }
//  }

//  dis();
//  let play = "Experience The Beauty Of Clicking Away Your Needs.";
//  let j = 0;
//  let demo = document.getElementById("dead");
//  let fast = 100;
// function news() {
//    if (j < play.length) {
//      demo.innerHTML += play[j];
//      j++;
//      setTimeout(news, fast);
//    }
//  }
//  news();


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
const videoList = document.querySelector(".video-list");
const search = document.getElementById("search");
const button = document.querySelector("#btn");
const pop = document.querySelectorAll(".list").textContent;
let api_key = "AIzaSyDBKYHEqw1rwW7C7hRaQ0EAszBmsop6Pyc";
let videohttp = "https://www.googleapis.com/youtube/v3/videos?";
let queryLink = "https://www.googleapis.com/youtube/v3/search?";
let channelhttp = "https://www.googleapis.com/youtube/v3/channels?";
// const getVideo = function () {
//   // console.log(searchquery);

//   const data = fetch(
//     videohttp +
//       new URLSearchParams({
//         key: api_key,
//         part: "snippet",
//         chart: "mostPopular",
//         region: "NG",
//         maxResults: 100,
//       })
//   )
//     .then((res) => {
//       spin.style.display = "none";
//       show.style.display = "flex";
//       return res.json();
//     })
//     .then((data) => {
//       const videoData = data;
//       data.items.forEach((item) => {
//         getchannelicon(item);
//       });
//       console.log(videoData);
// videoData.map((el) => {
//   console.log(el.snippet);
//   const html = `<div class="video-card">
//       <div class="video-image">
//           <img src="${el}" alt="">
//       </div>
//       <div class="channel-detail">
//           <img src="${el.image}" alt="">
//           <div>
//               <h4>${el.description}</h4>
//               <p>${el.title}</p>
//           </div>
//       </div>
//       <!-- <div class="upload-details">
//           <p></p>
//           <p></p>
//       </div> -->
//      </div>`;
//   videoList.insertAdjacentHTML("afterbegin", html);
// });
//     })
//     .catch((err) => console.error(`Video not found ${err.message}.`));
// };

// // another way to youtube api
// const getchannelicon = (video_data) =>
//   fetch(
//     channelhttp +
//       new URLSearchParams({
//         key: api_key,
//         part: "snippet",
//         id: video_data.snippet.channelId,
//       })
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data);
//       video_data.channelThumbnail =
//         data.items[0].snippet.thumbnails.default.url;
//       // console.log(video_data);
//       makevideocard(video_data);
//     });
// const makevideocard = (data) => {
//   console.log(data.id);
//   videoList.innerHTML += `</div>
//           <div class="video-card">
//             <div class="video-image">
//               <img
//                 src="${data.thumbnails}"
//                 alt=""
//               />
//             </div>
//             <div class="channel-details">
//               <img
//                 src="${data.channelThumbnail}"
//                 alt=""
//               />
//               <div>
//                 <h4>Introduction to HTMl</h4>
//                 <div>
//                   <p>The school channel</p>
//                   <div class="upload-details">
//                     <p>23 views</p>
//                     <p>${data.snippet.publishedAt}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>`;
//   //   videoList.insertAdjacentHTML("afterbegin", html);`
// };
// // button.addEventListener("click", function (e) {
// //   e.preventDefault;
// //   const search = document.getElementById("search").value;
// //   const spin = document.getElementById("spin");
// //   const show = document.getElementById("show");
// //   spin.style.display = "block";
// //   show.style.display = "none";
// //   getVideo();
// // });
// let searchlink = "https://www.youtube.com/results?search_query=";
// button.addEventListener("click", () => {
//   if (search.value.length) {
//     location.href = searchlink + search.value;
//   }
// });
// getVideo();
// const pop = document.querySelectorAll(".list");
// let text = ''
// const clicked = () => pop.map(el => el.addEventListener('click', (e) => {
//   let text = el.textContent.toString()
//   // console.log(text)
//   // console.log(typeof text)
//   return () => text
// }))

// let inner = clicked()
// console.log(inner())
// const insert = () => {for(let i=0; i<pop.length; i++){
//   pop[0].addEventListener('click', () => {
//     console.log(pop[0].textContent)
//     return pop[0].textContent
    
//   })
// }}
// const each = insert()
// console.log(each)
// // 

const video = (search) => {
  // console.log(another)
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
        let eachvideo = `<div class="video-card">
        <iframe width='350' height='300' src='http://www.youtube.com/embed/${item.id.videoId}' frameborder='0' allowfullscreen></iframe>
        <div/>`;
        videoList.insertAdjacentHTML("afterbegin", eachvideo);
      });
    });
};

button.addEventListener("click", function (e) {
  e.preventDefault;
  const search = document.getElementById("search").value;
  const spin = document.getElementById("spin");
  const show = document.getElementById("show");
  // spin.style.display = "block";
  // show.style.display = "none";
  video(search);
});
