let addbutton = document.querySelectorAll("#addbutton");
let fieldcontainer = document.getElementsByClassName("fieldcontainer")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let todoname = document.getElementById("todoname");
let description = document.getElementById("description");
let statusM = document.getElementById("status");
let priorityM = document.getElementById("priorityM");
let btn2=document.querySelectorAll("#btn2");
let counter=document.querySelectorAll("#counter");
let listcontainer=document.querySelectorAll("#listcontainer");

function openField() {
  fieldcontainer.style.display = "block";
}
function closeField() {
  fieldcontainer.style.display = "none";
}

for (let i = 0; i < addbutton.length; i++) {
  addbutton[i].onclick = openField;
}

function closeTodo(){
listcontainer.style.display = "none";
}


btn2.onclick = closeTodo;
console.log("working")

  


overlay.onclick = closeField;

const data = [];
function render(data) {
  const listcontainer = document.getElementsByClassName("listcontainer");

  const dataLastIndex = data[data.length - 1];

  if (dataLastIndex.status === "todo") {
    listcontainer[0].innerHTML += createCard(dataLastIndex);
  }
  if (dataLastIndex.status === "in-progress") {
    listcontainer[1].innerHTML += createCard(dataLastIndex);
  }
  if (dataLastIndex.status === "stuck") {
    listcontainer[2].innerHTML += createCard(dataLastIndex);
  }
  if (dataLastIndex.status === "done") {
    listcontainer[3].innerHTML += createCard(dataLastIndex);
  }
}
function addCard() {
  const Mockdata = {
    title: "",
    desc: "",
    status: "",
    priority: "",
  };

  Mockdata.title = todoname.value;
  Mockdata.desc = description.value;
  Mockdata.status = statusM.value;
  Mockdata.priority = priorityM.value;

  data.push(Mockdata);
  render(data);
}
let id = Math.random();

function createCard(list) {
  const { title, desc, priority } = list;
  return `<div class="list">
      <button class="btn1"><i class="fa fa-check"></i></button>
    <div class="details">
      <h3>${title}</h3>
      <p>${desc} </p>
      <button class="button">${priority}</button>
    </div>
    <div class="icons">
      <button class="btn2"><i class="fa fa-remove"></i></button>
      <button class="btn3"><i class="fa fa-edit"></i></button>
    </div>
  </div>`;
}


