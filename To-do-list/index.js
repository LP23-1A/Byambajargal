let addbutton = document.querySelectorAll("#addbutton");
let fieldcontainer = document.getElementsByClassName("fieldcontainer")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let todoname = document.getElementById("todoname");
let description = document.getElementById("description");
let statusM = document.getElementById("status");
let but2 = document.getElementById("but2");
let priorityM = document.getElementById("priorityM");
let counter = document.querySelectorAll("#counter");
let list = document.querySelectorAll("#list");
let icons = document.getElementsByClassName("icon")[0];
let drag = document.getElementsByClassName("drag");


function randomNumberGanerate() {
  return String(Math.random(1));
}

function openField() {
  fieldcontainer.style.display = "block";
}
function closeField() {
  fieldcontainer.style.display = "none";
}

for (let i = 0; i < addbutton.length; i++) {
  addbutton[i].onclick = openField;
}

// let btn2 =  document.querySelector('.btn2')
// let btn3 = document.querySelector('.btn3')
// function closeTodo(){
// btn2.remove();
// }
// btn3[0].onclick = closeTodo
// btn2.addEventListener("click" , () => {
//   alert ("clicked")
// })

// btn2.onclick=closeTodo;

overlay.onclick = closeField;

let data = [];

function render(data) {
  const listcontainer = document.getElementsByClassName("listcontainer");

  listcontainer[0].innerHTML = "";
  listcontainer[1].innerHTML = "";
  listcontainer[2].innerHTML = "";
  listcontainer[3].innerHTML = "";

  data.forEach((element) => {
    if (element.status === "todo") {
      listcontainer[0].innerHTML += createCard(element);
    }
    if (element.status === "in-progress") {
      listcontainer[1].innerHTML += createCard(element);
    }
    if (element.status === "stuck") {
      listcontainer[2].innerHTML += createCard(element);
    }
    if (element.status === "done") {
      listcontainer[3].innerHTML += createCard(element);
    }
  });

  let removeBtn = document.querySelectorAll(".remove");

  removeBtn.forEach((element) => {
    element.onclick = function () {
      deleteItem(element);
    };
  });
}
function addCard() {
  const Mockdata = {
    id: "",
    title: "",
    desc: "",
    status: "",
    priority: "",
  };

  Mockdata.id = randomNumberGanerate();
  Mockdata.title = todoname.value;
  Mockdata.desc = description.value;
  Mockdata.status = statusM.value;
  Mockdata.priority = priorityM.value;

  data.push(Mockdata);
  render(data);
  // closeTodo();
}

// let id = Math.random();

function createCard(list) {
  const { id, title, desc, priority } = list;
  return `<div class="list">
      <button class="btn1"><i class="fa fa-check"></i></button>
    <div class="details">
      <h3>${title}</h3>
      <p>${desc} </p>
      <button class="button">${priority}</button>
    </div>
    <div class="icons">
      <button class="remove" id="${id}"><i class="fa fa-remove"></i></button>
      <button class="btn3"><i class="fa fa-edit"></i></button>
    </div>
  </div>`;
}

function deleteItem(element) {
  const findId = element.id;
  const newArr = data.filter((el) => {
    console.log(el.id, findId);
    return el.id !== findId;
  });

  data = newArr;

  render(data);
}
