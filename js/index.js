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
    item.style.transform = "scale(1.3)";
  });
});

// 4
const allPText = document.querySelector("p");
allPText.addEventListener("dblclick", () => {
  allPText.style.color = "red";
});

// 5
document.querySelectorAll("a").forEach(function(links) {
  links.addEventListener("keydown", () => {
    links.style.border = "2px dotted blue";
  });
});

// 6
