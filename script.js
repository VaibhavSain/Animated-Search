const search = document.querySelector("#search");
const body = document.querySelector("body");
const inputBox = document.querySelector(".input-box");
const box = document.querySelector(".box");
const micIcon = document.querySelector(".mic-icon");


search.addEventListener("click", (event) => {
    box.style.width = "20rem";
    event.stopPropagation(); // Prevent body click
    inputBox.style.display = "flex";
    micIcon.style.display = "flex";
})

body.addEventListener("click", () => {
    inputBox.style.display = "none";
    micIcon.style.display = "none";
    box.style.width = "4rem";
})