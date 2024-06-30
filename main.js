// Content One
const ContentOne = document.querySelector("#content-one");
const ContentButtonOne = document.querySelectorAll(".one");

ContentButtonOne.forEach((btn) => {
  btn.onclick = (e) => {
    ContentOne.style.display = "flex";
    ContentTwo.style.display = "none";
    e.preventDefault();
  };
});

// Modal Box Two
const ContentTwo = document.querySelector("#content-two");
const ContentButtonTwo = document.querySelectorAll(".two");

ContentButtonTwo.forEach((btn) => {
  btn.onclick = (e) => {
    ContentTwo.style.display = "block";
    ContentOne.style.display = "none";
    e.preventDefault();
  };
});
