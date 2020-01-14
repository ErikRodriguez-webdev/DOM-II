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

// 3
document.querySelectorAll("img").forEach(function(item) {
  item.addEventListener("click", () => {
    item.style.transform = "scale(1.5)";
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
document.querySelector("h2").forEach(function(allH2) {
  allH2.addEventListener("wheel", () => {
    allH2.style.transform = "rotate(1turn)";
  });
});
