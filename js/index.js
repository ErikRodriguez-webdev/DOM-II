// Your code goes here
// 1
const navH1adds = document.querySelector(".logo-heading");
navH1adds.addEventListener("mouseenter", () => {
  navH1adds.style.color = "purple";
});

// 2
const navH1removes = document.querySelector(".logo-heading");
navH1removes.addEventListener("mouseleave", () => {
  navH1removes.style.color = "black";
});

// 3 PROPAGATION part 1
document.querySelectorAll("img").forEach(function(item) {
  item.addEventListener("click", (event) => {
    item.style.transform = "scale(1.5)";
    event.stopPropagation();
  });
});

// 4
document.querySelectorAll("p").forEach(function(pText) {
  pText.addEventListener("copy", () => {
    pText.style.color = "orange";
  });
});

// 5
document.querySelectorAll("a").forEach(function(links) {
  links.addEventListener("dblclick", () => {
    links.style.border = "2px dotted blue";
  });
});

// 6
document.querySelectorAll(".btn").forEach(function(theBtns) {
  window.addEventListener("resize", () => {
    theBtns.style.display = "none";
  });
});

// 7
const firstH2 = document.querySelector(".intro h2");
firstH2.addEventListener("wheel", () => {
  firstH2.style.textAlign = "center";
});

// 8
const theHeader = document.querySelector(".nav-container");
theHeader.addEventListener("contextmenu", () => {
  gsap.to(".nav-container", {
    rotate: 180,
    yoyo: true,
    repeat: 1
  });
});

// 9
const anImageAdd = document.querySelector(".content-destination img");
anImageAdd.addEventListener("mouseover", () => {
  anImageAdd.style.border = "10px solid red";
});

// 10
const anImageRemove = document.querySelector(".content-destination img");
anImageRemove.addEventListener("mouseout", () => {
  anImageRemove.style.border = "0px solid red";
});

// propagation here part 2
const bg = document.querySelector("body");
bg.addEventListener("click", () => {
  bg.style.backgroundColor = "green";
});

//preventdefault here part 3
const addLink = document.querySelector(".nav-link");
addLink.href = "http://www.lambdaschool.com/";
//console.log(addLink);

const stopNewLink = document.querySelector(".nav-link");
stopNewLink.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  console.log("link has been prevented");
});
