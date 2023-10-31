let addbutton = document.querySelectorAll(".addbutton");
let fieldcontainer = document.getElementsByClassName("fieldcontainer")[0];
let overlay = document.querySelector(".overlay");
let modal = document.getElementsByClassName("modal")[0];
let container = document.getElementsByClassName("container")[0];

body = document.querySelector("body");

function openModal() {
  console.log("asd");
  fieldcontainer.style.display = "block";
}

function closeModal() {
  fieldcontainer.style.display = "none";
}

addbutton[0].onclick = openModal;
overlay.onclick = closeModal;
